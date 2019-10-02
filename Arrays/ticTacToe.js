function main(input) {
    let firstPlayer = 'X';
    let secondPlayer = 'O';
    let firstPlayerMoves = [];
    let secondPlayerMoves = [];
    let dashboard =
        [[false, false, false],
        [false, false, false], 
        [false, false, false]];


    for (let i = 0; i < input.length; i++) {
        const line = input[i].split(" ");
        let row = line[0];
        let col = line[1];

        if (i % 2 === 0) {
            if (dashboard[row][col] === false) {
                dashboard[row][col] = firstPlayer;
            } else {
                console.log('This place is already taken. Please choose another!');
                let temp = firstPlayer;
                firstPlayer = secondPlayer;
                secondPlayer = temp;
            }

        } else {
            if (dashboard[row][col] === false) {
                dashboard[row][col] = secondPlayer;
            } else {
                console.log('This place is already taken. Please choose another!');
                let temp = firstPlayer;
                firstPlayer = secondPlayer;
                secondPlayer = temp;
            }
        }

        firstPlayerMoves = dashboard.map(x => x.every((el) => el == firstPlayer));
        secondPlayerMoves = dashboard.map(x => x.every((el) => el == secondPlayer));

        let diagonal1 = [];
        let diagonal2 = [];
        let isFull = true;
        for (let j = 0; j < dashboard.length; j++) {
            const el = dashboard[j];
            if (el.includes(false)){
                isFull = false;
            }
            diagonal1.push(dashboard[j][j]);
            diagonal2.push(dashboard[j][dashboard.length-1-j]);
            firstPlayerMoves.push(dashboard.map((x) => x[j]).every((el) => el == firstPlayer));
            secondPlayerMoves.push(dashboard.map((x) => x[j]).every((el) => el == secondPlayer));
        }
        
        if (firstPlayerMoves.includes(true) || diagonal1.every((el)=> el == firstPlayer)
        || diagonal2.every((el)=> el == firstPlayer)) {
            console.log(`Player ${firstPlayer} wins!`)
            break;
        }
        if (secondPlayerMoves.includes(true)|| diagonal1.every((el)=> el == secondPlayer)
        || diagonal2.every((el)=> el == secondPlayer)) {
            console.log(`Player ${secondPlayer} wins!`)
            break;
        }
        
        if (isFull){
            console.log("The game ended! Nobody wins :(")
            break;
        }
        

    }

    result = dashboard.map(x=>x.join("	"));

    return result.join("\n");
}

console.log(main(
    ["0 1",
 "0 0",
 "0 2", 
 "2 0",
 "1 0",
 "1 1",
 "1 2",
 "2 2",
 "2 1",
 "0 0"]
));