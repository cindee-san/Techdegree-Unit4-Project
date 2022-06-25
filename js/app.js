/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase('You can do anything!');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();