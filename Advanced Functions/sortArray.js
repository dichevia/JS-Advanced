function main(array, sortType) {
    let command = {
        asc: x => x.sort((a, b) => a - b),
        desc: x => x.sort((a, b) => b - a),
    }

    return command[sortType](array);
}

console.log(main(
    [14, 7, 17, 6, 8], 'asc'
));