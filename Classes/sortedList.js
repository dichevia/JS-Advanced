class List {
    constructor() {
        this.listOfNumbers = [];
        this.size = 0;
    }

    add(element) {
        this.listOfNumbers.push(element);
        this.size++;
        if (this.listOfNumbers.length > 1) {
            this.listOfNumbers.sort((a, b) => a - b);
        }
    }

    remove(index) {
        if (index >= 0 && index < this.listOfNumbers.length) {
            this.listOfNumbers.splice(index, 1);
            this.size--;
            if (this.listOfNumbers.length > 1) {
                this.listOfNumbers.sort((a, b) => a - b);
            }
        }

    }

    get(index) {
        if (index >= 0 && index < this.listOfNumbers.length) {
            return this.listOfNumbers[index];
        }
    }

}

let list = new List();
console.log(list.size);
list.add(8);
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(3));
list.remove(1);
console.log(list.get(1));
