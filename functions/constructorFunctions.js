/*
Constructor Functions
*********************

 - Constructor functions can be thought of as a reusable skeleton object (like a blueprint for an object)
 - We can add to the constructor function the same way we add to objects - dot notation
 - It is good practice to capitalize your constructor functions
*/

//OPTION 1

let artist1 = {
    name: 'Queen',
    albums: 16,
    allMembersAlive: false,
}

let artist2 = {
    name: 'Fleetwood Mac',
    albums: 18,
    allMembersAlive: false,
}

let artist3 = {
    name: 'Steview Wonder',
    albums: 11,
    allMembersAlive: true,
}

//(1)      (2)             (3)                 
function Artist(name, albums, allMembersAlive) {    //'this' is how we reference the Artist object
    //(4)  (5)    (6)
    this.name = name;
    this.albums = albums;
    this.allMembersAlive = allMembersAlive;
}
            //(7)   (8)
let artist = new Artist('Lizzo',3,true);
let artist4 = new Artist('Miley Cyris',11,true);

console.log(artist, artist4);

function Car(make, model, miles, hasBeenCrashed) {
    this.make = make;
    this.model = model;
    this.miles = miles;
    this.hasBeenCrashed = hasBeenCrashed;
}

let car1 = new Car("Kia","Soul", 73000,true);
console.log(car1);


/*
1 - the function keyword
2 - CAPITALIZED function name
3 - The parameters: These will be the values of the object once this function is in use.
4 - The 'this' keyword - gives us the ability to refer back to whatever called, or whatever actives it.
    In this case, 'this' will refer to our Artist being created.
5 - The key of our new object that is being created
6 - IS referring back to the parameter that is being passed to the function
7 & 8 - The new keyword calling our Artist function, creating a new "Artist" with values passed in as parameters.


NOTE: Anytime we see a class in JavaScript, it is essentially a Constructor Function
*/