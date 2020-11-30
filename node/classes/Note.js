const { notesSigns } = require('../notes/NotesSigns');
const { musicalMoods } = require('../notes/MusicalMoods');

class Note {
    #noteSign;


    constructor({ sign, mood }){
        this.#noteSign = Object.freeze(sign)

        if (!Object.values(musicalMoods).includes(mood))
            this.noteMood = musicalMoods.major;
    }
    static compare(noteOne, noteTwo){

        let IndexNoteOne = 0;
        let IndexNoteTwo = 0;
        let result = 0;

        for (let i =0;i<notesSigns.length;i++){
            IndexNoteOne = i;
            IndexNoteTwo = i;
            if(!(IndexNoteOne===IndexNoteTwo)){
                if(IndexNoteOne>IndexNoteTwo){
                   return IndexNoteOne;
                }
                if (IndexNoteTwo>IndexNoteOne){
                   return IndexNoteTwo;
                }
            }
            else
                if(noteOne.mood===noteTwo.mood){
                    return "Notes are equal"
                }
                else
                    if(noteOne.mood === musicalMoods.major){
                        return "First note is bigger than second"
                    }
                    else
                        return "Second note is bigger than First"
        }
    }
    takeMood(mood) {
        if (Object.values(musicalMoods).includes(mood))
            this.noteMood = mood;
        else
            return Error("Error Musical Mood!");
    }
    get noteSign() {
        return this.#noteSign;
    }

}