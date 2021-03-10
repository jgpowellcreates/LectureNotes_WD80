/*
 - Switch statements execute a block of code depending on different cases

 The switch statement is often used together with a BREAK or a DEFAULT keyword (or both). They're both optional.
    - the 'break' keyword breaks out of the switch block.
      This stops the execution of more code or case testing inside the block (what's inside the our curly braces)
    - If 'break' is omitted, the next code block in the switch statement is executed.

    - The 'default' keyword specifies some code run if there is no case match. There can only be on default keyword in a switch. 
      Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.
*/

let officeCharacter = "Kevin";

switch (officeCharacter) {
    case "Michael": // case, then a value that could possibly be matched
        console.log("My mind is going a mile a hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Kevin":
        console.log("A mistake plus keleven gets you home by seven");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, do I know you?`);
}


//CHALLENGE: Dessert Menu

let dessert = "cheese whiz";

switch (dessert) {
    case "pie":                 //CASES consider STRICT EQUALS
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log(` I don't think ${dessert} is on the menu.`);
}