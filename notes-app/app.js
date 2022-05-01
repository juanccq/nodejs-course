// const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js')

yargs.version('1.1.0');

yargs.command('add','Add a new note', {},function () {console.log('Adding a note')}).help().argv;

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a note');
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing notes');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function () {
        console.log('Reading a note');
    }
});