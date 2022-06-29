/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const gameResultMessage = document.getElementById('game-over-message');
const giveHeartLifeId= document.getElementsByTagName('img');
const keys = document.getElementsByClassName('key');
const phraseCharacters = document.getElementById('phrase').firstElementChild;
const phraseLettersLi = document.getElementsByClassName('letter');
const playerHearts = document.getElementsByClassName('tries');
const startScreen = document.querySelector('#overlay');
class Game {
    constructor(){
        this.missed = 0,
        this.phrases = [ 
            new Phrase('Batman And Robin'),
            new Phrase('Crystal Gems'),
            new Phrase('Scooby Doo Where Are You'),
            new Phrase('You will not break my soul'),
            new Phrase ('Beetlejuice'),
            new Phrase ('Butterflies in the sky'),
            new Phrase ('Avengers Assemble'),
            new Phrase ('Peanut Butter Jelly Time')],
        this.activePhrase = null 
    }
     startGame() {
        startScreen.style.display = 'none';

        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
        //attaches a 'life' id to each heart, helps with removeLife function
        for(let i = 0; i < giveHeartLifeId.length; i++){
            giveHeartLifeId[i].setAttribute('id', 'life');
        }
     }
     
     getRandomPhrase() {
        const randomPhrase= this.phrases[Math.floor(Math.random()*this.phrases.length)];    
        this.activePhrase = randomPhrase;   
     }

     handleInteraction(button) {
        button.disabled = true;

        let pressedLetter = button.textContent;
        //checks if the user selected letter is in the phrase
        //checks if the user has won and ends the game if so
        //calls removeLife id the player guessed incorrectly
        if(this.activePhrase.phrase.includes(pressedLetter) === true){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(pressedLetter);
            this.checkForWin();
                if(this.checkForWin() === true){
                    return this.gameOver();
                }
        } else{
            button.classList.add('wrong');
            return this.removeLife();
        }
     }

     removeLife(){
        //adds one to the missed property if the player guessed incorrectly
        this.missed += 1
        
        const playerLife = document.querySelector('#life');
        const lostLife = playerLife.src='images/lostHeart.png';
        playerLife.setAttribute('id', 'lost');

        if (this.missed ===5){
            return this.gameOver(true);
        }
     }
     
     checkForWin() {
         if (phraseLettersLi.length === 0){
             return true;
         } else {
             return false;
         }
    }
     gameOver() {
        //if the player has 5 missed guesses, shows losing screen and resets game board
        if (this.missed === 5){
            startScreen.style.display = 'flex';
            startScreen.setAttribute('class', 'lose');
            gameResultMessage.setAttribute('id', 'game-lost');
            gameResultMessage.innerHTML = 'Better luck next time! Try again soon!';
            this.resetGameBoard(phraseCharacters);      

        } else{  
        startScreen.style.display = 'flex';
        startScreen.setAttribute('class', 'win');
        gameResultMessage.setAttribute('id', 'game-won');
        gameResultMessage.innerHTML = 'Congrats! You won the game!';
        this.resetGameBoard(phraseCharacters);
        }

    }

    resetGameBoard(phraseCharacters){
        //clears the ul containing phrase characters
        while (phraseCharacters.firstElementChild){
            phraseCharacters.removeChild(phraseCharacters.firstElementChild);
        }
        //resets each key
        Array.from(keys).forEach((key) => {
            if(key.className === 'chosen' || 'wrong'){
                key.classList.remove('chosen');
                key.classList.remove('wrong');
                key.disabled = false;
            }
        });
    
        //resets each heart
        Array.from(playerHearts).forEach((heart) =>{
            if(heart.innerHTML === '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30" id="lost">'){
                heart.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">'
            }
        })  
    }
}