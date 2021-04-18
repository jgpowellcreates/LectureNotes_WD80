const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "A8Cl06sW0uRJQe4yMt69qpsIZ31GUrM3";                           
let url;             


//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

//RESULTS SECTION
const section = document.querySelector("section");

nav.style.display = "none";  //turns off nav buttons until a search is executed

let pageNumber = 0;
let displayNav = false;
     
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);  
previousBtn.addEventListener("click", previousPage);

/* SETTING UP OUR FETCH FUNCTION
********************************
function fetchResults(e) {
    e.preventDefault();
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
    console.log(url);

    //1
    fetch(url)
    .then(function(result) {  //.then is a promise returning a response object "result"
    console.log(result)
    return result.json(); //2       -object converted into usable json format
    })
    .then(function(json) {      //created 2nd promise w/ function that takes in json object
    console.log(json);    //3
    });
}

//1. fetch is a reserved word for requesting info, 'url' is the parameter
//2. returns a promise (async operations) which may take a while to resolve
//      converts the response into a json object w/ the result.json() function
//3. json object is used in another promise (set off by 2nd .then) to send info to another function (for now, just logging to see data)

*******************************/

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
    
    if(startDate.value !== '') {  //conditionals, rudimental form validation
        console.log(startDate.value)
        url += "&begin_date=" + startDate.value;
    };

    if(endDate.value !== '') {
        console.log(endDate.value);
        url += "$end_date=" + endDate.value;
    };

    fetch(url)
    .then(function(result) {
    return result.json();
    })
    .then(function(json) { //Now, when the Promise returns the json, we fire this new function that will work to manage that data
    displayResults(json); //changed from a console.log
    });
}

/*FETCH FUNCTION TO DRILL DOWN INTO JSON & POPULATE OUR PAGE
************************************************************
function displayResults(json) {       //by adding .response.docs, we're digging into the json data
    //console.log("DisplayResults", json.response.docs);
    let articles = json.response.docs;

    if(articles.length === 0) {
        console.log("No results");
    } else {
        //Display the data
        for(let i = 0; i<articles.length; i++) {
            //console.log(i);       //iterating the array "articles". We're simply printing a number for each item in the index
            //we console.logged to make sure we got the results. Now we turn to DOM manipulation!
            let article = document.createElement("article"); //1
            let heading = document.createElement("h2");      //2

            article.appendChild(heading);   //3
            section.appendChild(article);   //4
        }
    }
};

// 1. created 'article' variable that creates a node (HTML element) in DOM
// 2. also create a heading variables creating a node of h2
// 3. calling appendChild() on article element creates a child node on the element
//      we pass in "heading" - there will be an h2 element inside each 'article' element
//4. we use the appendChild() method to pass 'article' into our HTML div "section"

*********************************************************/

function displayResults(json) {
    let articles = json.response.docs;

    if(articles.length === 0) {
        console.log("no results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement("article");
            let heading = document.createElement("h2");
            let link = document.createElement("a"); //1

            let current = articles[i];          //2
            console.log("Current:",current);    //3

            link.href = current.web_url;        //4
            link.textContent = current.headline.main; //5

            article.appendChild(heading);
            heading.appendChild(link);          //6
            section.appendChild(article);
        }
    }
};

/*
    1. we create a 'link' var using the "a"nchor element. Allows us to create an href link
    2. we create a 'current' var that hol;ds the data of the current article as we iterate
    3. we log "current" so we can see it in the console
    4. need to attach a "href" property to our "a".
        current.web_url grabs the hyperlink for our current article out of the json in each iteration
    5. we pull the article name by drilling into the NYT API json w/  current.headline.main
    6. we use appendChild() again to add a child...
        - link inside of header,  header inside of article,  article inside of section
*/

function nextPage(){
    console.log("Next button clicked");
}

function previousPage(){
    console.log("Next button clicked");
}