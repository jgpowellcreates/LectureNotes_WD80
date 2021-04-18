/*

    function hi() {
        console.log("HI");
    }

    (1)
    hi()

    1 - This is where we call, execute or "invoke", our function

    Cris Matson - "Writing the function body is like buying a VHS tape, but you can't watch it unless you play() it"
*/

function hi() {
    console.log("HI");
}

hi();   //this is the correct way to invoke a function!
console.log(hi);
console.log(hi()); // <-- currently we're getting undefined by the function hi is not returning a value



//Create a function that, when invoked, lists out the numbers 1-10

function list(x) {              //you overachiever! we didn't go over parameters yet
    for (i = 1; i <= x; i++) {
        console.log(i);
    }
}

list(10);

//Given the array, create a function that lists out the values individually
let arr = ['This', 'is', 'really', 'cool'];

function sendMessage(x) {
    for (let words of x) {
        console.log(words);
    }
}

sendMessage(arr);