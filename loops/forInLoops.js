/*
 - For in loops are great for iterating over values in an object.
   Properties in objects are called 'enumerable' - aka countable

 - For In loops iterate over an object's enumerable properties (keys... which have values!)
*/

let student = {
    name:           "Peter",
    awesome:        true,
    degree:         "JavaScript",
    week:           1
}

for (let item in student) {    //the word before "in" is a placeholder. It can be any word, but it will be used to id the object's keys
    console.log(item);
    console.log(student[item]);
}


let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"];

for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

//CHALLENGE: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
//EFA Solution
let myName = "jaCOb";     //you don't have to turn this into an array. A string already has a 0 index
let capName;

for (let i in myName) {
    if (i == 0) {
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase();
    }
}

console.log(capName);