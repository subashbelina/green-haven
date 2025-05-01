#!/bin/bash

# Create optimized directory if it doesn't exist
mkdir -p src/assets/images/optimized

# Optimize each image
for img in src/assets/images/*.jpg; do
  filename=$(basename "$img")
  convert "$img" -strip -quality 85 -resize "800x800>" "src/assets/images/optimized/$filename"
done

# Replace original images with optimized ones
mv src/assets/images/optimized/* src/assets/images/
rmdir src/assets/images/optimized

echo "Images optimized successfully!" 