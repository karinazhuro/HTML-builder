const fs = require('fs');
const path = require('path');
const stream  = fs.createReadStream(`${path.dirname(__filename)}/text.txt`, 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));