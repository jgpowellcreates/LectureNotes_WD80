/*
JS is interpreted line-by-line, top to bottom
Before executing, it takes a first pass: stores our variable/functoion declarations, but does not assign values.
    Anything that needs hoisted is hoisted here.
Second pass assigns/initializes values to our variables and executes any hoisted source code.
*/

//example where variables cannot be hoisted
//console.log(myName);
//let myName = "Jacob";  //let cannot be hoisted! var can, but it will be undefined because it's not initialized


//functions can be hoisted! Developers often leave them all the top or bottom of their doc
b();

function b() {
    console.log("I have been hoisted!");
}

