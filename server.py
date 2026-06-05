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
        
    engine = request.form.get('engine', 'paddle')
    
    try:
        # Read image file bytes
        file_content = file.read()
        
        parsed_data = None
        
        if engine == 'ocrspace':
            print("Processing with OCR.space engine...")
            elements = get_ocr_space_elements(file_content, file.filename)
            if elements:
                parsed_data = parse_elements(elements)
            else:
                print("OCR.space engine failed. Falling back to PaddleOCR...")
                
        if parsed_data is None:
            # Read image file bytes directly into numpy array
            file_bytes = np.frombuffer(file_content, np.uint8)
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

def get_ocr_space_elements(file_bytes, filename):
    import requests
    try:
        payload = {
            'apikey': os.environ.get('OCR_SPACE_KEY', 'helloworld'),
            'isOverlayRequired': True,
            'isTable': True,
            'language': 'eng',
            'scale': True
        }
        files = {
            'file': (filename or 'image.png', file_bytes, 'image/png')
        }
        res = requests.post('https://api.ocr.space/parse/image', data=payload, files=files, timeout=20)
        if res.status_code != 200:
            return None
            
        ocr_space_res = res.json()
        elements = []
        for result in ocr_space_res.get("ParsedResults", []):
            overlay = result.get("TextOverlay", {})
            for line in overlay.get("Lines", []):
                words = line.get("Words", [])
                if not words:
                    continue
                xs = [w.get("Left", 0) for w in words]
                x_ends = [w.get("Left", 0) + w.get("Width", 0) for w in words]
                ys = [w.get("Top", 0) for w in words]
                y_ends = [w.get("Top", 0) + w.get("Height", 0) for w in words]
                
                x_min, x_max = min(xs), max(x_ends)
                y_min, y_max = min(ys), max(y_ends)
                
                elements.append({
                    "text": line.get("LineText", ""),
                    "box": [[x_min, y_min], [x_max, y_min], [x_max, y_max], [x_min, y_max]],
                    "x": (x_min + x_max) / 2.0,
                    "y": (y_min + y_max) / 2.0,
                    "w": x_max - x_min,
                    "h": y_max - y_min,
                    "confidence": 1.0
                })
        return elements
    except Exception as e:
        print("OCR.space request failed:", e)
        return None

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
                    
                    elements.append({
                        "text": text,
                        "box": box,
                        "x": (x_min + x_max) / 2.0,
                        "y": (y_min + y_max) / 2.0,
                        "w": x_max - x_min,
                        "h": y_max - y_min,
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
                
                elements.append({
                    "text": text,
                    "box": box,
                    "x": (x_min + x_max) / 2.0,
                    "y": (y_min + y_max) / 2.0,
                    "w": x_max - x_min,
                    "h": y_max - y_min,
                    "confidence": score
                })
                
    return parse_elements(elements)

def parse_elements(elements):
    if not elements:
        return {"department": None, "semester": None, "courses": []}
        
    # 1. Detect Department
    detected_dept = None
    # Let's find any text matching department keywords
    for el in elements:
        txt = el["text"].upper()
        if "DEPARTMENT" in txt or "BRANCH" in txt or "PROGRAMME" in txt or "ARTIFICIAL" in txt or "COMPUTER" in txt or "INFORMATION" in txt:
            # Check direct match
            for dept in DEPARTMENTS:
                if dept["name"].upper() in txt:
                    detected_dept = dept["key"]
                    break
            
            # Fuzzy fallback matching for common OCR spelling errors (e.g. "Leaming" / "Leam")
            if not detected_dept:
                if "MACHINE LE" in txt or "AI-ML" in txt or "AI & ML" in txt:
                    detected_dept = "ai-ml"
                elif "DATA SC" in txt or "AI-DS" in txt or "AI & DS" in txt:
                    detected_dept = "ai-ds"
                elif "COMPUTER S" in txt or "CSE" in txt:
                    detected_dept = "cse"
                elif "INFORMATION T" in txt or "IT" in txt:
                    detected_dept = "it"
                elif "ELECTRICAL" in txt or "EEE" in txt:
                    detected_dept = "eee"
                elif "ELECTRONICS" in txt or "ECE" in txt:
                    detected_dept = "ece"
            
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
                
                # Fuzzy fallback matching on the candidates
                if not detected_dept:
                    if "MACHINE LE" in cand_text or "AI-ML" in cand_text or "AI & ML" in cand_text:
                        detected_dept = "ai-ml"
                    elif "DATA SC" in cand_text or "AI-DS" in cand_text or "AI & DS" in cand_text:
                        detected_dept = "ai-ds"
                    elif "COMPUTER S" in cand_text or "CSE" in cand_text:
                        detected_dept = "cse"
                    elif "INFORMATION T" in cand_text or "IT" in cand_text:
                        detected_dept = "it"
                
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
    # Relaxed course code pattern to allow OCR digit typos (e.g. 2 to 4 digits) and spaces
    course_code_regex = re.compile(r'\b(?:\d{2})?[A-Z]{2,5}\s*\d{2,4}\s*[A-Z]?\b')
    
    course_nodes = []
    for el in elements:
        # Search original text with word boundaries intact
        match = course_code_regex.search(el["text"].upper())
        if match:
            el["clean_code"] = match.group(0).replace(" ", "")
            course_nodes.append(el)
            
    # Find S.No column indicators (numbers 1-15 on the left edge) as row markers
    sno_nodes = []
    for el in elements:
        txt = el["text"].strip().rstrip('.,_-')
        if txt.isdigit() and len(txt) <= 2 and el["x"] < 150:
            sno_nodes.append(el)
            
    # Group row coordinates from S.No and course code positions
    row_ys = []
    for sno in sno_nodes:
        y = sno["y"]
        if not any(abs(y - ry) <= 12 for ry in row_ys):
            row_ys.append(y)
    for cn in course_nodes:
        y = cn["y"]
        if not any(abs(y - ry) <= 12 for ry in row_ys):
            row_ys.append(y)
    row_ys.sort()
    
    max_x = max(el["x"] for el in elements) if elements else 1000
    right_boundary = max_x * 0.65
    
    courses = []
    valid_grades = {"O", "A+", "A", "B+", "B", "C", "U", "RA"}
    
    for y_row in row_ys:
        # Find all elements belonging to this row (vertically within 12 pixels)
        row_elements = [el for el in elements if abs(el["y"] - y_row) <= 12]
        
        # A. Code: look for any element matching course_code_regex on this row
        code = ""
        code_el = None
        for el in row_elements:
            match = course_code_regex.search(el["text"].upper())
            if match:
                code = match.group(0).replace(" ", "")
                code_el = el
                break
                
        # Find Semester, Grade, and Result from elements on the right half (x >= right_boundary)
        right_elements = [el for el in row_elements if el["x"] >= right_boundary]
        semester = None
        grade = None
        result = None
        
        for el in right_elements:
            txt = el["text"].strip()
            txt_upper = txt.upper()
            
            # Semester check: single digit
            if txt.isdigit() and len(txt) == 1 and 1 <= int(txt) <= 8:
                semester = int(txt)
                
            # Grade check:
            clean_grade = txt_upper.replace(" ", "")
            if clean_grade == "A1" or clean_grade == "A-PLUS": clean_grade = "A+"
            elif clean_grade == "B1" or clean_grade == "B-PLUS": clean_grade = "B+"
            if clean_grade in valid_grades:
                grade = clean_grade
                
            # Result check:
            if "PASS" in txt_upper or "FAIL" in txt_upper or "ARREAR" in txt_upper:
                result = txt
                
        # Default fallback values for missing fields
        if not grade:
            grade = "U"
        if not result:
            result = "Pass" if grade != "U" else "Fail"
        if grade == "U" and result.upper() == "PASS":
            grade = "A"  # Default pass grade fallback
            
        # E. Reconstruct Title:
        # Sort elements left-to-right to maintain correct word ordering
        title_parts = []
        row_elements.sort(key=lambda el: el["x"])
        for el in row_elements:
            # Exclude S.No index values
            txt = el["text"].strip()
            if txt.rstrip('.,_-').isdigit() and len(txt.rstrip('.,_-')) <= 2 and el["x"] < 150:
                continue
            # Exclude semester, grade, and result columns on the right half
            if el["x"] >= right_boundary:
                continue
                
            el_txt = el["text"].strip()
            # If this is the code node itself, extract only the remainder text
            if code_el and el is code_el:
                match = course_code_regex.search(el_txt.upper())
                if match:
                    remainder = el_txt[match.end():].strip("- ").strip()
                    remainder = re.sub(r'^\d+[\s,.]*', '', remainder).strip()
                    if remainder:
                        title_parts.append(remainder)
                continue
                
            # Otherwise clean leading row-indices and append the text block
            el_txt = re.sub(r'^\d+[\s,.]*', '', el_txt).strip()
            if el_txt and el_txt not in ["-", "_"]:
                title_parts.append(el_txt)
                
        # Combine parts and strip leading garbage/symbols
        title = " ".join(title_parts)
        title = re.sub(r'^[^a-zA-Z0-9\(]*', '', title).strip()
        
        if title or code:
            courses.append({
                "code": code,
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
