import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(800, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 85,
        progressive: true
      })
      .toFile(outputPath);
    
    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

const main = async () => {
  const imagesDir = path.join('src', 'assets', 'images');
  const optimizedDir = path.join(imagesDir, 'optimized');

  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir);
  }

  // Get all jpg files
  const files = fs.readdirSync(imagesDir)
    .filter(file => file.endsWith('.jpg'));

  // Optimize each image
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(optimizedDir, file);
    await optimizeImage(inputPath, outputPath);
  }

  // Replace original images with optimized ones
  const optimizedFiles = fs.readdirSync(optimizedDir);
  for (const file of optimizedFiles) {
    fs.renameSync(
      path.join(optimizedDir, file),
      path.join(imagesDir, file)
    );
  }

  // Remove optimized directory
  fs.rmdirSync(optimizedDir);

  console.log('Images optimized successfully!');
};

main().catch(console.error); 