class Cupcake {
    constructor(batter, icing, cost) {
        this.batter = batter;
        this.icing = icing;
        this.cost = cost;
    }

    getDescription() {
        return `A ${this.cost} ${this.batter} cupcake with ${this.icing} on top!`;
    }
}

class CupcakeShop {
    constructor(location) {
        this.location = location;
        this.inventory = [];
        this.cash = 0;
    }

    getStatus() {
        return `The shop curently has $${this.cash} and ${this.inventory.length} cupcakes!`
    }

    bakeBatch(numberOfCupcakes, batter, icing, pricePerCupcake) {
        for (let i = 0; i < numberOfCupcakes; i++) {
            let newCupcake = new Cupcake(batter, icing, pricePerCupcake);
            this.addToInventory(newCupcake);
        }
    }

    addToInventory(cupcake) {
        this.inventory.push(cupcake);
    }

    sellCupcake() {
        if (this.inventory.length > 0) {
            let toSell = this.inventory.pop();
            this.cash = this.cash + toSell.cost;
            return toSell;
        } else {
            return "Shit, brah. We outta cakes.";
        }
    }
}

let cakeBakeShop = new CupcakeShop("East Side");
//cakeBakeShopStatus = cakeBakeShop.getStatus();   // 0 cupcakes
cakeBakeShop.bakeBatch(13, "Chocolate", "Vanilla", 2.75);

cakeBakeShop.sellCupcake();
cakeBakeShop.sellCupcake();
cakeBakeShop.sellCupcake();  //we have to repeat this method in order to carry out the action of selling a cake

let soldCupcake = cakeBakeShop.sellCupcake(); //this line is for simple console.log output
//console.log(soldCupcake);
cakeBakeShopStatus = cakeBakeShop.getStatus();   // 13 cupcakes
console.log(cakeBakeShopStatus);