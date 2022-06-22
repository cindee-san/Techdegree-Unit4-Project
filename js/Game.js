/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases, activePhrase){
        this.missed = 0,
        this.phrases = //remove numbers and special characters
        this.activePhrase = //think this through
    }
     startGame() {
         this.startGame = startGame;
     }//hides start screen overlay, calls getRandomPhrase method, sets activePhrase property and adds to board using activePhrase.addPhraseToDisplay
     getRandomPhrase() {
         this.getRandomPhrase = getRandomPhrase;
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