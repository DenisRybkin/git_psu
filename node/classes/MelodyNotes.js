const { Song } = require('./Song');


class MelodyNote {

    constructor({ name }) {
        this.name = name;
    }

    songs = [];

    addSong(song) {
        this.songs.push(song);
        this.counterNotes += song.counterNotes;
        this.notes.push(song.notes);

    }
}