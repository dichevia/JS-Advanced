function main(input) {
    return input.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n");
}

console.log(main(
    ['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George']
));