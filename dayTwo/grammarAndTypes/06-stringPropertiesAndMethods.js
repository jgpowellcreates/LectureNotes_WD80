/*
 - Properties are qualities associated with a data type
 - Strings only have one singular property for us to access: length
*/

let firstName = "Jacob";  // will return "5"
let lastName = "Powell";
let myName = `${firstName} ${lastName}`;  //with strings (simple or interpolated), 'length' will count spaces

console.log(firstName.length, lastName.length, myName.length);

/*
Methods are tools that can help us manipulate data
 - .property vs .method()
 - Properties are qualities of a data type (ie. a string's length)
 - Methods are functions associated with data types.
*/

let myNameIs = "Jacob";
console.log(myNameIs.toUpperCase);
console.log(myNameIs.toUpperCase()); //if we don't have the (), we have not INVOKED the method

let home = "My home is Whitestown";
console.log(home.includes("Whitestown")); // returns 'True' if the subString exists in the searched string
                   // .includes() method is case-sensitive


// CHALLENGE: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));