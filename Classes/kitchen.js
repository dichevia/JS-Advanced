class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (const line of products) {
            let input = line.split(" ");
            let name = input[0];
            let quantity = Number(input[1]);
            let price = Number(input[2]);
            if (price <= this.budget) {
                this.budget -= price;
                if (!this.productsInStock.hasOwnProperty(name)) {
                    this.productsInStock[name] = 0;
                }
                this.productsInStock[name] += quantity;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.actionsHistory.join("\n");
    }

    addToMenu(meal, neededProducts, price) {
        let products = {}
        for (const product of neededProducts) {
            let input = product.split(" ");
            let name = input[0];
            let quantity = input[1];
            price = Number(price);
            if (!products.hasOwnProperty(name)) {
                products[name] = 0;
            }
            products[name] = quantity;
        }

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal]['products'] = products;
            this.menu[meal]['price'] = price;

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals on the menu, other ideas?`
        }
        return `The ${meal} is already in our menu, try something different.`
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        }
        let menuMeals = [];
        for (const meal in this.menu) {
            menuMeals.push(`${meal} - $ ${this.menu[meal]['price']}`)
        }
        
        return menuMeals.join("\n")+"\n";
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        for (const product in this.menu[meal]['products']) {

            if (!this.productsInStock.hasOwnProperty(product)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
            if (this.menu[meal]['products'][product] > this.productsInStock[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }

        for (const product in this.menu[meal]['products']) {
            this.productsInStock[product] -= this.menu[meal]['products'][product];
        }

        this.budget += this.menu[meal]['price'];

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`
    }
}

// let kitchen = new Kitchen(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
// console.log(kitchen.makeTheOrder('frozenYogurt'));