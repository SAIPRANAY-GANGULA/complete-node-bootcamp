const fs = require('fs');

const inputText = fs.readFileSync('./starter/txt/input.txt', 'utf-8');

console.log(inputText);

const textOut = `This is what we know about the avocado: ${inputText}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./starter/txt/output.txt', textOut);

console.log('File written!');
