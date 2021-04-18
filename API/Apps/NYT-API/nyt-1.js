const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1
const key = "A8Cl06sW0uRJQe4yMt69qpsIZ31GUrM3";                             //2
let url;                //3

/*
1. declare baseURL of the API - required API point for NYT data
2. using a key variable lets NYT know exactly what user is using their API
3. let url variable will be used later to make a dynamic search url
*/

//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//RESULTS NAVIGATION
const nextBtn = document.querySelector(".prev");
const previousBtn = document.querySelector(".next");
const nav = document.querySelector("nav");

//RESULTS SECTION
const section = document.querySelector("section");

nav.style.display = "none";  //turns off nav buttons until a search is executed

let pageNumber = 0;
let displayNav = false;

        //1                     //2          
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);        //3
previousBtn.addEventListener("click", previousPage);//3

// 1. searchForm var targets the form element
// 2. the even we're looking for is the "submit" event (an HTML form event)
//    with this event, we'll fire off the function "fetchResults"
// 3. the other two items are called by "click" events

/*                     //1
function fetchResults(e) {
    console.log(e); //2
    //Assemble the full URL
    url =baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value; //3
    console.log(url); //4
} */

function fetchResults(e) {
    e.preventDefault(); //6
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
    console.log(url);
}

/*
    1. (e) is part of an "event handling function". Every EHN receives an event object that holds properties (variables) and methods (function). The handle, 'e', is similar to a variable that allows you to interact with the object
    2. We are logging the event object for learning purposes
    3. Creating a versatile query string - url variable is loaded w/ other variables & url requirements. Consider the terms "?", "&", "&q="
    4. We log the string to see it and see how it changes
    5 (below). add in functions to define next/previousPage and log them (w/o, we'll get an error)

    6. adding preventDefault method makes sure that a request isn't actually sent - we're not submitting data anywhere. Instead we want to get data, so we are using this form to construct our GET request

    - When fetching from an API, we're requesting data from a specific point - the endpoint.
    - Endpoints come in the form of a URL - the URL is the gateway to the server and performs the logic of looking for the poper data in the database

 ---TERMS TABLE---
baseURL - actual web address for the API
apiKey - key allowing you access into the API
page - curent page of results being accessed
q - search term or query
begin_date
end_date
*/

//5
function nextPage(){
    console.log("Next button clicked");
}

function previousPage(){
    console.log("Next button clicked");
}