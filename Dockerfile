# Use an official Python runtime as base image
FROM python:3.8

# Set the working directory
WORKDIR /app

# Install dependencies
COPY config/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY src /app/src

# Run the application
CMD ["python", "src/app.py"]
