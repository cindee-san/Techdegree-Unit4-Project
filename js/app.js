/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//creates a new game instance upon clicking start button
let game ;
let keyboard = document.getElementById('qwerty');
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

//enables on screen keyboard to work for each game 
keyboard.addEventListener('click', e =>{
    if(e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
})
