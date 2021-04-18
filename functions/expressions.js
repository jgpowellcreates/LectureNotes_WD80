//Functions expressions are functions stored within variables
//Function expressions DO NOT get hoisted

/*
       (1)
    let hey = function (hi) {          (leaving a function unnamed makes it an "anonymous function")
        console.log("HI");
    }

    1 - The variable hey is now representative of the function hi()
    */

//hey();  <-- can't reference this function because it is part of a variable which will not be initialized

let hey = function hi() {
    console.log("HI");
}

hey();