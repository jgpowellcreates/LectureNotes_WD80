/*
A promise object represents the eventual completion or failure of an asynchronous operation.
It's code that's on it's way after it finishes running somewhere else

ex.  You know that if you're good, Santa will bring you presents on Xmas
    You won't know until the 25th what you'll get.
    you can do other things until Christmas, but you know you'll have a package on the 25th
    That package might be a gift, might be coal

Promises have 3 states:
    1. Pending - waiting to find out
    2. Resolved - operation completed successfully
    3. Rejected - operation failed
*/

//Booleamn declaration
var amIGood = true;

/*promise - here we create a new promise
The "executor function", iCanHasGift here, takes two callbacks: resolve & reject
Resolve() and reject() take one argument each
*/
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {          //automatically asking if boolean is returning "true"
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-man action figure'
            };
            resolve(gift); //fulfilled
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); //rejected
        }
    }
);

//promise syntax
//new Promise(/* executor */ function (resolve, reject) {...});

//Promise Call - or "consuming the promise"
/* var checkTwice = function() {
    iCanHasGift
        .then(function (fulfilled) {
            //nice list = gift
            console.log(fulfilled); //output: brand/item
        })
        .catch(function (error) {
            //naughty list = coal
            console.log(error);
        })
}; 

checkTwice();
*/


//Promises are asynchronous - each starts when the previous succeeds and uses its result
//Code runs without blocking or waiting for a resuly
//Anything that needs to wait for a promise to proceed is put in ".then"

//2nd Promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = `What up, kid! Saw you got some dope toys. Do you like my ${gift.brand} ${gift.item}?`;
            resolve(message);
        }
    );
};

//Promise call
var checkTwice = function () {
    console.log('before Christmas');
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled)
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts');
}

checkTwice ();

// when you see ".then" think promise!
//promises are for when we want to react to actions that will take an unknown amount of time