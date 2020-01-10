const chalk = require('chalk');
const validator = require('validator');
const greenMsg = chalk.blue.inverse.bold('Success');
console.log(validator.isEmail('vasil@vasilpavlov.com')); 
console.log(greenMsg)