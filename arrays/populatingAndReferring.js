/*
 - Arrays are containers that hold lists of items
 - denoted by []

      (1)  (2)   (3)
 let list = [ "item1", "item2", "item3"];

    1. name of the array, or list
    2. the array is within square brackets
    3. each item, regardless of datatype, is separated by a comma
 */

let list = ["orange", "banana", "apple"];

console.log(list[1]);

let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Iesha", "Amira"]];
//variables can go into an array, but it will serve no point - only the datatype is returned

//CHALLENGE: Pull and print the value "Amira" from the students array
console.log(students[6][2]);