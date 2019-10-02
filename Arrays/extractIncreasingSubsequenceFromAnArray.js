function main(input) {
    let result = input
        .reduce((acc, curr) => {
            if (curr >= Math.max(...acc)) {
                acc.push(curr)
            }
            return acc
        },
            [])

    return result.join("\n");
}

console.log(main(
        [1,
        2,
        3,
        4]
));