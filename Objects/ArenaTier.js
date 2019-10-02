function main(input) {
    let gladiators = {};
    let tiers = {};
    let results = [];

    for (const data of input) {

        if (data === 'Ave Cesar')
            break;

        if (data.includes("->")) {
            [currGladiator, currTechnique, currSkill] = data.split(" -> ");
            currSkill = Number(currSkill);
            if (!gladiators.hasOwnProperty(currGladiator)) {
                gladiators[currGladiator] = {};
            }

            let technique = gladiators[currGladiator]
            if (!technique.hasOwnProperty(currTechnique)) {
                technique[currTechnique] = 0;
            }

            let skill = technique[currTechnique];
            if (skill < currSkill) {
                technique[currTechnique] = currSkill;
            }
            if (!tiers.hasOwnProperty(currTechnique)) {
                tiers[currTechnique] = []
            }

            tiers[currTechnique].push(currGladiator)

        } else {
            let fighters = data.split(' vs ');
            let fighter1 = fighters[0];
            let fighter2 = fighters[1];
            let inSameTier = false;
            let fighterStyle = '';
            for (const style in tiers) {
                if (tiers.hasOwnProperty(style)) {
                    const element = tiers[style];
                    if (element.includes(fighter1) && element.includes(fighter2)) {
                        inSameTier = true;
                        fighterStyle = style;
                        break;
                    }
                }
            }

            if (inSameTier) {
                
                let fighter1Power = Object.entries(gladiators[fighter1]);
                let fighter2Power = Object.entries(gladiators[fighter2]);

                let fighter1PowerSum = fighter1Power.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);
                let fighter2PowerSum = fighter2Power.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);
                let toDelete = '';
                if (fighter1PowerSum > fighter2PowerSum) {
                    delete gladiators[fighter2];
                    toDelete = tiers[fighterStyle].findIndex(function(e){return e==fighter2});
                    tiers[fighterStyle].splice(toDelete, 1);
                }
                if (fighter1PowerSum < fighter2PowerSum) {
                    delete gladiators[fighter1];
                    toDelete = tiers[fighterStyle].findIndex(function(e){return e==fighter1});
                    tiers[fighterStyle].splice(toDelete, 1);
                }
            }
        }

    }

    let gladiatorsArr = Object.entries(gladiators);
    gladiatorsArr = gladiatorsArr.filter(x => x[1] !== null);

    for (const gladiatorStats of gladiatorsArr) {
        let stats = Object.entries(gladiatorStats[1])
        let sum = 0;
        for (const technique of stats) {
            sum += technique[1]
        }
        results.push([gladiatorStats[0], sum]);
    }
    results.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    for (const gladiator of results) {
        let gladiatorName = gladiator[0];
        console.log(`${gladiator[0]}: ${gladiator[1]} skill`);
        let technique = Object.entries(gladiators[gladiatorName]);
        technique.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        for (const [tech, sk] of technique) {
            console.log(`- ${tech} <!> ${sk}`);
        }
    }
}

main([
    'Pesho -> Duck -> 400',
    'Pesho vs Gosho',
    'Pesho -> Quack -> 400',
    'Gosho -> Duck -> 401',
    'Pesho vs Gosho',
    'Pesho vs Gosho',
    'Ave Cesar']);

// main(['Pesho -> BattleCry -> 400',
//     'Gosho -> PowerPunch -> 300',
//     'Stamat -> Duck -> 200',
//     'Stamat -> BattleCry -> 250',
//     'Pesho vs Stamat',
//     'Ave Cesar'
// ]);