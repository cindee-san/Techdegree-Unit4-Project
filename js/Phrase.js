/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.phrase.toLowerCase(); //check this
    }
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        
        const activePhraseArray = this.phrase.split('')
        activePhraseArray.forEach(letter => { 
            let eachCharacter = document.createElement('li');
                if(letter === ' '){
                    eachCharacter.setAttribute('class', 'space');
                    eachCharacter.textContent = (' ');
                    
                } else {
                    eachCharacter.setAttribute('class', `hide letter ${letter}`)
                    eachCharacter.textContent =(`${letter}`);
                }    
            phraseDiv.firstElementChild.appendChild(eachCharacter);  
        });    

        
    }
    checkLetter() {
        this.checkLetter = checkLetter
    }
    showMatchedLetter() {
        this.showMatchedLetter = showMatchedLetter
    }
}