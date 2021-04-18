/*
- The spread operator essentially pulls out all elements of an array and gives them to you as a standalone list of elements
- denoted by ...    <- that's actuall the syntax! ...
*/

const fullName = ["Jacob", "Powell"];
// ...fullName
//const elemets = ...fullName;
//const elements = "Jacob", "Powell"       these elements no longer in an array

const copiedFullName = [...fullName];
console.log(copiedFullName);

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));   //this is evaluating each element in the array
console.log(Math.min(prices));  //whereas this can only consider the array as a whole

// const persons = [{name: "Donovan", age: 25}, {name: "Zach", age: 27}];
// const copiedPersons = [...persons];
// persons.push({name: "Anna", age:29});
// console.log(persons,copiedPersons);



//VARIABLES GET PASSED BY VALUE
let x = 10;
let y = "abc";

let a = x;  //here, we passed on the value of X. We did not reference x - but its' value
let b = y;  //just taking on value - they're not related as variables

console.log(x,y,a,b);
x = 15;
console.log(x,y,a,b);


//ARRAYS, OBJECTS & FUNCTIONS GET PASSED BY REFERENCE
let arr = [];  //when javascript looks for these, it gives them an "address" so it can find the object later when it is referenced
//making changes to an array will make changes to anything referencing it
arr.push(1);

let reference = [1];
let refCopy = reference;

reference.push(2);
console.log(reference, refCopy);  //we didn't update refCopy manually, but it updates w/ the reference variable


const persons = [{name: "Donovan", age: 25}, {name: "Zach", age: 27}];
const copiedPersons = [...persons];
//the line above won't reference "persons" but will pass values because of the spread operator

persons.push({name: "Anna", age:29});
console.log(persons,copiedPersons); //

copiedPersons[0].name = "Don";
persons[0].name = "Michael";  //changing the info in the objects INSIDE the array will pass a refernce
console.log(persons,copiedPersons); //spread operator only passes values, but in this instance our values are OBJECTS - refernce-able