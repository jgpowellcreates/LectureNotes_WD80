/*
 - Function parameters are place holders for data that we pass into the function when invoking the function

                 (1)
    function hi(myName) {
        console.log(`Hi $[myName]`);
                            (2)
    }
            (3)
    hi("Donovan")

    1 - The parameter(s) that the function is accepting or holding
    2 - Using string interpolation, we can refer to the parameter given to the function
    3 - This is where we define what the parameter's value will be
*/

function donovan(ticket) {
    console.log(`I exchange my ticket for a ${ticket}`);
}

donovan("pepperoni pizza");

/*CHALLENGE
 - Write a function that takes two parameters:
        > one parameter is for a first name
        > other parameter is last name
        > have them come together in a variable inside the function
        > console.log "Hello, my name is <your name>"
        > invoke your function      
*/

function greet (firstName, lastName) {
    let myName = firstName + " " + lastName;
    console.log(`Hello, my name is ${myName}`);
}

greet("Jacob", "Powell");