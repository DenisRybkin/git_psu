const { musicalMoods } = require('../notes/MusicalMoods');
const { Note } = require('./Note');

class Song {

    constructor({name}) {
        this.name = name;
    }

    notes = [];


    add(note) {
            this.notes.push(note);
    }
    listen() {
        this.notes.forEach((note) => {
            if (note.noteMood === 'Major') {
                console.log(note.noteSign.toUpperCase());
            } else if (note.noteMood === 'Minor') {
                console.log(note.noteSign.toLowerCase());
            }
        });
    }
    get counterNotes() {
        let counter = this.notes.length;
        return counter;
    }

    static compare(param, songOne){
        return param.notes.length - songOne.notes.length;
    }

    takeMood(mood) {
        if (Object.values(musicalMoods).includes(mood))
            this.noteMood = mood;
        else
            return Error("Error Musical Mood!");
    }

    changeMood(mood, start, end){
        let moods = musicalMoods.major;
        for (let i = start; i <= end; i++){
            let majorNote = this.notes[i];
            majorNote.takeMood(mood);
        }
    }

}