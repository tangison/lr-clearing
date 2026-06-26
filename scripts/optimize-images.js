// scripts/optimize-images.js
// Phase 2 — Convert all JPEGs to optimized WebP, keeping originals.
// - Hero: max 1920px wide, q85
// - Service/scene/industry: max 1200px wide, q80
// - Team photos: 1:1 square, center-cropped, 600x600, q85
// Logs each file: original KB → WebP KB → savings %.

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const PUBLIC = path.join(REPO, 'public');

// (relative_path, kind)  — kind drives resize/crop rules
const IMAGES = [
  // Hero
  ['public/images/hero.jpeg', 'hero'],
  // Reserved (kept, optimized for future use)
  ['public/images/office.jpeg', 'standard'],
  ['public/images/forklift.jpeg', 'standard'],
  // Services
  ['public/images/services/customs-clearing.jpeg', 'standard'],
  ['public/images/services/freight-forwarding.jpeg', 'standard'],
  ['public/images/services/walvis-bay-port.jpeg', 'standard'],
  ['public/images/services/warehouse.jpeg', 'standard'],
  // Scenes
  ['public/images/scenes/customs-2.jpeg', 'standard'],
  ['public/images/scenes/cargo-ship-2.jpeg', 'standard'],
  ['public/images/scenes/truck-highway.jpeg', 'standard'],
  ['public/images/scenes/port-aerial.jpeg', 'standard'],
  ['public/images/scenes/port-sunset.jpeg', 'standard'],
  ['public/images/scenes/port-wide.jpeg', 'standard'],
  ['public/images/scenes/warehouse-wide.jpeg', 'standard'],
  // Industries
  ['public/images/industries/mining.jpeg', 'standard'],
  ['public/images/industries/agriculture.jpeg', 'standard'],
  ['public/images/industries/manufacturing.jpeg', 'standard'],
  ['public/images/industries/fisheries.jpeg', 'standard'],
  ['public/images/industries/construction.jpeg', 'standard'],
  // Team (square crop)
  ['public/images/team/linus-sibungo.jpeg', 'team'],
  ['public/images/team/patience-sibungo.jpeg', 'team'],
];

function fmt(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function processOne(relPath, kind) {
  const abs = path.join(REPO, relPath);
  if (!fs.existsSync(abs)) {
    console.log(`  SKIP  ${relPath}  (file not found)`);
    return null;
  }
  const outPath = abs.replace(/\.jpeg$/, '.webp').replace(/\.jpg$/, '.webp');
  const originalSize = fs.statSync(abs).size;

  let pipeline = sharp(abs, { failOn: 'none' });

  if (kind === 'hero') {
    pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
    pipeline = pipeline.webp({ quality: 85 });
  } else if (kind === 'team') {
    // Square center-crop, max 600x600
    pipeline = pipeline.resize({
      width: 600,
      height: 600,
      fit: 'cover',
      position: 'attention',  // sharp's smart attention-based crop (good for faces)
      withoutEnlargement: true,
    });
    pipeline = pipeline.webp({ quality: 85 });
  } else {
    // standard
    pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
    pipeline = pipeline.webp({ quality: 80 });
  }

  await pipeline.toFile(outPath);
  const newSize = fs.statSync(outPath).size;
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
  console.log(
    `  OK   ${relPath.replace('public/', '')}   ${fmt(originalSize)} → ${fmt(newSize)}   (-${savings}%)`
  );
  return { relPath, originalSize, newSize, savings };
}

(async () => {
  console.log('\n=== Phase 2: WebP Optimization ===\n');
  const results = [];
  for (const [rel, kind] of IMAGES) {
    try {
      const r = await processOne(rel, kind);
      if (r) results.push(r);
    } catch (e) {
      console.log(`  FAIL ${rel}  ${e.message}`);
    }
  }
  const totalOrig = results.reduce((a, r) => a + r.originalSize, 0);
  const totalNew = results.reduce((a, r) => a + r.newSize, 0);
  const totalSavings = ((1 - totalNew / totalOrig) * 100).toFixed(1);
  console.log(
    `\nTotal: ${fmt(totalOrig)} → ${fmt(totalNew)}  (-${totalSavings}% across ${results.length} files)\n`
  );
})();
