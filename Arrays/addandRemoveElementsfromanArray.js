function main(input) {
    // let commands = {
    //     counter: 1,
    //     add: (arr, num) => [...arr, num],
    //     remove: (arr) => [...arr.slice(0, arr.length - 1)]
    // }

    // let result = input.reduce((acc, curr) => {
    //     acc = commands[curr](acc, commands.counter);
    //     commands.counter++;
    //     return acc;
    // }, [])

    // return result.length === 0 ? 'Empty' : result.join('\n');
    let result = [];
    let initialNumber = 1;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element === 'add') {
            result.push(initialNumber)
        }
        if (element === 'remove') {
            result.pop();
        }
        initialNumber++;
    }

    return result.length?result.join("\n"):'Empty';
}

console.log(main(
    ['add', 
    'add', 
    'remove', 
    'add', 
    'add']
));