/* DONT CHANGE THIS CODE - START */
function wait(ms = 1000) { return new Promise(resolve => setTimeout(resolve, ms)) }

class Dish {
    constructor(cookingTime) {
        this.cookingTime = cookingTime;
    }

    async cook() {
        const actualCookingTime = this.cookingTime * (1 + Math.random()) * 100;
        await wait(actualCookingTime);
        return this;
    }
}
/* DONT CHANGE THIS CODE - END */

/*
    YOUR CODE HERE
*/

class Kitchen {
    construct(){
        this.fridge = [];
        this.orders = [];
    }

    addToFridge(ingridients){
        if(this.fridge = []){
            this.fridge = ingridients;
        }
        else{
            for (let index = 0; index < this.ingridients.length; index++){
                this.fridge[this.fridge.length] = this.ingridients[index];
            }
        }
        
    }

    order(dish){
        for (const ing of this.fridge){
            for (const dishIng of dish.ingridients){
                if (ing.ing == dishIng.ing) {
                    if (ing.quantity < dishIng.quantity){
                        throw new Error ("Not enough ingridients in fridge");
                    }
                }
            }
        }

        for (const ing of this.fridge){
            for (const dishIng of dish.ingridients){
                if (ing.ing == dishIng.ing) {
                    if (ing.quantity >= dishIng.quantity){
                        ing.quantity -= dishIng.quantity;
                    }
                }
            }
        }

        if(this.orders = []){
            this.orders = [dish];
        }
        else{
            this.orders.push(dish);
        }
    } 

    cookFastestOrder(){
        let time = 1000;
        let toCook;
        for(const order of this.orders){
            if (order.cookingTime < time){
                time = order.cookingTime
                toCook = order;
            }
        }

        for( var i = 0; i < this.orders.length; i++){ 
            if ( this.orders[i] === 5) { 
                this.orders.splice(i, 1); 
            }
        }
        toCook.cook();
        return toCook
    }

    cookAllOrders(){
        let res = this.orders;
        for(const order of this.orders){
            order.cook();
        }
        this.orders.splice(0, this.orders.length);
        return res;
    }
}

class Ingridient{

    constructor(ing, quantity){
        this.ing = ing;
        this.quantity = quantity;
    }
}

class Bolognese extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(10);
        this.ingridients = [new Ingridient('spaghetti', 1),
                            new Ingridient('meat', 1), 
                             new Ingridient('tomato', 1)]
    }
}

class MashedPotatoes extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(8);
        this.ingridients = [new Ingridient('potato', 1)]
    }
}

class Steak extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(7);
        this.ingridients = [new Ingridient('meat', 1)]
    }
}

class SteakAndFries extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(10);
        this.ingridients = [new Ingridient('potato', 1),
                            new Ingridient('meat', 1)]
    }
}

async function test() {
    const kitchen = new Kitchen();
    kitchen.addToFridge([
        new Ingridient('potato', 1),
        new Ingridient('spaghetti', 1),
        new Ingridient('meat', 3),
        new Ingridient('tomato', 2)
    ])

    kitchen.order(new Bolognese()); // Bolognese extends Dish (cookingTime = 10)
    kitchen.order(new MashedPotatoes()); // MashedPotatoes extends Dish (cookingTime = 8)
    kitchen.order(new Steak()); // Steak extends Dish (cookingTime = 7)

    // Feel free to experiment with various dishes and ingridients

    await kitchen.cookFastestOrder(); // Returns fastest dish to make
    await kitchen.cookAllOrders(); // Returns two dishes in array

    kitchen.order(new SteakAndFries()); // Throws Error: Not enough ingridients in fridge
}

test();
