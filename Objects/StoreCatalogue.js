function main(input) {
    let firstLetters = [];
    let keys = [];
    let items = {};

    for (let line of input) {
        [key, price] = line.split(" : ")
        if (!firstLetters.includes(key[0])) {
            firstLetters.push(key[0])
        }
        keys.push(key);
        items[key] = price;
    }

    keys.sort(function (a, b) {
        return a.localeCompare(b);
    });
    firstLetters.sort(function (a, b) {
        return a.localeCompare(b);
    });

    for (const letter of firstLetters) {
        console.log(letter);
        for (const element of keys) {
            if (items.hasOwnProperty(element) && element[0] == letter) {
                console.log(` ${element}: ${items[element]}`);
            }
        }
    }
}

main(
    ['Banana : 2',
        "Rubic's Cube : 5",
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10']
)