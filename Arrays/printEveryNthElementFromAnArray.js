function main(input) {
    let step = Number(input.pop());
    let result = [];
    for (let i = 0; i <= input.length; i += step) {
        result.push(input[i]);
    }
    return result.join("\n");
}

console.log(main(
    ['1',
        '2',
        '3',
        '4',
        '5',
        '6']
));