/*
Fetching allows us to pull resources from across the web: text files, code, data, etc.

Fetch centers around the concept of "Request" and "Response" (generic objects, can be used anywhere)

    1. fetch() takes in the desired resource path as a mandatory argument
    2. request object returns a promise that resolves to the argument's response
    3. having retrieved response, we use methods to define how the body content will be handled
    
 - fetch is promise-based, which allows us to write cleaner code
 - fetch has a "neat" definition for requests/reponses. We can write a function to modify a request before it's sent
 
*/

let starWarsPeopleList = document.querySelector("ul");

fetch("http://swapi.dev/api/people")   //we didn't specify a method, so it performed GET
    .then(function(response) {
        //console.log(response);   //what we get here isn't usable! It needs to parsed as JSON
        return response.json();     //.json() is a "mixin" - class containing methods for use by other classes
    })
    .then(function(jsonPlaceholder) {
        let people = jsonPlaceholder.results;
        console.log(people);
        
        for(p of people) {          //prints objects  
            let listItem = document.createElement("li");        //created List Item
            listItem.innerHTML = "<p>" + p.name + "</p>";       //created Text to go in <li>
            starWarsPeopleList.appendChild(listItem);       //placing new <li>s into our list
        }
    });

let filmURL = "http://swapi.dev/api/films/"
const favEpisodes = document.querySelector(".swFavFilms");
        //changed to querySelector because GetElementsByClassName puts them in an array

fetch(filmURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let movies = json.results;
        //console.log(movies);

        for(epi of movies) {        //how do I deal w/ this if not iterable?
            let favMovies = document.createElement("h4");
            favMovies.innerText = epi.title;
            favEpisodes.appendChild(favMovies);
        }
    })


let shipURL = "https://swapi.dev/api/starships/"
const starWarsShipList = document.querySelector(".shipClass");

fetch(shipURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let vehicles = json.results
        //console.log(vehicles);

        for(ship of vehicles) {
            if (ship.cost_in_credits >= 1000000) {
                let expShips = document.createElement("h4");
                expShips.innerText = `The ${ship.name} costs a whopping ${ship.cost_in_credits} credits!`;
                starWarsShipList.appendChild(expShips);
            }
        }
    })