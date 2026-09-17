'use strict';

const fs = require('node:fs');
const path = require('node:path');

const outDir = path.join(process.cwd(), 'dist');
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(
  path.join(process.cwd(), 'src', 'account-access.js'),
  path.join(outDir, 'account-access.js')
);
console.log('Build completed.');
