/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0,
        this.phrases = [ {phrase: 'Batman And Robin'},
            {phrase:'Garnet Amethyst and Pearl'},
            {phrase:'Scooby Doo Where Are You'},
            {phrase:'You will not break my soul'},
            {phrase:'Beetlejuice'},
            {phrase:'Queen Bey'} ,
            {phrase:'Love and Thunder'},
            {phrase:'Peanut Butter Jelly Time'}],//remove numbers and special characters
        this.activePhrase = null //think this through
    }
     startGame() {
         this.startGame = startGame;
     }//hides start screen overlay, calls getRandomPhrase method, sets activePhrase property and adds to board using activePhrase.addPhraseToDisplay
     getRandomPhrase() {
        const randomPhrase= this.phrases[Math.floor(Math.random()*this.phrases.length)];    
        this.activePhrase = new Phrase(randomPhrase);   
        return this.activePhrase;
     }
     handleInteraction() {
         this.handleInteraction = handleInteraction;
     }
     removeLife(){
         this.removeLife = removeLife
     }
     checkForWin() {
         this.checkForWin = checkForWin
     }
     gameOver() {//displays original start screen overlay, updates overlay h1 with win  or loss message, replaces overlay's start css class with either win or lose css class
         this.gameOver = gameOver  
    }

}