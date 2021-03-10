/*
- Loops offer us a quick and easy way to do something repeatedly, or loop over something.
- There are many kinds of loops, but they all roughly do the same thing.
    - It will repeat until a specified condition evaluates to true
        > for statement
        > do while statement
        > while statement
        > labeled statement
        > break statement
        > for in statement
        > for of statement

Note: there is a danger of infinite loops. There are three main parts to a loop:
    1) initial expression
    2) condition    - loop will continue as long as this condition
    3) increment expression
*/


let i = 7;          // i is a regular variable for an increment value
for (let i = 0; i < 10; i++) {  //when we create an expression starting with 'let', we create a variable inside the loop
    console.log(i);             // if we don't create/initialize a new variable, the loop will impact the global variable
}

console.log("Global i variable:", i);

//CHALLENGE: using a for loop, count to 20 by 2's

for (let p = 0; p < 21; p += 2) {
    console.log(p);
} 

//CHALLENGE: using a for loop, count from 10 to 0, going down by 1

for (let u = 10; u >= 0; u -= 1) {
    console.log(u);
}

//CHALLENGE: using a for loop, count from 0, goiung dow by 2's to -24

for (let c = 0; c > -25; c -= 2) {
    console.log(c);
}

//CHALLENGE: using a for loop, go through a name and display each letter individually

let friendName = "Keith";
let count = friendName.length;
for (let l = 0; l < count; l++) {
    console.log(friendName[l]);
}