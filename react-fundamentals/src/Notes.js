// const fs = require('fs');
import fs from 'fs';
const filePath = 'notes.txt';

// CREATE
function addNote(note) {
  fs.appendFile(filePath, note + '\n', (err) => {
    if (err) throw err;
    console.log('✅ Note added!');
  });
}

// READ
function readNotes() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') return console.log('⚠️ No notes found.');
      throw err;
    }
    console.log("📒 Your Notes:\n" + data);
  });
}

// UPDATE (overwrite old notes)
function updateNotes(newContent) {
  fs.writeFile(filePath, newContent + '\n', (err) => {
    if (err) throw err;
    console.log('🔄 Notes updated!');
  });
}

// DELETE
function deleteNotes() {
  fs.unlink(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') return console.log('⚠️ No notes to delete.');
      throw err;
    }
    console.log('🗑️ Notes deleted!');
  });
}

// DEMO
addNote("Learn Node.js");
addNote("Master fs module");
readNotes();
updateNotes("New Start: Fresh Notes!");
readNotes();
deleteNotes();
