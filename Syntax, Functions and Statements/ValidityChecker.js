function checker(array) {
    let x1 = Number(array[0]);
    let y1 = Number(array[1]);
    let x2 = Number(array[2]);
    let y2 = Number(array[3]);

    function checkValidPoints(a, b, c = 0, d = 0) {
        let distance = Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
        if (Number.isInteger(distance)) {
            console.log(`{${a}, ${b}} to {${c}, ${d}} is valid`);
        } else {
            console.log(`{${a}, ${b}} to {${c}, ${d}} is invalid`);
        }
    }

    checkValidPoints(x1, y1);
    checkValidPoints(x2, y2);
    checkValidPoints(x1, y1, x2, y2);

}

checker([2, 1, 1, 1]);