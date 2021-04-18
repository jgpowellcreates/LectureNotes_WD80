//Arrow Functions
//***************

//Syntax

//declaration   //name      //parameters & fat arrow section     //fat arrow
  let         phatArrow  =  (/*parameter1, parameter2, etc*/)       =>     console.log('fat arrow')

  phatArrow();

/*
Concise Body Arrow Fucntions...
 - return by default
 - run when they are called upon  phatArrow()
 - may onle be one line long
*/

//fish()  does not work here! They will not be hoisted. They are function expressions
//let fish = () => console.log('Bobby and Jalen had fish for lunch today!');

//fish();

//Block Body Arrow Functions
// - Do NOT return by default, you must include a return statement
// - run when they are called upon
// - may consist of more than one line, given they are wrapped in { curly bois }

let myName = (firstName, lastName) => {
  return `My name is ${firstName} ${lastName}`;
}
                  // we could console.log right into 29, but here we're seeing the function return an explicit value
                  // If we don't return a value, the default value is 'undefined'
console.log(myName("Jacob", "Powell"));


/* Concise VS Block Body Functions
Concise =>
 - returns an explicit value (no return statement or {} needed)
 - must be contained into one line
 */

let apples = x => console.log(`There are ${x} apples`);
apples(100);

/*
Block Body => {
  - allows you to add more lines of code to process data and get a specific return
  - requires {} and the use of the return statement
}
*/

let apples1 = x => {
  console.log(`There are ${x} apples`)
}
apples1(29);

// Note: More than one parameter will require parenthesis