let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

food.forEach(foodItem => console.log(foodItem));
//the forEach method CANNOT return a value
// "foodItem" is a placeholder for incoming values - a locally scoped variable

food.forEach((foodItem, index) => console.log(foodItem, index));

//CHALLENGE

let movies = ["Forrest Gump", "Catch Me If You Can", "Groundhog Day", "Inception"];

movies.forEach(filmTitle => console.log(filmTitle));
movies.push("Insidious");
movies.splice(0,3, "Incredibles");
movies.forEach(filmTitle => console.log(filmTitle));