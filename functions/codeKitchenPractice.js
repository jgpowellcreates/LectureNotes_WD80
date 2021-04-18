/*
WELCOME TO MY CODE KITCHEN
Today you're going to be making a few smoothies.
You'll get some feedback from your assistant JavaScript! (JS doesn't have the best taste, but give 'em a shot)
*/

//WE'VE GOT AN ASSORTMENT OF GROCERIES FOR YOU TO USE!
let fruit = ["banana", "apple", "peach", "pear", "orange", "cherry", "lemon", "lime", "strawberry", "watermelon", "grapefruit"];
let meat = ["chicken", "fish", "beef", "ham", "bacon", "venison", "turkey", "dinosaur"];
let vegetable = ["celery", "cucumber", "carrot", "tomato", "broccoli", "beet"];

//PICK 3 INGREDIENTS TO ENTER BELOW. THINK YOU'VE GOT GOOD TASTE?
let one = "banana";
let two = "peach";
let three = "cucumber";


//Below is my code and I encourage you to tweak it:
//This is running using a single function "blender" which looks at your 3 inputs
// and runs them through a variety of if & else/if conditional to see if it likes your combo.

//It's a little bulky. I'd like the combinations in the second ingredient to create variables that
// could be used for the logic in ingredient 3.
//WHAT CAN YOU DO TO EXPAND ON/SIMPLIFY THIS?



function blender(one, two, three) {
    //FIRST INGREDIENT CODE - If you chose fruit, you're commended.
    if (fruit.includes(one)) {
        console.log(`Ooh, ${one}! That's a good start!`);
    } else {
        console.log(`You want to put ${one} in a smoothie? ...okay. What else?`)
    }

    //SECOND INGREDIENT CODE - All fruit is good. One fruit is questionable. No fruit (else statement) is looked down on.
    if (fruit.includes(one) && fruit.includes(two)) {
        console.log(`I love ${two}. This is going to taste great!`)
        //combo = true;
    } else if (fruit.includes(one) || fruit.includes(two)) {
        console.log(`Umm... ${one} with ${two}? I don't know if you'll like this.`)
        //combo = false;
    } else {
        console.log(`Okay, ${one} and ${two}? You're just wasting food now?`)
        //combo = false;
    }
    //THIRD INGREDIENT CODE - Not completely happy with this section. The logic is wonk, but it gives you some options.
    // How would you clean this up?
    if (fruit.includes(one) && fruit.includes(two) && fruit.includes(three)) {
        console.log(`mm-MM! Yummy! You should sell these ${one}-${two}-${three} smoothies!`)
    } else if (fruit.includes(one) && fruit.includes(two) && vegetable.includes(three)) {
        console.log(`${three} isn't as sweet as I like, but that might work.`);
    } else if (meat.includes(three)) {
        console.log(`NOOO. Why did you ruin this with ${three}??`);
    } else if (fruit.includes(three)) {
        console.log(`Trying to salvage this with ${three}? Pfft. Good luck.`);
    } else {
        console.log(`This is upsetting. You're just wasting food and this looks DISGUSTING.`)
    }
}
blender(one, two, three);