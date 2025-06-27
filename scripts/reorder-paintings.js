#!/usr/bin/env node

/**
 * Helper script to reorder paintings in the gallery
 * Usage: node scripts/reorder-paintings.js
 */

const fs = require('fs');
const path = require('path');

const metadataPath = path.join(__dirname, '../public/paintings/metadata.json');

// Read current metadata
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

console.log('🎨 Current Painting Order:');
console.log('==========================');

// Display current order
Object.entries(metadata)
  .sort(([,a], [,b]) => a.order - b.order)
  .forEach(([filename, data], index) => {
    console.log(`${index + 1}. ${data.title} (${filename})`);
  });

console.log('\n📝 To change the order:');
console.log('1. Edit the "order" field in public/paintings/metadata.json');
console.log('2. Use numbers 1, 2, 3, etc. (lower numbers appear first)');
console.log('3. Save the file and refresh your website');
console.log('\n💡 Tips:');
console.log('- Order 1 = First painting displayed');
console.log('- Featured images are the first 6 by order');
console.log('- You can use any numbers (1, 5, 10, 100) for flexible ordering');
console.log('- Gaps in numbers are fine (1, 3, 5, 10)');

// Show example of how to reorder
console.log('\n🔧 Example reordering:');
console.log('To move "Flowers in Vase" to first position:');
console.log('Change "flower-vase.jpg" order from 4 to 1');
console.log('And adjust other orders accordingly');

console.log('\n✨ Your paintings will automatically reorder on the website!'); 