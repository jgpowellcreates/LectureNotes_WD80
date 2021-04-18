// Dont forget to make comments!​
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';     //make endpoint easily referenced
const key = 'A8Cl06sW0uRJQe4yMt69qpsIZ31GUrM3';                                 //individual key to send w/ fetch request
let url;                                                //undefined variable - we'll build it later

const searchTerm = document.querySelector('.search');      //these variables give us simple ways of refernecing different elements
const startDate = document.querySelector('.start-date');   //and classes in our HTML - querySelector looks for the first instance
const endDate = document.querySelector('.end-date');       //of the element or class we declare in that function
const searchForm = document.querySelector('form');      
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');      //variable is a container - hold a number, string, function, reference info

nav.style.display = 'none';             //This won't show up! We're defaulting our nav to be hidden
let pageNumber = 0;                     // We're not using this yet, but it's giving us a value we can manipulate once we have articles
// console.log('PageNumber:', pageNumber);

searchForm.addEventListener('submit', fetchResults);    //waiting for interaction from an input  "click", "submit" - events
nextBtn.addEventListener('click', nextPage);            // whenever it hears "click", it knows to invoke the function "nextPage"
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {                      //creating a new function "fetchResults" - parameter of "e" -> event handler, a placeholder
    // console.log(e);
    e.preventDefault();         //the default action should not be taken like it normally is - interrupting a standard operation

    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //building a request to customize the endpoint we're using
    //console.log('URL:', url);     //our link references our variables and brings in the value we entered in our search bar

    if (startDate.value !== '') {       //if loop asks if we have any date information - if it's not empty
        console.log(startDate.value)        //if we have date information
        url += '&begin_date=' + startDate.value;    //we're going to add it to our URL  w/ specific API doc
        console.log('URL:', url);       //console log the URL for our own learning purposes
    }

    if (endDate.value !== '') {         //if we have an end date
        console.log(endDate.value)      //we let ourselves seee it
        url += '&end_date=' + endDate.value;        //we add it to our URL
        console.log('URL:', url);       //we log the final URL, again for ourselves
    }

    fetch(url)                  //finally using fetch function with our own customized URL (built w/ the variables we've defined)
        .then(function (result) {   // .then IS a promise. (We're using an asynchronous function) - resolve or reject
            console.log(result)     //log the result (for ourselves)
            return result.json();   //it's not in json - javascript can't read the results  - function: "mixin" 'translates' incoming data into usable code
        })                            //.json() is a method -> not a variable or object
        .then(function (json) {       //here, we use json as a placeholder - it is the info translated from our API endpoint
            console.log(json);
            displayResults(json);      //w/ this promise, we finally have information that we can integrate into our code
        })
}

////////////////////////////////////////////////////////////////////////////////////////

function displayResults(json) {                 //another machine that will help display the results of our fetched json code
    console.log('Display Results', json);       //tell us what we're returning
    // console.log(json.response.docs);

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs;          //looking for information in the json object we fetched
    // console.log(articles);

                            //HOW DO WE WANT TO DISPLAY THE RESULTS?  Biggest example of DOM manipulation in th[e world]
    if (articles.length === 0) {        // if there aren't any articles, let us know in the log that there are no results
        console.log('No results');
    } else {
        for (let i = 0; i < articles.length; i++) {         //counting articles... for each article that we count, we exexcute...
            // console.log(i);
            let article = document.createElement('article');       //these variables are interacting w/ our HTML similarly to our earlier constants
            let heading = document.createElement('h2');          // each variable is assigned w/ creating a new type of element/node in our HTML   
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');             //variable as a container for a function
            let clearfix = document.createElement('div');       //anytime we call that variable, we're executing the function
            let current = articles[i];              //letting us grab the                   

            console.log('Current:', current);

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para.textContent = 'Keywords: ';

            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');
            heading.appendChild(link);
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);

            // clearfix.style.padding = '50px'
        }
    }

    if (articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

function nextPage(e) {
    // console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}

function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {
        pageNumber--;
        // fetchResults(e);
    } else {
        return;
    }

    fetchResults(e);
    console.log('Page:', pageNumber);
}


