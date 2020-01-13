const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');

const command = process.argv[2];

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    'command': 'add',
    'describe': 'Add a new note',
    'handler': () => {
        console.log('Adding a new note!');
    }
})

console.log(yargs.argv)

//add, remove, read, list

