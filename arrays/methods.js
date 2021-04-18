let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food) {
    console.log(foodItem);
}

food.push("Pizza");     // adds a new item to array and returns the NEW LENGTH
console.log(food.push("Hoagie"));  // see here that the number of items
console.log("Push:", food);

//Splice removes an element from an array and allows us to replace the deleted element if desired
let foodSplice = food.splice(1, 2, "Banana");
console.log(foodSplice);
console.log(food);

//pop removes the last element from an array
let foodPop = food.pop();
console.log(foodPop);  //this way, it returns what was removed
console.log("Pop: ", food);

//shift removes the first element from an array and returns it
let foodShift = food.shift();
console.log(foodShift);
console.log("Shift: ", food);

//inserts new elements at the top of the array and returns the new length
//push adds to the end, shift adds to the beginning
let foodUnshift = food.unshift("Popcorn", "Steak");
console.log(foodUnshift);
console.log(food);