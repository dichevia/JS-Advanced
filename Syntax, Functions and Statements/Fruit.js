function buyFruit(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let sum = weightInKg * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

buyFruit('apple', 1563, 2.35);
