# MKCE CGPA Tracker

An advanced, premium CGPA & SGPA calculator specifically designed for the students of **M. Kumarasamy College of Engineering (MKCE)**. Track grades, analyze academic performance, and export transcripts.

## 🚀 Features
- **Semester SGPA Calculator:** Interactive sheet populated with regulation-specific courses.
- **Cumulative CGPA Dashboard:** Save semesters to track cumulative points and visualize academic performance with dynamic SVG charts.
- **Grade Sheet OCR Scanner:** Upload or drag-and-drop a screenshot of your grade sheet to automatically extract the department, semester, courses, and grades using PaddleOCR.

---

## 📸 Grade Sheet OCR Scanning (PaddleOCR Backend)

The OCR feature utilizes a local Python server running PaddleOCR to parse grade sheets, identify course rows, group wrapped multiline course titles, and link codes/titles to active curriculum presets to automatically assign credit values.

### ⚙️ Prerequisites
Ensure you have **Python 3.8+** installed.

### 1. Install Dependencies
Run the following command to install the required libraries (PaddlePaddle, PaddleOCR, Flask, OpenCV, Flask-CORS):
```bash
pip install paddlepaddle paddleocr flask flask-cors opencv-python-headless
```

### 2. Start the OCR Server
Run the Flask server locally on your machine:
```bash
python server.py
```
The server will start at `http://127.0.0.1:5000`. Keep this window open while scanning documents.

### 3. Scan & Import
1. Open `index.html` in your web browser.
2. Click **Scan Grade Sheet** on the Course Sheet header.
3. Drag & drop or select your grade sheet screenshot.
4. Review the extracted courses, switch selectors if a mismatch is detected, and click **Import Selected Courses** to auto-fill your tracker!

