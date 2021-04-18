/*
- Array destrutcuring allows you to unpack values from arrays, or even properties from objects, into distinct variables
- Destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the sources variable
- Great for pulling information out of an array/object and assigning that data to its own variable
*/

const fullName = ["Jacob","Powell", "Mr", {month: 12, date: 18, year: 1992}];
// const firstName = fullName[0];
// const lastName = fullName[1];
//these two lines can also be written as seen below:
const [firstName, lastName, ...otherInfo] = fullName;
                            //this example of "spread" or "Rest"

console.log("First:", firstName);
console.log("Last Name:",lastName);
console.log(otherInfo);