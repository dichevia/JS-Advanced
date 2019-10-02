function makeOrder(array) {
    let income = 0;

    let price = {
        caffeine: 0.80,
        decaf: 0.90,
        tea: 0.80
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let order = element.split(', ');
        let coins = Number(order[0]);
        let drink = order[1];
        let sumOrder = 0;
        if (drink == 'coffee') {
            sumOrder += price[order[2]]
        }else if (drink == 'tea') {
            sumOrder += price[drink]
        }
        if (order.includes('milk')) {
            let milk = sumOrder * 0.1;
            milk= Number(milk.toFixed(1));
            sumOrder+=milk;
        }

        let sugar = Number(order.pop());

        if (sugar) {
            sumOrder += 0.10;
        }

        if (coins>=sumOrder){
            income+=sumOrder;
            let change = coins - sumOrder;
            console.log(`You ordered ${drink}. Price: $${sumOrder.toFixed(2)} Change: $${change.toFixed(2)}`);
        }else{
            let needed = sumOrder-coins;
            console.log(`Not enough money for ${drink}. Need $${needed.toFixed(2)} more.`)
        }

    }

    console.log(`Income Report: $${income.toFixed(2)}`);
}

makeOrder(['1.00, coffee, caffeine, 0', '0.90, tea, milk, 1', '1.00, coffee, decaf, 0']);