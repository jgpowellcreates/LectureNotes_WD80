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
    .then(function(json) { 
    displayResults(json); 
    });
}

/*      ADDING NAVIGATION
**********************************
//In this section...
//We styled our nav to be visible if we have more than 10 results
//We used a "while" loop to remove previous results when a new search occurs

function displayResults(json) {
    //Adding code to Remove First Result when 2nd Search Takes Place
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    //the "while" loop will clear out any articles before new results are added
    //does this by checking if section element has any child elements
    //  then it calls removeChild() on the section variable
    let articles = json.response.docs;

    if(articles.length === 0) {
        console.log("no results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement("article");
            let heading = document.createElement("h2");
            let link = document.createElement("a");

            let current = articles[i];
            console.log("Current:",current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            article.appendChild(heading);
            heading.appendChild(link);
            section.appendChild(article);
        }
    }

    if(articles.length === 10) {
        nav.style.display = "block";    //shows the nav display if 10 items are in the array
    } else {
        nav.style.display = "none"; //hides display if less than 10 items return
    }
};
*********************************/

/*  ADDING TO OUR DISPLAY - KEYWORDS
**************************************
//Here we added spans and divs to bring up keywords (span) that are spaced out (div)
//We nested a for loop inside another so we could iterate over the keyword property of the json object
//We assigned the div "clearfix" an attribute of class .clearfix (stylable by our CSS)
//New elements were appended to our article element

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if(articles.length === 0) {
        console.log("no results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement("article");
            let heading = document.createElement("h2");
            let link = document.createElement("a"); 
            let para = document.createElement("p");         //1
            let clearfix = document.createElement("div");   //2

            let current = articles[i];
            console.log("Current:",current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = "Keywords: ";            //3

            //4
            for(let j = 0; j < current.keywords.length; j++) {
                //5
                let span = document.createElement("span");
                //6
                span.textContent += current.keywords[j].value + " ";
                //7
                para.appendChild(span);
            }

            //8
            clearfix.setAttribute("class","clearfix");

            //9
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    };

    
//  1. declared a "p" variable that will append a 'p' tag to the DOM to be used by some json
//  2. declaring a 'clearfix' variable that will later append a div to the DOM
//  3. we add textContent to our 'para' var. Each result will show this at the beginning of the p tag created by 'para'
//  4. a nested 'for' loop! this iterates over the current object ('keyword' property is an array)
//  5. as we iterate, we create a <span> for each keyword.  (a span is an element that ends when the item ends)
//  6. the textContent for each span will be found by iterating through the keywords array inside the json object
//  7. we append each <span> to the para node
//  8. "Remember that we still have an outer loop and printing results. Here we're using
//      the 'setAttribute' method to target our clearfix class. It's a class in the CSS file"
//  9. we add clearfix & para as children of article


    if(articles.length === 10) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
};
************************************/


/* ADDING TO OUR DISPLAY - THUMBNAILS */

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if(articles.length === 0) {
        console.log("no results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement("article");
            let heading = document.createElement("h2");
            let link = document.createElement("a"); 
            let img = document.createElement("img");            //1
            let para = document.createElement("p");
            let clearfix = document.createElement("div");

            let current = articles[i];
            console.log("Current:",current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = "Keywords: ";

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement("span");
                span.textContent += current.keywords[j].value + " ";
                para.appendChild(span);
            }

            //2
            if(current.multimedia.length > 0) {
                //3
                img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
                //4
                img.alt = current.headline.main;
            }

            clearfix.setAttribute("class","clearfix");

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);       //5
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    };

    // 1. We add an img variable that will create an image element
    // 2. use a conditional to check JSON for data. There is a multimedia property in JSON
    // 3. if there is an object, we concatenate a string (url & object data) into a 'src' value
    //      we add the first item in the multimedia array by digging into current.multimedia[0].url
    // 4. we need an "alt" if the image isn't available. We set it to the value of the headline
    // 5. We append the image to the article element for each of our items

    if(articles.length === 10) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
};

function nextPage(){
    console.log("Next button clicked");
}

function previousPage(){
    console.log("Previous button clicked");
}