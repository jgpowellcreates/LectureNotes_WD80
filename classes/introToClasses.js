/*
- JavaScript classes were introduced in ES5 as a new way to write JS's previous prototype-based
inheritance, which is a way of creating an object that acts as a blueprint.

- Classes act as a blueprint for creating objects that share methods and properties.
- Classes const of the class name, curly braces, and any properties or methods we include (in the braces)

- Classes can be written as class expressions or class declarations

class Automobile {
    //methods and properties go here
}

let vehicle = class {
    //methods and properties go here
}

- The constructor method is a special method that helps create and initialize an object
created from a class. It works in tandem with the new keyword.

- The constructor needs to be included for us to create new objects or instances of our class.
This allows us to set up properties as well as pass in values for those properties when creating the new instance.

- Each class can only have ONE constructor.

        (1)
class Cookie {
                        (2)
    constructor(type, icing, shpae) {
          (3)     (4)
        this.t = type;
        this.i = icing;
        this.s = shape
    }
}

1- We have a class named Cookie
2 -The constructor method takes in three parameters of type, icing, and shape.
Since the constructor method is invoked when we call upon the class, we need to supply the arguments.
3-We are assigning keys/properties for each new instance of our Cookie class
4-We are assigning those keys/properties the values that we pass in as arguments
*/

class Cookie {
    constructor(type, icing, shape) {
        this.t = type;
        this.i = icing;
        this.s = shape;
    }
}

let chocolateChip = new Cookie("chocolate chip", false, "circle");
console.log(chocolateChip);
console.log(chocolateChip.t, chocolateChip.s);


/* class Automobile {
    start() {           //named our method, gave parentheses. Will use lines below for process
        console.log("Hello");
    }

    stop() {
        console.log("Bye");
    }
}

let newCar = new Automobile();
console.log(newCar);
newCar.stop(); */


//CHALLENGE

class Automobile {
    constructor(make,model) {
        this.mk = make;
        this.md = model;
    }
    start() {
        console.log(`The engine of your ${this.mk} ${this.md} has started.`);
    }
    stop() {
        console.log(`The engine of your ${this.mk} ${this.md} has stopped.`);
    }
}

let myCar = new Automobile("Kia","Soul");
myCar.start();
myCar.stop();
//console.log(myCar.mk);


/*
PARENT-CHILD RELATIONSHIP IN CLASSES

 - The extends keyword is used in class declarations/expressions to create a new class as a child of another class

 - Each new class we create that extends from the parent class not only inherits the properties and methods
 from the parent class, but it also can have it's own methods and properties
*/

//Parent
class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats their food`);
    }
}

//Subclass
//The super methods gives us access to the parent classes properties and methods
class Dog extends Animal {
    constructor(name,breed) {
        super(name);        //goes into our parent class and grabs the property
        this.breed = breed;
    }

    play() {
        console.log(`${this.name} fetches the ball`);
    }
} //inherited everything from the Animal class and "extended" its own info

let Georgie = new Dog("Georgie","Bearded Collie");
Georgie.eat();
Georgie.play();