/*

    let hi = () => {
          (1)
        return "Hi"
    }
           (2)    (3)
    let newName = hi();

    console.log(newName);

    1- The keyword that brings our data out of our function
    2- We need a new variable to hold the value of the return
    3- When called, the function becomes the value of the return
*/

let myName = fName => {
  return fName;
}

let newName = myName("Jacob");

//console.log(newName);


function capitalizeName(name) {
    let capName = "";
    for (let l in name){
        if(l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    ////console.log(capName);
    return capName;
}

let finishedName = capitalizeName("jacOB");
console.log(finishedName);


/*CHALLENGE
    Make a tip calculator using a block body fat arrow calculation
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

let check = 28;

let tipAmt = (priceBeforeTip) => {
    let tip = priceBeforeTip * .15;
    return tip;
}

let tip = tipAmt(check); //tip is a variable, tipAmt is the calculator
console.log(`Your meal cost $${check}. You should tip $${tip}.`);