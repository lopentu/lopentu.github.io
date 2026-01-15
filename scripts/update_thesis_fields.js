const fs = require('fs');
const path = require('path');
const glob = require('glob');

const pattern = process.argv[2] || 'src/data/alumni/*.json';

const files = glob.sync(pattern);
if (files.length === 0) {
  console.error('No files matched:', pattern);
  process.exit(1);
}

files.forEach((file) => {
  const full = path.resolve(file);
  const raw = fs.readFileSync(full, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse JSON:', file, e.message);
    return;
  }

  if (!Array.isArray(data)) {
    console.warn('Skipping non-array JSON:', file);
    return;
  }

  let changed = false;
  data = data.map((item) => {
    if (item && typeof item === 'object' && !('thesis' in item)) {
      changed = true;
      return { ...item, thesis: null };
    }
    return item;
  });

  if (changed) {
    fs.writeFileSync(full, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log('Updated:', file);
  } else {
    console.log('No changes needed:', file);
  }
});
