const letters = document.querySelectorAll('button');
let word = [];

letters.forEach(function(letter){
    letter.addEventListener("click", (e) => {
        // console.log(letter.textContent);        
        word.push(letter.textContent);
        processedWord = word.join("");
        console.group(processedWord);
    });
});