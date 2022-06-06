const fs = require('fs');

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const isDuplicated = notes.find( note => note.title === title );

    if(!isDuplicated) {
        notes.push({
            title,
            body
        });
    
        saveNotes(notes);
        console.log('New note saved');
    }
    else {
        console.log('Item duplicated');
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const index = notes.findIndex( note => note.title === title );

    if(index !== -1) {
        notes.splice( index, 1 );
        const dataJSON = JSON.stringify(notes);
        fs.writeFileSync('notes.json', dataJSON);
        console.log('Note deleted');
    }
    else {
        console.log('There is no note with that title');
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log('Your notes');

    notes.forEach( note => {
        console.log(note.title, ' ', note.body);
    } );
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find( note => note.title === title )

    if(foundNote) {
        console.log(foundNote.title, ' ', foundNote.body);
    }
    else {
        console.log('Note not found');
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};