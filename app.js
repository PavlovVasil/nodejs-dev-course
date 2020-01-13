const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');

const command = process.argv[2];

//Create yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note!');
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    handler: () => {
        console.log('Removing the note');
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log('Listing out all your notes');
    }
})


//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading a note')
    }    
})

console.log(yargs.argv)

//add, remove, read, list

