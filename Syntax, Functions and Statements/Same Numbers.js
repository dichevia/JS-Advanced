function sameNumber(x) {
    let numbers = x.toString().split('').map(x => Number(x));
    let digit = numbers[0];
    isSame = true;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element != digit) {
            isSame = false;
            console.log('false');
            break;
        }
    }
    if (isSame) {
        console.log('true');
    }
    let reducer = (acc, curr) => acc + curr;
    console.log(numbers.reduce(reducer));
}


