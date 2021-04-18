/*
 - Object bracket notation can also allow us to find a value in an object
 - Using object bracket notation can be handy if we want to store a key in a variable and then use that variable to parse through an object
 - This works because all keys in an object are strings
 */

let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    "my fruit": "grapes",
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

console.log(garden.vegetable);     //with bracket notation, we picked our key by selecting the string
console.log(garden["my fruit"]);   //it's useful when a key is a strong of multiple words   ie. "my fruit"

let baking = {};
baking["zucchini"] = "better make some bread"; //this is the same as writing
baking.banana = "two breads at once, broh!";
console.log(baking);