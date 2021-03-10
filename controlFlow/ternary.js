// A ternary basically acts as a shortcut to writing if, if/else, and else/if statements

let num = 6;

//ternary
 // 1     2                    3
(num > 0) ? console.log("yes") : console.log("no")
//1 - our condition. Does not have to be in parentheses
//2 - question mark acts as "if" side
//3 - colon acts as "else" side

//instead of
if (num > 0) { 
    console.log("yes");
} else {
    console.log("no");
}

                                  // This is where things change. First statement's "else" contains another if/else
(num == 0) ? console.log("Hello") :
(num < 0) ? console.log("hi") : console.log("goodbye");


//CHALLENGE
let age = 19;

(age >= 25) ? console.log("You can rent a car!") :
(age >= 21) ? console.log ("You can drink!") :
(age >= 18) ? console.log ("You can vote!") :
console.log("Sorry, you're too young to do anything fun");