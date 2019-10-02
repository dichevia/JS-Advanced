function main(input) {
    let isMagic = true;
    let magicNumber = input[0].reduce((a, b) => a + b);
    for (let i = 0; i < input.length; i++) {
        let row = input.map((x) => x[i]).reduce((a, b) => a + b);
        let col = input[i].reduce((a, b) => a + b);

        if (row != col || row != magicNumber || col != magicNumber) {
            isMagic = false;
        }
    }
    return isMagic;
}

console.log(main(
    [[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]


));