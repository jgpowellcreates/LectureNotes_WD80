/*
 - A falsy value is a value that is considered false when encountered in a boolean context
    > false
    > 0
    > "", '', ``  (empty strings without spaces)
    > null
    > undefined
    > NaN (not a number)

 - When JavaScript is executing a boolean and it is given one of the values above, it will always evaluate to "falsy"
*/

let isOn = true;

if  (isOn == true) {   // if is our keyword, the parenthesis hold the conditions, curly boys hold the executable action
    console.log("The light is on");
}

isOn = false;

if (isOn) {            // if (isOn)   is shorthand for 'if (isOn == true)
    console.log("The light is on");
}

// if (isOn == false);  can be written with shorthand  if (!isOn)    the bang (!) denotes the opposite value

let weather = 55;

if (weather < 70) {
    console.log("Wear a jacket!");
}