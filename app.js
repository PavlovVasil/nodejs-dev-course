const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('vasil@vasilpavlov.com')); 

// const fs = require('fs');
// const add = require('./utils.js')
// fs.appendFileSync('notes.txt', 'I live in Sofia.');
//const sum = add(4, -2);
//console.log(sum);