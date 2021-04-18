//2 ways to write an asynchronous function

async function myFunction() {
    //await
}

const myFunc = async () => {
    //await
}

/*
Two key differences between regular functions and async functions:
    Async Functions
    - unlocks the use of the await keyword
    - always returns a promise
    - when function reads "await", it will finish fetching a promise before moving on
*/

async function fn() {
    //return Promise.reject("Hello");        //Promise constructor function
    throw Error("This is a mistake");
}

fn()
    .then(console.log)  
    .catch(console.log)

//promise returning normal function
function myFn() {
    return Promise.resolve("Hello");
}

myFn().then(console.log);




function firstLockBox() {
    return new Promise(function(resolve,reject) {
        if(true) {
            resolve(12345)
        } else {
            reject(Error("Unexpected Error"))
        }
    })
}

function secondLockBox(key) {
    return new Promise(function(resolve,reject) {
        if(key === 12345) {
            resolve(98765)
        } else {
            reject(Error("Wrong Key!"))
        }
    })
}

function thirdLockBox(key) {
    return new Promise(function(resolve,reject) {
        if(key === 98765) {
            resolve("Treasure!")
        } else {
            reject(Error("Wrong Key!"))
        }
    })
}

async function openBoxes() {
    let firstBox = await firstLockBox();
    let secondBox = await secondLockBox(firstBox);
    let thirdBox = await thirdLockBox(secondBox);
    console.log("first:",firstBox);
    console.log("second:",secondBox);
    console.log("third:",thirdBox);
}

openBoxes();
console.log("Hello World!");  //this comes first in the console because of async



let fetchRickandMorty = async () => {
    let results = await fetch("https://rickandmortyapi.com/api/character/");
    let json = await results.json();
    return json;
}

fetchRickandMorty().then(response => handleResults(response));

function handleResults(results) {
    console.log(results);
}