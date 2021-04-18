// 1. Test
let x = 10;
console.log(x);


// 2. Get Element By ID
//document.getElementById("testParagraph").style.color = "blue";
let testParagraph = document.getElementById("testParagraph")
testParagraph.style.color = "red";

console.log(testParagraph);  //this is actually storing a p tag

// 3. Query Selector All & innerText/innerHTML
let sampleClasses = document.querySelectorAll("p.sampleClass");  //creates an array of those p tags
sampleClasses[0].innerText = "My text has changed!"

sampleClasses.forEach(pTag => {
    pTag.innerHTML = "<i>My text has changed using a forEach method</i>"; // .innerText works same as .textContent
  //pTag.innerText = "<i>Tags won't work because this is read as text!</i>"  
})

/*
 - innerText - simply references or allows us to change the text of a specified element. Will return only visible text in a "node"
 - textContent - does the same thing that innerText does, but will return the FULL text of a "node"
 - innerHTML - allows us to set text as well as HTML elements, which will be nested inside of the current HTML elemet we are referencing
*/

// 3.5. textContent vs innerText Example (using Spans)
console.log(document.getElementById("spanTest").innerText);   //shows "Hello"
console.log(document.getElementById("spanTest").textContent); //shows "HelloWorld"

// 4. addEventListener - click
document.getElementById("clickThisButton").addEventListener("click", event => {   //event is placeholder
    if (event.target.style.backgroundColor == "red") {
        event.target.style.backgroundColor = "blue";             // the 'target' of our event is a button
    } else {
        event.target.style.backgroundColor = "red";
    }     
})

// 5. addEventListener - Keyup / getElementsByTagName
document.getElementById("nameInput").addEventListener("keyup", event => {
    console.log(event.target.value);
    let allPTags = document.getElementsByTagName("p");
    allPTags[0].innerText = "Nothing has been typed.";

    if(event.target.value == "") {
        allPTags[1].innerText = "Nothing has been typed.";
    } else {
        allPTags[1].innerText = `Everyone, please say hello to ${event.target.value}`;
    }
})