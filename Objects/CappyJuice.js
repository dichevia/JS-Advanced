function main(input) {
    let bottles = {};
    let allQuatityByFruit = {};
    for (let i = 0; i < input.length; i++) {
        let currentData = input[i];
        [fruit, quantity] = currentData.split(" => ");
        quantity = Number(quantity);
        if (!allQuatityByFruit.hasOwnProperty(fruit)) {
            allQuatityByFruit[fruit] = 0;
        }
        allQuatityByFruit[fruit] += quantity;
        if (!bottles.hasOwnProperty(fruit) && allQuatityByFruit[fruit] >= 1000) {
            bottles[fruit] = 0;
        }
    }

    for (const key in bottles) {
        const element = Math.floor(Number(allQuatityByFruit[key]) / 1000);
        if (element > 0) {
            console.log(`${key} => ${element}`);
        }
    }
}

main(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)