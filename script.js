const letters = document.querySelectorAll('.letter');
const lettersArr = Array.from(letters);
word = [];
let answer = "heart";
answerArr = Array.from(answer);

letters.forEach(function(letter){
    letter.addEventListener("click", (e) => {
        // console.log(letter.textContent);

        if (word.length < 5){
        const currentLetter = letter.textContent;     
        word.push(currentLetter);
        processedWord = word.join("");
        console.group(processedWord);
        }
        

        //limit characters

        // first row
        // for (let i = 0; i < 5; i++){
        //     firstRowArray[i].textContent = word[i];
        // } 

        getCurrentRow();
    
        
        

        // word definition global scope
        console.log(word);
    });
});


const rows = document.querySelectorAll('.row');
const rowsArr = Array.from(rows);
n = 0;
getCurrentRow = () =>{
    // const childrenArr = Array.from(rows[n].children);
    for (let i = 0; i < 5; i++){
        rows[n].children[i].textContent = word[i];
    }
    
}
const firstRow = document.querySelector('#first-row');
const firstRowArray = Array.from(firstRow.children);

const enter = document.querySelector('#enter');
enter.onclick = () => {
    console.log(word);
    console.log(answerArr, answer);    
    if (word.length < 5){
        alert("Not Enough Letters");
    } else {
        checkWord(word);
        // alert("5 letters hehehe");
        // colorKeys(word);
        word = [];
        correctLetters =[];
        wrongLetter = [];
        n++;
        includeArr=[];
    }

    
};


//backspace
const backspace = document.querySelector('#backSpace');
backspace.onclick = () =>{
    word.splice(word.length-1);
    console.log(word);
    rows[n].children[word.length].textContent = "";
}
checkWord = () => {
   processedWord = word.join("");

    // word.toString() === answerArr.toString()
    //check if all letters correct
    if (arrayEquals(word ,answerArr)){
        for (let i = 0; i < 5; i++){
            //*** animate individually */
            rows[n].children[i].classList.add('correct');
            // addLetterColor()
        } 
    //pop up modal or smth
    
    } //check if there are correct letters
    else if (arrayEqualsSome(word)){
        // find the index of the correct letters
        console.log(`WORD NA FUCKING PINASA: ${word}`);
        someCorrectLetters(word);
        alert("Some are correct!");
        
    } else {
        alert("stupid ass");
        addWrongColor();
    }

    //check if the correct letters are properly positioned




};

//array equals
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

includeArr = [];
//  some equals

function arrayEqualsSome(a) {
    for (let i = 0; i <= 5; i++){
        console.log(a[i]);
       if (answer.includes(a[i])){
            includeArr.push(1);
       }
    }

    console.log(includeArr);
    return (includeArr.length > 0) ? true : false;
  }


  correctLetters = [];

  function someCorrectLetters(word) {
    //get the index of the matching values
    for(let i = 0; i < word.length; i++){
        if (answerArr.indexOf(word[i]) !== -1){
            console.log(word[i],answerArr[i]);
            // correctLetters.push(word.indexOf(answerArr[i]));
            correctLetters.push(i);
            correctLetters.sort();
     
            
        } 
    }

    console.log(`FUCKING CORRECT LETTERS: ${correctLetters}`);
    addTileColor(correctLetters);

    
    return correctLetters;
  }


  wrongLetter =[];

  addTileColor = (correctLetters) => {
    for (i = 0; i<5;i++){
        if (answerArr[i].indexOf(word[i]) === answerArr.indexOf(answerArr[i])){
            rows[n].children[i].classList.add('correct');
            console.log(`DELETED CORRECT LETTER AT INDEX ${i}`);
            correctLetters.splice(i, 1);
            console.log(`CHECKING CORRECT LETTERS AFTER SPLICE: ${correctLetters}`);
        }  
     
  }
  console.log(`CHECKING CORRECT LETTERS FINAL: ${correctLetters}`);
  getWrongLetters();
  addMoreTileColor(correctLetters);
  addWrongColor(wrongLetter);
}   

addMoreTileColor = (correctLetters) =>{
    console.log(`UPDATED FUCKING CORRECT LETTERS: ${correctLetters}`)
    
           for (i = 0; i < correctLetters.length; i++){ 
                const content = correctLetters[i];
                rows[n].children[content].classList.add('almost-correct');
            }
}

addWrongColor = (wrongLetter) => {
    for (i = 0; i < wrongLetter.length; i++){ 
        const content = wrongLetter[i];
        rows[n].children[content].classList.add('wrong');
    }
}

getWrongLetters = () => {
    console.log(`THE FUCKING WORD ARRAY IS: ${word}`);
    for (i = 0; i < 5; i++){
        if (answerArr.indexOf(word[i]) === -1){
            console.log(`mali akong letter sabi ni mama: ${word[i]}`);
            wrongLetter.push(i);
        }
    }
}





  
