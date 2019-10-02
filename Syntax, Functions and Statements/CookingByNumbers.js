function cooking(array) {
    let number = Number(array.shift());

    let operations = {
        chop: function (x) { return x / 2 },
        dice: function (x) { return Math.sqrt(x) },
        spice: (x) => { return x + 1 },
        bake: (x) => {return x*3},
        fillet: (x) => {return x*0.8}
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        number = operations[element](number);
        console.log(number);
    }
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])