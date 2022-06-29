/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//controls what happens with the phrase in the game
class Phrase {
    constructor(phrase){
        this.phrase = phrase.phrase.toLowerCase(); 
    }
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        
        const activePhraseArray = this.phrase.split('')
        activePhraseArray.forEach(letter => { 
            let character = document.createElement('li');
                if(letter === ' '){
                    character.setAttribute('class', 'space');
                    character.textContent = (' ');
                    
                } else {
                    character.setAttribute('class', `hide letter ${letter}`)
                    character.textContent =(`${letter}`);
                }    
            phraseDiv.firstElementChild.appendChild(character);  
        });    

        
    }
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter) {
        document.querySelectorAll(`.hide.letter.${letter}`)
        .forEach(matchingLetter => {
            matchingLetter.setAttribute('class', `show`)}); 
    }
}