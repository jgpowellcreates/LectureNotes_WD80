//console.log('spacex');

/*
    What is an API?
     - "Application Programming Interface"
     - APIs allow applications to communicate with each other
     - It is an access point to the server
                            //endpoint
     - ex. https://localhost/signin
                > you change the endpoint to handle specific sets of data
                > endpoints navigate us to specific information

ASYNCHRONOUS PROGRAMMING
        - Generally, code is read and implemented line by line - this is known as synchronous programming
            - in the case of fetching data from an outside source like we do with an API, if JavaScript did not have the ability to run code asynchronously, it would have to run each line of code > wait for the response from the API > and then finish running the rest of our code.
            - in basic terms, asynchronous programming allows a program to do more than one thing at a time
        - Asynchronous programming allows our code to continue to run while we're waiting on a response from an API. Once the fetch has finished retrieving the data, it then presents us with that data, without having to wait on any other processes
        - the fetch() method is an asynchronous method, and is part of the browser window, not JavaScript
        - the fetch() method starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the response is available.
            - a promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection (error)
                - a promise is always one of these states:
                    - pending: initial state, neither fulfilled or rejected
                    - fulfilled: meaning the operation completed successfully
                    - rejected: meaning the operation failed
            - in the case of a fetch request, a promise will resolve into a Response object that represents the response of the request made.
*/


/* Parts of a fetch()
     (1)            (2)
    fetch('https://localhost/dogs')

Callback Functions
          (3)               (4)
    .then( (result) => result.json())      //.json() method returns JS object as a promise
                                     we need to chain another .then to handle the promise
          (5)               (6)
    .then( (json)   => console.log(json) )       // always have a catch w/ a fetch
          (7)               (8)
    .catch( (error) => console.log(error) )     //catch is an error-handling method


    1. fetch() method, which will return a promise
    2. the url that we will fetch from, including a specific endpoint
    3. the first callback function, that will capture the promise returned from our fetch
    4. we are JSON-ifying the result, the .json() method will return another promise
    5. the second callback function will capture the promise returned from the .json()
    6. the callback will console.log or pass on our JSON-ified results
    7. the third callback function, our error handling function
    8. Console.logging the error if one is found
*/

const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("ul");
const spaceCost = document.querySelector("table");

searchForm.addEventListener("submit", e => fetchSpace(e));

function fetchSpace(e) {
    //console.log(e);
    e.preventDefault();
    fetch(baseURL)
    .then((results) => results.json())
    .then((json) => displayRockets(json))
    .catch((error) => console.log(error));
}

//THESE NOTES ARE FOR POPULATING THE UNORDERED LIST

/* function displayRockets(rockets) {      //try to use common naming conventions in code
    console.log("Results:",rockets);    // and name variables/placeholders according to what they're receiving
    let spaceCars = rockets.forEach(rocket => {
        //console.log(rocket);
        let rocketHolder = document.createElement("li");
        rocketHolder.innerText = rocket.name;
        spaceShips.appendChild(rocketHolder);
    })
    return spaceCars;
} */

//THESE NOTES ARE FOR POPULATING THE TABLE

function displayRockets(rockets) {
    console.log("Results:",rockets)

    let spaceCars = rockets.forEach(r => {
        let rocket = document.createElement("tr");
        let rocketName = document.createElement("td");
        let rocketCost = document.createElement("td");

        rocketName.innerHTML = r.name;  //we use "r" as the name for our items in the
        rocketCost.innerText = r.cost_per_launch;  //list created by forEach in line 83

        spaceCost.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
        spaceCost.style.border = "1px solid black";
    })
    return spaceCars;
}