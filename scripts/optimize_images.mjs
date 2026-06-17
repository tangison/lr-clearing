import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join } from 'path';

const ROOT = '/home/z/my-project/work/lr-clearing/public/images';
const dirs = ['scenes', 'services', 'industries'];

for (const dir of dirs) {
  const fullDir = join(ROOT, dir);
  const files = await readdir(fullDir);
  for (const file of files) {
    if (!file.match(/\.(jpe?g|png)$/i)) continue;
    const filePath = join(fullDir, file);
    const st = await stat(filePath);
    const sizeMB = st.size / (1024 * 1024);
    
    // Only optimize if larger than 400KB
    if (sizeMB < 0.4) {
      console.log(`  skip  ${dir}/${file}  (${(sizeMB * 1024).toFixed(0)} KB)`);
      continue;
    }
    
    const tmpPath = filePath + '.opt.jpg';
    await sharp(filePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(tmpPath);
    
    const origStat = await stat(filePath);
    const newStat = await stat(tmpPath);
    const ratio = (1 - newStat.size / origStat.size) * 100;
    
    // Replace original (always as .jpeg for consistency)
    await unlink(filePath);
    const newPath = filePath.replace(/\.(jpe?g|png)$/i, '.jpeg');
    await rename(tmpPath, newPath);
    
    console.log(`  ✓ ${dir}/${file} → ${newPath.split('/').pop()}  ${(origStat.size/1024).toFixed(0)}KB → ${(newStat.size/1024).toFixed(0)}KB  (-${ratio.toFixed(0)}%)`);
  }
}
console.log('Done.');
