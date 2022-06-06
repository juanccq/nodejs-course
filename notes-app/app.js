// const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')

yargs.version('1.1.0');

yargs.command('add','Add a new note', 
    {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    function ( argv ) {
        notes.addNote(argv.title, argv.body);
    }
).help().argv;

yargs.command('remove','Remove a new note',
    {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    function ( argv ) {
        notes.removeNote(argv.title);
    }
).help().argv;

yargs.command( 'list', 'List all notes', 
    {},
    function (argv) {
        notes.listNotes();
    }
).help().argv;

yargs.command('read', 'Read a new note',
    {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    function (argv) {
        notes.readNote(argv.title);
    }
).help().argv;