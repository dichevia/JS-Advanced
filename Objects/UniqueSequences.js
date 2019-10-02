function main(input) {
    let uniqueArrays = [];
    let nestedArrays = input.map(JSON.parse);

    for (const array of nestedArrays) {
        let sum = array.reduce((previous, current) => previous + current, 0);
        let containSum = uniqueArrays.some((x) => x.reduce((a, b) => a + b, 0) === sum);

        if (!containSum) {
            uniqueArrays.push(array.sort((a, b) => b - a));
        }
    }
    let output = uniqueArrays
        .sort((a, b) => a.length - b.length)
        .map((array) => `[${array.join(", ")}]`)
        .join("\n");

    console.log(output);
}

main(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);