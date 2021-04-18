/*
FIZZBUZZ CHALLENGE (pair coding)
**************
        - create a variable named FB that gets initialized with a number
        - write a conditional that:
            - prints out "Fizz" if the number is divisible by 3
            - prints out "Buzz" if the number is divisible by 5
            - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let FB = 16;

if (FB % 3 == 0 && FB % 5 != 0) {
    console.log("Fizz");
} else if (FB % 3 != 0 && FB % 5 == 0) {
    console.log("Buzz");
} else if (FB % 3 == 0 && FB % 5 == 0) {
    console.log("Fizz Buzz");
} else {
    console.log("Now THAT's some fizzy bizness.")
}

// SHORTER VERSION

if (FB % 3 == 0 && FB % 5 == 0) {
    console.log("Fizz Buzz");
} else if (FB % 5 == 0) {
    console.log("Buzz");
} else if (FB % 3 == 0) {
    console.log("Fizz");
} else {
    console.log("Non-Fizz");
}



// SWITCH STYLE

switch (true) {
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log("Fizz Buzz");
        break;
    case (FB % 5 == 0):
        console.log("Buzz");
        break;
    case (FB % 3 == 0):
        console.log("Fizz");
        break;
    default:
        console.log(FB);
}


// TERNARY

(FB % 5 == 0 && FB % 3 == 0) ? console.log("Fizz Buzz") :
(FB % 5 == 0) ? console.log("Buzz") :
(FB % 3 == 0) ? console.log("Fizz") :
console.log("uuuuuuuuuuuuuugh")