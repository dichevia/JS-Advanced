function main(input) {
    let delimiter = input.pop();
    let result = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        i != input.length - 1 ? result.push(element + delimiter) : result.push(element);
    }

    return result.join('');
}

console.log(main(
    ['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!',
        '_']
))