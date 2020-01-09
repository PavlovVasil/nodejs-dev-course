const chalk = require('chalk');
const validator = require('validator');
// const getNotes = require('./notes.js');

const msg = getNotes();
const greenMsg = chalk.green.inverse.bold('Success');

// console.log(msg);
console.log(validator.isEmail('vasil@vasilpavlov.com')); 
console.log(greenMsg)