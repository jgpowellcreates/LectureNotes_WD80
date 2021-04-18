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

nav.style.display = "none";

let pageNumber = 0;     //THIS VALUE IS IN OUR URL STRING!
console.log("PageNumber:",pageNumber);
let displayNav = false;
     
searchForm.addEventListener("submit", fetchResults, refresh);
nextBtn.addEventListener("click", nextPage);  
previousBtn.addEventListener("click", previousPage);

function refresh() {
    let pageNumber = 0;
}

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
    
    if(startDate.value !== '') {  //conditionals, rudimental form validation
        url += "&begin_date=" + startDate.value;
    };

    if(endDate.value !== '') {
        url += "$end_date=" + endDate.value;
    };
    console.log(url);

    fetch(url)
    .then(function(result) {
    return result.json();
    })
    .then(function(json) { 
    displayResults(json); 
    });
}

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
            let img = document.createElement("img");
            let para = document.createElement("p");
            let clearfix = document.createElement("div");
            let current = articles[i];

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para.textContent = "Keywords: ";

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement("span");
                span.textContent += current.keywords[j].value + " ";
                para.appendChild(span);
            }

            if(current.multimedia.length > 0) {
                img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute("class","clearfix");

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    };

    if(articles.length === 0) {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
        if(pageNumber === 0){
            document.querySelector(".prev").style.display = "none";
        } else {
            document.querySelector(".prev").style.display = "block";
        }
        if(pageNumber >= 0 && articles.length === 10){
            document.querySelector(".next").style.display = "block";
        } else {
            document.querySelector(".next").style.display = "none";
        }
    }
};

/* OUR FINAL STEP IS PAGINATION */
//Pagination is a way separating content into pages (ie. email navigation)

function nextPage(e) {
    let artCount = section.childElementCount;
    if(pageNumber >= 0 && artCount === 10) {
        pageNumber++;       //1
        fetchResults(e);    //2
        console.log("Page number:",pageNumber); //3
    } else {
        return;
    }  
};

/*Task is simple:
    1. we increase the value of the 'pageNumber' variable
    2. we rerun the fetchResults function
    3. we print the pageNumber variable so we can see it increment
*/

function previousPage(e) {
    if(pageNumber > 0) {        //1
        pageNumber--;           //2
    } else {
        return;             //3
    }
    fetchResults(e);        //4
    console.log("Page:",pageNumber);    //5
};

/*
    1. We have to account for the user being on the first page (page 0). page -1 would cause error
    2. is page number is > 0, we decrement by 1
    3. if value is 0, we return nothing and get out of the function
    4. if value wasn't 0 and we decremented page number, we run fetchResults
*/