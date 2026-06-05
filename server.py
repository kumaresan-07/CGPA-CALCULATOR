import os
os.environ["PADDLE_PDX_DISABLE_MODEL_SOURCE_CHECK"] = "True"
os.environ["FLAGS_use_mkldnn"] = "0"
# Optimize threads and memory overhead for low-memory container instances (like Render 512MB)
os.environ["CPU_NUM"] = "1"
os.environ["OMP_NUM_THREADS"] = "1"
os.environ["MKL_NUM_THREADS"] = "1"
import re
from flask import Flask, request, jsonify
from flask_cors import CORS
from paddleocr import PaddleOCR
import numpy as np
import cv2

app = Flask(__name__)
# Enable CORS for local cross-origin development (e.g., file:// or different local ports)
CORS(app)

# Initialize PaddleOCR (downloads models if not present)
# lang='en' since the grade sheet is in English
# enable_mkldnn=False avoids PIR oneDNN compatibility crashes on CPU
ocr = PaddleOCR(lang='en', enable_mkldnn=False)

# List of department codes and names for fuzzy/sub-string matching
DEPARTMENTS = [
    {"key": "ai-ds", "name": "Artificial Intelligence and Data Science"},
    {"key": "ai-ml", "name": "Artificial Intelligence and Machine Learning"},
    {"key": "civil", "name": "Civil Engineering"},
    {"key": "cs-bs", "name": "Computer Science and Business Systems"},
    {"key": "cse", "name": "Computer Science and Engineering"},
    {"key": "eee", "name": "Electrical and Electronics Engineering"},
    {"key": "ece", "name": "Electronics and Communication Engineering"},
    {"key": "vlsi", "name": "Electronics Engineering (VLSI)"},
    {"key": "it", "name": "Information Technology"},
    {"key": "mech", "name": "Mechanical Engineering"}
]

@app.route('/', methods=['GET'])
def index():
    return jsonify({
        "status": "online",
        "message": "MKCE CGPA Tracker OCR Scanner Backend is running successfully!"
    })

@app.route('/ocr', methods=['POST'])
def process_ocr():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400
        
    file = request.files['image']
    if file.filename == '':
        return jsonify({"error": "Empty filename"}), 400
        
    try:
        # Read image file bytes directly into numpy array
        file_bytes = np.frombuffer(file.read(), np.uint8)
        img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
        
        if img is None:
            return jsonify({"error": "Failed to decode image"}), 400
            
        # Resize image to optimize CPU inference speed (reduces pixel count while keeping text legible)
        max_dim = 1000
        h, w = img.shape[:2]
        if max(h, w) > max_dim:
            scale = max_dim / float(max(h, w))
            img = cv2.resize(img, (int(w * scale), int(h * scale)), interpolation=cv2.INTER_AREA)
            
        # Run PaddleOCR
        result = ocr.ocr(img)
        
        # Parse OCR results
        parsed_data = parse_ocr_results(result)
        
        return jsonify(parsed_data)
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

