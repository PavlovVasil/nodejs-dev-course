const fs = require('fs');
const add = require('./utils.js')

// fs.appendFileSync('notes.txt', 'I live in Sofia.');

const sum = add(4, -2);

console.log(sum);