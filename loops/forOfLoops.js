/*
 - For of loops and for in loops both do the same thing which is loop over data structures.
   There is on key difference: what they iterate over.
        > for in loops iterate over the enumerable properties in an object
        > for of loops iterate over the values of an iterable object  (so they work well with arrays)
*/

let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"];

for (let cat of catArray) {
    console.log(cat);
}


/* let student = {             // Cannot use for of loops on objects. They are not iterable - they have keys instead of indeces
    name:           "Peter",
    awesome:        true,
    degree:         "JavaScript",
    week:           1
}

for (let stud of student) {
    console.log(stud);
} */

//for of loops are best used on arrays        (cannot use on objects - their keys are not iterable)
//for in loops are best used on objects       (can count arrays. counts indeces as keys)



//enumerable - objects have properties we can count (specific number of items)
//iterable - it has an actual index. There is ALREADY a number attached to each property