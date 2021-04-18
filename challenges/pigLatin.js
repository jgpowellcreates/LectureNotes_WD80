/* 
- Create a function that takes in strings
- In the function, translate a phrase into pig latin and print it to the console

- If able to do so, return the value into another variable and print that variable
*/

//These top 4 lines are unnecessarily bulky, but they clearly show what we're entering and how it's modified
let sentence = "Pig latin is a silly language";

turnLatin(sentence);
console.log(latinSentence);

function turnLatin(str) {
    let strArr = str.toLowerCase().split(' ');
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0;
    
    let transArr = strArr.map(word => {
        if (vowels.includes(word[0])) {
            return word + "ay"
        } else {
            for (let letters of word){
                if (vowels.includes(letters)) {
                    vowelIndex = word.indexOf(letters);
                    break;
                }

            }
            return latinWord = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
        }
    })
    return latinSentence = transArr.join(' ');
} 