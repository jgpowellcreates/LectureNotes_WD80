let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);  //length is a property applied to the array prototype object
                           //it does not need to be invoked!
let colors = ["blue","green","red","yellow", "orange"];
console.log(colors.length);
console.log(colors.toString().length);
console.log(typeof colors);

/* CHALLENGE
    - First check if you are working with an array
    - Using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1,);
    - Using a method, print the values of the newly arranged array
*/
 console.log(Array.isArray(colors));

 [colors[0], colors[4]] = [colors[4],colors[0]]; //this works BUT we were meant to reverse the order
 [colors[1], colors[3]] = [colors[3], colors[1]]; // see reverse below! This is still good for understanding "Swaps "
 colors.forEach(color => console.log(color));


 //EFA solution
 let arr = [1,2,3,4,5];

 console.log(arr instanceof Array);   // 'Array' an example of a constructor function

 // instanceof will return a boolean
 if (arr instanceof Array === true) {
    let revArr = arr.reverse();       // create a var that is an INSTANCE of the array in reverse
    revArr.forEach(num => console.log(num));
 } else {
    console.log("Not an array");
 }

 var myNoun = "dog";
 var myAdjective = "big";
 var myVerb = "ran";
 var myAdverb = "quickly";

 var wordBlanks = "My " + myNoun + " is quite " + myAdjective + " and all the children he tried to eat " + myVerb + " away as " + myAdverb + " as they could!";