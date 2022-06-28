/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const startScreen = document.querySelector('#overlay');
const gameResultMessage = document.getElementById('game-over-message');
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
     handleInteraction(button) {
         console.log(button);
        button.disabled = true;
        let pressedLetter = button.textContent;

        if(this.activePhrase.phrase.includes(pressedLetter) === true){
            console.log('im right');
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(pressedLetter);
            this.checkForWin();
                if(this.checkForWin() === true){
                    return this.gameOver();
                }
        } else{
            console.log('im wrong');
            button.classList.add('wrong');
            return this.removeLife();
        }
     }
     removeLife(){
        this.missed += 1
        
        const playerLife = document.querySelector('#life');
        const lostLife = playerLife.src='images/lostHeart.png';
        playerLife.setAttribute('id', 'lost');
        
        if (this.missed === 5){
            startScreen.style.display = 'block';
            startScreen.setAttribute('class', 'lose');
            gameResultMessage.setAttribute('id', 'game-lost');
            gameResultMessage.innerHTML = 'Better luck next time! Try again soon!';
        } 
        }
     checkForWin() {
        let phraseLettersLi = document.getElementsByClassName('letter');

         if (phraseLettersLi.length === 0){
             return true;
         } else {
             return false;
         }
    }
     gameOver() {
        startScreen.style.display = 'block';
        startScreen.setAttribute('class', 'win');
        gameResultMessage.setAttribute('id', 'game-won');
        gameResultMessage.innerHTML = 'Congrats! You won the game!';
         
    }

}