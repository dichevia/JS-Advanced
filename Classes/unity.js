class Rat{
    constructor(name){
        this.name = name;
        this.united = []
    }

    unite(otherRat){
        if (otherRat instanceof Rat){
            this.united.push(otherRat);
        }
    }

    getRats(){
        return this.united
    }

    toString(){
        return this.name+`\n`+this.united.map(rat => `##${rat.name}`).join("\n");
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
