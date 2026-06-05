# Use a lightweight python image
FROM python:3.10-slim

# Install system dependencies needed for OpenCV and PaddleOCR
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libgl1 \
    libglib2.0-0 \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy application files
COPY server.py /app/
COPY .python-version /app/
COPY runtime.txt /app/

# Install python dependencies directly to save build steps
RUN pip install --no-cache-dir \
    "paddlepaddle>=3.0.0" \
    paddleocr>=2.7.0 \
    flask \
    flask-cors \
    opencv-python-headless

# Hugging Face Spaces runs on port 7860 by default
EXPOSE 7860

# Set environment variables
# This will trigger server.py's production checks (bind to 0.0.0.0, disable debug, use port 7860)
ENV PORT=7860
ENV PYTHONUNBUFFERED=1

# Pre-download the PaddleOCR model during the Docker build stage
# so it doesn't slow down the first request in production.
RUN python -c "from paddleocr import PaddleOCR; PaddleOCR(lang='en', enable_mkldnn=False)"

# Start the Flask app
CMD ["python", "server.py"]
