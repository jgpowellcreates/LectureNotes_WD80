/*******
TYPES
*******/

/* 
BOOLEANS

 - Are ONLY True or False values
 - Booleans are like light switches

 */

 let on = true;
 console.log(on);

 let off = false;
 console.log(off);

 /*
 NULL
 - Null is like an empty bucket, it has the capacity to be filled, but it currently is not.
 - It is a value that we are intentionally leaving empty
 */

 let emptyBucket = null;
 emptyBucket = 'water';
 console.log(emptyBucket);

 /*
 UNDEFINED
  - Currently has no value assigned
  - Acts as the means (plastic/metal) to create the bucket
  */

let metal; // correct way to assign undefined (no need to initialize a value that it not defined)
//variable
//let metal = undefined; //wrong way, it is redundany!

console.log(metal);


// NULL vs. UNDEFINED
//*******************
// - Null is like an empty bucket. The bucket is there but there's nothing in it.
// - Undefined is like the materials we will use to create the bucket

// We can also think of these two variables as piza boxes
// - Null is like the empty pizza box, just waiting for a pizza
// - Undefined is like the unassembled box. (It's waiting to be assigned a variable)

let emptyBox = null;
let unassembledBox;


/*
NUMBERS
 - In JavaScript, numbers are literally just numbers
 - You can add, subtract, multiply, and divide
 - You can use decimals
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;  //JavaScript numbers can only hold up to 15 digits in it's memory
console.log(precise);
let rounded = 9999999999999999; //will console.log() as 10000000000000000
console.log(rounded);

// will console.log() as 0.30000000000000004
let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = Number('123'); //Number function converts a string to numbers IF that string is a number
console.log(a);



/*
STRINGS
 - A string is any value between a set of quotation marks or back ticks
 - A string can be denoted by '', "", ``
 - 'string' === "string" === `string`
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne,stringTwo);

//Numbers vs Strings
let addition = 1050 + 100;
console.log(addition);
let concatenation = '1050' + '100';
console.log(concatenation);

console.log(typeof addition);       //the "typeof" operator will return what data type you're receiving
console.log(typeof concatenation);



/*
OBJECTS
 - Can be denoted by {}
 - Objects store 2 things, a key and a value
 - We can access these values, by digginto the object with dot notation - object.value
*/

// Say we want to create an app like Spotify
// We want to take in an artists name, amount of albums they've produced, and all members still alive?

let artist = {
    //key           //value
    name:           "Queen",
    albums:            15,
    allMembersAlive: false
}

console.log(artist);
console.log(artist.name);
console.log(typeof artist);
console.log(typeof artist.name);

//How to Add Keys to your Object
artist.songName = "I want it all";
console.log(artist.songName);

//How to Change an Object's Value
artist.songName = "Bohemian Rhapsody";
console.log(artist.songName);


/*
ARRAYS

let list = [ 'item1', 'item2', 'item3' ]
              (0)       (1)      (2)      

 - Denote by []
 - You can access a value by digging into the array with array[0]

*/

let burritos = ['large', 4, true];
console.log(typeof burritos); //This returns as an 'object'... why?

//An array is a type of object with special behaviors and abilities
//Each of the values in an array has associated indeces.
//   In this way, key     value   key    value
//                 0   =  large    1  =   4
//ALL things in JS are objects except for these 6: null, undefined, strings, numbers, booleans, and symbols


//ADDITION VS CONCATENATION
// Addition is adding numbers together
// Concatenation is adding strings together

let add = 100 + 100;
console.log(add);

let concat = "Corynne " + "Moody";
console.log(concat);

let stillConcat = "1050" + 100;
console.log(stillConcat);




//****CHALLENGE****/

let firstName = "Jacob";
let lastName = "Powell";
let houseNumber = 2115;
let aptNumber;
let street = "S Ridge Rd";
let city = "Indianapolis";
let state = "IN";
let zipcode = 46226;

console.log(firstName,lastName,houseNumber,aptNumber,street,city,state,zipcode);

// String interpolation requires using back ticks ` ` then marking your variables with ${}
const address = `My name is ${firstName} ${lastName}. I live at ${houseNumber} ${street} in ${city}, ${state} ${zipcode}.`;
console.log(address);