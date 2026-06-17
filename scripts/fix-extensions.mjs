import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const distDir = new URL('../dist', import.meta.url).pathname;

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else if (full.endsWith('.js')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(distDir);
let fixed = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  const original = content;
  content = content.replace(
    /(from\s+['"])(\.\.?\/[^'"]+?)(['"])/g,
    (_, prefix, path, suffix) => {
      if (!path.endsWith('.js') && !path.endsWith('.mjs') && !path.endsWith('.cjs')) {
        return `${prefix}${path}.js${suffix}`;
      }
      return _;
    }
  );
  if (content !== original) {
    fixed++;
    writeFileSync(file, content);
  }
}

console.log(`Fixed ${fixed} files with missing .js extensions`);
