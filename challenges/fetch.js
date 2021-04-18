// Challenge:
// Inside of the dadJokes() function...
// 1. fetch a random dad joke from 'https://dad-jokes.p.rapidapi.com/random/joke'
// 2. if there is no joke, display text that says 'no jokes available'
// 3. display the setup and punchline to the joke, separately, however you'd like (ex. setTimeout() 
// function to display at multiple different times, or simply in two different tags)
// 4. use DOM manipulation to style the dad joke 
// 5. feel free to use the existing h2, p, and img tags with classes and id's to display your 
// content :)


function dadJokes() {


    fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
       method: 'GET',
       Accept: 'application/json',
       headers : {
       "x-rapidapi-key": "6f3fb29accmshe3fe5e0489944c5p116bc2jsn2d83a4591d22",
       "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
       "useQueryString": true
       }
    }).then((data) => data.json())
    .then(data => fetchFunction(data))
    .catch(function(err) {console.log(err)});


     function fetchFunction(data) {
         console.log(data);
        let setup = document.getElementById("title");
        let punchline = document.getElementById("dadJoke");

        setup.innerText = data.body[0].setup;
        punchline.innerText = data.body[0].punchline;
     }
   
   }    