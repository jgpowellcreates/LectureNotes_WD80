let weather = 55;

if (weather < 70) {
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary!");
}


//CHALLENGE 1
let myName = "stevie";

if (myName == "Jacob") {
    console.log(`Hello, my name is ${myName}`);
} else {
    console.log(`Hello, is your name ${myName}?`);
}

//CHALLENGE 2
/*
Use this string: let name = 'zAchARy';
​
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that  first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/


/* //SILVER
let Name = "zAchARy";
let firstLetter = Name.charAt(0);
//  console.log(firstLetter);         I was checking if this was a 0 index
let restOfName = Name.toLowerCase();

if (Name.charAt(0) == firstLetter.toUpperCase()) {
    console.log(Name.charAt(0) + restOfName.substring(1));
} else {
    console.log(restOfName.substring(1));
} */

//GOLD
let friendName = "zAchARy";
let firstLetter = friendName.charAt(0);
//  console.log(firstLetter);   I was checking if this was a 0 index
let restOfName = friendName.substring(1);

if (friendName.charAt(0) == firstLetter.toUpperCase()) {
    console.log(firstLetter.toUpperCase() + restOfName.toLowerCase());
} else {
    console.log(firstLetter.toUpperCase() + restOfName.toLowerCase());
}
// In this example, I collected the first letter and the remaining letters as separate variables
// Here's a simpler way:

if (friendName[0] === friendName[0].toUpperCase) {      
    console.log(friendName[0].toUpperCase() + friendName.substr(1).toLowerCase());
} else {
    console.log(friendName[0].toUpperCase() + friendName.substr(1).toLowerCase());
}   // var.charAt(0) is the same as var[0]



//******Else If Statement ******//

//CHALLENGE
let age = 16;

if (age >= 25) {                        //These statements become MORE INCLUSIVE as you go down the list.
    console.log("You can rent a car!"); //As soon as the var meets the else/if requirements, it will stop looking
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you're too young to do anything.")
}

// Going the opposite direction - from youngest to oldest - still becoming more inclusive as you go
if (age <= 17) {
    console.log("You're too young");
} else if (age <=20) {
    console.log("vote that vote");
} else if (age <=24) {
    console.log("drink that drink");
} else {
    console.log("rent that car");
}

//Could also make conditionals live w/in certain ranges:
// else if (age < 21 && age >= 18)