# MKCE CGPA Tracker

An advanced, premium CGPA & SGPA calculator specifically designed for the students of **M. Kumarasamy College of Engineering (MKCE)**. Track grades, analyze academic performance, and export transcripts.

## 🚀 Features
- **Semester SGPA Calculator:** Interactive sheet populated with regulation-specific courses.
- **Cumulative CGPA Dashboard:** Save semesters to track cumulative points and visualize academic performance with dynamic SVG charts.
- **Grade Sheet OCR Scanner:** Upload or drag-and-drop a screenshot of your grade sheet to automatically extract the department, semester, courses, grades, and results.
- **Dual OCR Engines:** Choose between **PaddleOCR (Accurate)** for offline local precision and **OCR.space (Fast API)** for rapid cloud scanning.

---

## 📸 Grade Sheet OCR Scanning Backend Setup

The OCR feature utilizes a python backend (`server.py`) to parse grade sheets, identify course rows, group course titles, and link codes/titles to active curriculum presets to automatically assign credit values.

### ⚙️ Prerequisites
Ensure you have **Python 3.8+** installed.

### 1. Install Dependencies
Run the following command to install the required libraries:
```bash
pip install paddlepaddle paddleocr flask flask-cors opencv-python-headless requests
```

### 2. Configure Your OCR.space API Key (Optional but Recommended for Fast Scanning)
For fast scanning using the OCR.space API, you should configure your API key as an environment variable to keep it secure:

#### Local Setup:
* **Windows (PowerShell)**:
  ```powershell
  $env:OCR_SPACE_KEY="your_free_api_key"
  python server.py
  ```
* **Windows (Command Prompt)**:
  ```cmd
  set OCR_SPACE_KEY=your_free_api_key
  python server.py
  ```
* **Linux / macOS**:
  ```bash
  export OCR_SPACE_KEY="your_free_api_key"
  python server.py
  ```

#### Production (Hugging Face Spaces):
1. Go to your Hugging Face Space **Settings** page.
2. Scroll to the **Variables and secrets** section.
3. Click **New secret**:
   * **Name**: `OCR_SPACE_KEY`
   * **Value**: *Your private API key*
4. Click **Add**.

---

### 3. Start the OCR Server Locally
Run the Flask server locally on your machine:
```bash
python server.py
```
The server will start at `http://127.0.0.1:5000`. Keep this window open while scanning documents.

### 4. Scan & Import
1. Open `index.html` in your web browser.
2. Click **Scan Grade Sheet** on the Course Sheet header.
3. Choose your preferred **OCR Engine** (PaddleOCR or OCR.space).
4. Drag & drop or select your grade sheet screenshot.
5. Review the extracted courses, switch selectors if a mismatch is detected, and click **Import Selected Courses** to auto-fill your tracker!
