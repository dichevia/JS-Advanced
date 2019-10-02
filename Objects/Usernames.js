function main (input){
    let uniqueNames = [...new Set(input)];
    uniqueNames.sort((a, b)=>a.length - b.length || a.localeCompare(b))
    uniqueNames.map((x)=> {console.log(`${x}`)});
}

main(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']
);