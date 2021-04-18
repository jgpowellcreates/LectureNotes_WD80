/*
 - Scop is how a computer keeps track of all the variables in a program
 - Scopes can also be nested, where there is an outer scope (think global scope)
                                that encloses an inner scope (think local scope)
        > Think about global scope as Planet Earth. Everything belongs to or is on Earth itself.
          A city would be considered a local scope.  {curly boys} are the 'state borders'
*/

let r = 12;

function scope() {
    let r = 33;          //if we did not restate and reinitialize the var "r" here, it would have impacted the global scope
    //console.log("local:",r);   //because we restate it inside the function {} , the information stays inside the brackets
}

scope();
//console.log("global:",r);

// AND ALSO, you could just declare a new variable. This is just a demonstration of how scope affects your JavaScript

let y = "World";

function scopeExTwo() {
    let y = "Hello";
    //console.log("local:",y);
}

scopeExTwo();
//console.log("global:",y);

/*
 - With the introduction of ES6 came two more keywords to declare variables:
        > const and let
        > const is constant that cannot be changed
        > var and let seem to operate the same. Despite similar functionality, they behave differently.
            - let is scoped to the nearest ENCLOSING block, where var is scoped to the nearest FUNCTION block
*/

var x = 12;

function varTest() {
    var x = 33;
    if (true) {
        var x = 45;     // this will override the var x initialized in line 42. Var leaked to the nearest function block
        console.log("If Block:",x);     //changing 'var' to 'let' in line 44 will print all x values
    }     //enclosing blocks close let scope. ONLY FUNCTION
    console.log("Function Block:", x);
}

varTest();
console.log("Global",x);