def parse_ocr_results(result):
    if not result:
        return {"department": None, "semester": None, "courses": []}
        
    elements = []
    
    # Check if result is a list of dicts (PaddleOCR 3.x)
    if isinstance(result, list) and len(result) > 0 and isinstance(result[0], dict):
        result_dict = result[0]
        texts = result_dict.get('rec_texts', [])
        scores = result_dict.get('rec_scores', [])
        polys = result_dict.get('rec_polys', [])
        if not polys:
            polys = result_dict.get('rec_boxes', [])
        if not polys:
            polys = result_dict.get('dt_polys', [])
            
        for i in range(len(texts)):
            text = texts[i]
            score = scores[i] if i < len(scores) else 1.0
            poly = polys[i] if i < len(polys) else None
            
            if poly is not None:
                # poly could be a numpy array or list
                if hasattr(poly, 'tolist'):
                    box = poly.tolist()
                else:
                    box = list(poly)
                
                # Check if box is valid format
                if len(box) >= 4:
                    xs = [pt[0] for pt in box]
                    ys = [pt[1] for pt in box]
                    x_min, x_max = min(xs), max(xs)
                    y_min, y_max = min(ys), max(ys)
                    
                    x_center = (x_min + x_max) / 2.0
                    y_center = (y_min + y_max) / 2.0
                    height = y_max - y_min
                    width = x_max - x_min
                    
                    elements.append({
                        "text": text,
                        "box": box,
                        "x": x_center,
                        "y": y_center,
                        "w": width,
                        "h": height,
                        "confidence": score
                    })
                    
    # Otherwise check if it is the legacy list-of-lists format
    elif isinstance(result, list) and len(result) > 0 and isinstance(result[0], list):
        for line in result[0]:
            if len(line) >= 2:
                box = line[0]
                text_info = line[1]
                
                if isinstance(text_info, (tuple, list)):
                    text = text_info[0]
                    score = float(text_info[1]) if len(text_info) > 1 else 1.0
                else:
                    text = str(text_info)
                    score = 1.0
                
                xs = [pt[0] for pt in box]
                ys = [pt[1] for pt in box]
                x_min, x_max = min(xs), max(xs)
                y_min, y_max = min(ys), max(ys)
                
                x_center = (x_min + x_max) / 2.0
                y_center = (y_min + y_max) / 2.0
                height = y_max - y_min
                width = x_max - x_min
                
                elements.append({
                    "text": text,
                    "box": box,
                    "x": x_center,
                    "y": y_center,
                    "w": width,
                    "h": height,
                    "confidence": score
                })
                
    if not elements:
        return {"department": None, "semester": None, "courses": []}
        
    # 1. Detect Department
    detected_dept = None
    # Let's find any text matching department keywords
    for el in elements:
        txt = el["text"].upper()
        if "DEPARTMENT" in txt or "BRANCH" in txt or "PROGRAMME" in txt:
            # Look at this element's text (e.g. "Department : B.TECH. - Information Technology")
            dept_part = txt.split(":")[-1].strip() if ":" in txt else txt
            # Check if we can find a matching dept name
            for dept in DEPARTMENTS:
                if dept["name"].upper() in txt or dept["name"].upper() in dept_part:
                    detected_dept = dept["key"]
                    break
            if detected_dept:
                break
                
    # If not found directly, let's look for a line below the "Department :" tag, or do fuzzy matches
    if not detected_dept:
        dept_tag_y = None
        for el in elements:
            txt = el["text"].upper()
            if "DEPARTMENT" in txt or "BRANCH" in txt or "PROGRAMME" in txt:
                dept_tag_y = el["y"]
                break
        if dept_tag_y is not None:
            # Find elements shortly below this y-level and check their text
            candidate_depts = [el for el in elements if el["y"] > dept_tag_y and el["y"] < dept_tag_y + 80]
            candidate_depts.sort(key=lambda e: e["y"])
            for cand in candidate_depts:
                cand_text = cand["text"].upper()
                for dept in DEPARTMENTS:
                    if dept["name"].upper() in cand_text or (len(cand_text) > 4 and cand_text in dept["name"].upper()):
                        detected_dept = dept["key"]
                        break
                if detected_dept:
                    break
                    
    # 2. Detect Semester from header text
    # Let's search for "SEMESTER" followed by a number or Roman numeral
    header_detected_sem = None
    roman_to_int = {
        "I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8,
        "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8
    }
    for el in elements:
        txt = el["text"].upper()
        if "SEMESTER" in txt:
            words = re.findall(r'\b[A-Z0-9]+\b', txt)
            for w in words:
                if w in roman_to_int:
                    header_detected_sem = roman_to_int[w]
                    break
            if header_detected_sem:
                break

    # 3. Extract Course Rows
    # A Course code matches: standard (e.g. CSB1431) or regulation (e.g. 18AMP401L)
    course_code_regex = re.compile(r'\b(?:\d{2})?[A-Z]{2,5}\d{3,4}[A-Z]?\b')
    
    course_nodes = []
    for el in elements:
        cleaned_text = el["text"].replace(" ", "").upper()
        match = course_code_regex.search(cleaned_text)
        if match:
            # Store the matched course code and its details
            el["clean_code"] = match.group(0)
            course_nodes.append(el)
            
    # Sort course nodes by their vertical position
    course_nodes.sort(key=lambda node: node["y"])
    
    courses = []
    
    # For grade scale matching
    valid_grades = {"O", "A+", "A", "B+", "B", "C", "U", "RA"}
    
    # We will iterate through each detected course code node
    for i, code_node in enumerate(course_nodes):
        y_code = code_node["y"]
        x_code = code_node["x"]
        h_code = code_node["h"]
        
        # Define the y range tolerance for items on the same row (about 1.2 times the code node height)
        y_tolerance = h_code * 1.2
        
        # Determine the y-coordinate of the next course code row
        next_y_code = course_nodes[i+1]["y"] if i + 1 < len(course_nodes) else float('inf')
        
        # Find elements on the same row (same y level)
        row_elements = [el for el in elements if abs(el["y"] - y_code) <= y_tolerance]
        
        # Exclude the code node itself
        row_elements = [el for el in row_elements if el is not code_node]
        
        # Find Semester, Grade, and Result from row elements
        semester = None
        grade = None
        result = None
        
        sem_candidates = []
        grade_candidates = []
        result_candidates = []
        
        # Heuristics:
        # Semester is a single digit (typically 1-8). It is located to the right of the course code.
        # Grade is O, A+, A, B+, B, C, U etc. Located to the right of the course code.
        # Result is PASS, FAIL, etc. Located to the right of the course code.
        for re_el in row_elements:
            if re_el["x"] <= x_code:
                continue # Columns are to the right of the code
                
            txt = re_el["text"].strip()
            txt_upper = txt.upper()
            
            # Semester check: single digit
            if txt.isdigit() and len(txt) == 1 and 1 <= int(txt) <= 8:
                sem_candidates.append(re_el)
                
            # Grade check:
            # Let's clean characters commonly misread by OCR (e.g. A1 -> A+, B1 -> B+, A + -> A+)
            clean_grade = txt_upper.replace(" ", "")
            if clean_grade == "A1" or clean_grade == "A-PLUS":
                clean_grade = "A+"
            elif clean_grade == "B1" or clean_grade == "B-PLUS":
                clean_grade = "B+"
            
            if clean_grade in valid_grades:
                grade_candidates.append((re_el, clean_grade))
                
            # Result check:
            if "PASS" in txt_upper or "FAIL" in txt_upper or "ARREAR" in txt_upper:
                result_candidates.append(re_el)
                
        # Choose the best candidates based on relative x-coordinates
        if sem_candidates:
            sem_candidates.sort(key=lambda e: e["x"])
            try:
                semester = int(sem_candidates[0]["text"])
            except ValueError:
                semester = None
            x_sem_limit = sem_candidates[0]["x"]
        else:
            semester = None
            x_sem_limit = x_code + 250 # fallback limit
            
        if grade_candidates:
            # Sort by proximity to expected grade column or just take the first
            grade_candidates.sort(key=lambda item: item[0]["x"])
            grade = grade_candidates[0][1]
        else:
            grade = "U" # Default to U if not detected
            
        if result_candidates:
            result_candidates.sort(key=lambda e: e["x"])
            result = result_candidates[0]["text"]
        else:
            result = "Pass" if grade != "U" else "Fail"
            
        # Reconstruct course title
        # Course title consists of text blocks that:
        # - Are between current row y and next row y
        # - Are to the right of S.No column (usually x > x_code - 50)
        # - Are to the left of the Semester column (x < x_sem_limit - 15)
        title_blocks = []
        for el in elements:
            # Check vertical alignment
            if el["y"] >= y_code - y_tolerance and el["y"] < next_y_code - y_tolerance:
                # Check horizontal alignment
                if el["x"] > x_code - 15 and el["x"] < x_sem_limit - 15:
                    # Exclude the code node text itself
                    if el is not code_node and not code_node["text"] in el["text"]:
                        title_blocks.append(el)
                        
        # Sort title blocks: first by y-coordinate (top-to-bottom), then by x-coordinate (left-to-right)
        title_blocks.sort(key=lambda tb: (tb["y"], tb["x"]))
        
        # Clean and join title blocks
        title_parts = []
        for tb in title_blocks:
            cleaned_tb = tb["text"]
            # Remove leading symbols like "-", "_", " "
            cleaned_tb = re.sub(r'^[_\-\s]+', '', cleaned_tb).strip()
            if cleaned_tb:
                title_parts.append(cleaned_tb)
                
        title = " ".join(title_parts)
        # If title is empty, check if there is some text in the code node itself after the code (e.g. "FLC1184 - JAPANESE")
        if not title:
            code_text = code_node["text"]
            code_match = re.search(r'\b(?:\d{2})?[A-Z]{2,5}\d{3,4}[A-Z]?\b', code_text)
            if code_match:
                remainder = code_text[code_match.end():].strip("- ").strip()
                if remainder:
                    title = remainder
                    
        courses.append({
            "code": code_node["clean_code"],
            "title": title or "Unknown Course",
            "semester": semester,
            "grade": grade,
            "result": result
        })
        
    # Determine the overall semester
    semesters = [c["semester"] for c in courses if c["semester"] is not None]
    overall_sem = max(set(semesters), key=semesters.count) if semesters else header_detected_sem
    
    # If some courses have missing semesters, fill them with the overall_sem
    for c in courses:
        if c["semester"] is None:
            c["semester"] = overall_sem
            
    return {
        "department": detected_dept,
        "semester": overall_sem,
        "courses": courses
    }

if __name__ == '__main__':
    # Dynamically bind to PORT environment variable injected by Render, defaulting to 5000 locally
    port = int(os.environ.get('PORT', 5000))
    is_prod = 'PORT' in os.environ
    
    # In production, run on 0.0.0.0 and disable debug mode.
    # Disabling debug mode is CRITICAL as it prevents Flask from spawning a watcher process,
    # which cuts memory usage in half (~350MB instead of ~700MB) to prevent Render Out of Memory crashes.
    app.run(host='0.0.0.0' if is_prod else '127.0.0.1', 
            port=port, 
            debug=not is_prod)
