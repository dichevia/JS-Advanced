function main(input, input2) {
    let kingdomsData = input;
    let kingdoms = {};
    let kingdomsRatio = {};
    let resultsArray = [];

    for (const object of kingdomsData) {
        currKingdom = object.kingdom;
        currGeneral = object.general;
        currArmy = Number(object.army);

        if (!kingdoms.hasOwnProperty(currKingdom)) {
            kingdoms[currKingdom] = {};
        }

        let general = kingdoms[currKingdom];
        if (!general.hasOwnProperty(currGeneral)) {
            general[currGeneral] = {};
        }

        let generalStats = general[currGeneral];
        if (!generalStats.hasOwnProperty(['army'])) {
            generalStats['army'] = 0;
            generalStats['wins'] = 0;
            generalStats['losses'] = 0;
        }

        general[currGeneral]['army'] += currArmy;
    }

    for (const kingdomName in kingdoms) {
        kingdomsRatio[kingdomName] = { wins: 0, losses: 0 }
    }

    let figthingKingdomsData = input2;

    for (const fightData of figthingKingdomsData) {
        let attKingdom = fightData[0];
        let attGeneral = fightData[1];
        let deffKingdom = fightData[2];
        let deffGeneral = fightData[3];

        let deffArmy = kingdoms[deffKingdom][deffGeneral]['army'];
        let attArmy = kingdoms[attKingdom][attGeneral]['army'];

        if (deffArmy == attArmy || attKingdom == deffKingdom) {
            continue;
        }

        let winningKingom = '';
        let losingKingom = '';
        let winningGeneral = '';
        let losingGeneral = '';

        if (deffArmy > attArmy) {
            winningKingom = deffKingdom;
            losingKingom = attKingdom;
            winningGeneral = deffGeneral;
            losingGeneral = attGeneral;
            kingdoms[deffKingdom][deffGeneral]['army'] += deffArmy * 0.1;
            kingdoms[attKingdom][attGeneral]['army'] -= attArmy * 0.1;
        }

        if (deffArmy < attArmy) {
            winningKingom = attKingdom;
            losingKingom = deffKingdom;
            winningGeneral = attGeneral;
            losingGeneral = deffGeneral;
            kingdoms[deffKingdom][deffGeneral]['army'] -= deffArmy * 0.1;
            kingdoms[attKingdom][attGeneral]['army'] += attArmy * 0.1;
        }

        kingdoms[deffKingdom][deffGeneral]['army'] = Math.floor(kingdoms[deffKingdom][deffGeneral]['army']);
        kingdoms[attKingdom][attGeneral]['army'] = Math.floor(kingdoms[attKingdom][attGeneral]['army']);
        kingdomsRatio[winningKingom]['wins']++;
        kingdomsRatio[losingKingom]['losses']++;
        kingdoms[winningKingom][winningGeneral]['wins']++;
        kingdoms[losingKingom][losingGeneral]['losses']++;
    }

    kingdomsRatio = Object.entries(kingdomsRatio);
    for (const kingdom of kingdomsRatio) {
        let currStats = Object.entries(kingdom[1]);
        let tempArr = [];
        tempArr.push(kingdom[0]);
        tempArr.push(currStats[0][1]);
        tempArr.push(currStats[1][1]);
        resultsArray.push(tempArr);
    }

    resultsArray.sort((a, b) => b[1] - a[1] || a[2] - b[2] || a[0].localeCompare(b[0]));
    let finalKingdom = resultsArray[0][0];
    let sortedGenerals = Object.entries(kingdoms[finalKingdom]);
    sortedGenerals.sort((a, b) => b[1]['army'] - a[1]['army']);

    console.log(`Winner: ${finalKingdom}`);
    for (const [general, statsObj] of sortedGenerals) {
        let stats = Object.entries(statsObj);
        let army = stats[0][1];
        let wins = stats[1][1];
        let losses = stats[2][1];
        console.log(`/\\general: ${general}\n---army: ${army}\n---wins: ${wins}\n---losses: ${losses}`);
    }
}

main([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);