const letters = document.querySelectorAll('.letter');
word = [];
let answer = "hello";
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
        for (let i = 0; i < 5; i++){
            firstRowArray[i].textContent = word[i];
        } 
        

        // word definition global scope
        console.log(word);
    });
});


const firstRow = document.querySelector('#first-row');
const firstRowArray = Array.from(firstRow.children);

// const enter = document.querySelector('#enter');
// enter.onclick = () => {
//     console.log(word);
//     if (word.length < 5){
//         alert("Not Enough Letters");
//     } else {
//         checkWord(word);
//         // alert("5 letters hehehe");
//     }
// };

// checkWord = () => {
//     console.log(word);
//     //check if correct
//    processedWord = word.join("");
//     if (processedWord === answer){
//         for (let i = 0; i < 5; i++){
//             firstRowArray[i].classList.add('correct');
//         } 
//     //pop up modal or smth
    
//     }

//     //check if there are correct letters


//     //check if the correct letters are properly positioned





// };

