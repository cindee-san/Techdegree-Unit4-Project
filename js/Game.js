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
         //hides start screen overlay, 
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';

        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
        const giveHeartLifeId= document.getElementsByTagName('img');
            for(let i = 0; i < giveHeartLifeId.length; i++){
                giveHeartLifeId[i].setAttribute('id', 'life');
            }
        
     }
     
     getRandomPhrase() {
        const randomPhrase= this.phrases[Math.floor(Math.random()*this.phrases.length)];    
        this.activePhrase = new Phrase(randomPhrase);   
        return this.activePhrase;
     }
     handleInteraction() {
         
     }
     removeLife(){
        const playerLife = document.querySelector('#life');
        const lostLife = playerLife.src='images/lostHeart.png';
        
        function playerMiss(){
            this.missed += 1
        }
        //think this
        
        if (this.missed === 5){
            return this.gameOver();
        }
        }
        //replaces 1 src images/liveHeart.png with images/lostHeart.png
         //increments over missed property
         //if this.missed = 5, call game over
     checkForWin() {
          //grab array of show li, iterate through them looking at class, if all classes equal show, return true
        let phraseLettersLi = document.getElementsByClassName('letter');

         if (phraseLettersLi.length === 0){
             return true;
         } else {
             return false;
         }
    }
     gameOver() {//displays original start screen overlay, updates overlay h1 with win  or loss message, replaces overlay's start css class with either win or lose css class
         
    }

}