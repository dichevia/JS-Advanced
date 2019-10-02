function main(input) {
    let sumDiagOne = 0;
    let sumDiagTwo = 0;
    
    for (let i = 0; i < input.length; i++) {
        const element = input[i].split(' ');
        input[i] = element
        input[i] = input[i].map(x=>Number(x))
        sumDiagOne += Number(element[i]);
        sumDiagTwo += Number(element[element.length - 1 - i]);
    }
    let result = input.slice();
    if (sumDiagOne === sumDiagTwo) {
        for (let j = 0; j < result.length; j++) {
            const element = result[j]
            for (let k = 0; k < element.length; k++) {
                if (j != k && element.length - 1 - j != k){
                    result[j][k] = sumDiagOne;
                }
            }
        }
        result = result.map(x=>x.join(' '));
        return result.join("\n");
    }
    input = input.map(x=>x.join(' '));
    return input.join("\n");
}

console.log(main(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
));