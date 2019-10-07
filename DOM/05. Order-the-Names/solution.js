function solve() {
    let letters = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));
    let db = {};
    for (let letter of letters) {
        db[letter] = [];
    }
    db["N"].push("Nixon")
    db["P"].push("Peterson")

    document.querySelector("#exercise > article > button").addEventListener("click", addToDB);

    function addToDB() {
        let input = document.querySelector("#exercise > article > input[type=text]").value;
        let firstLetter = input[0].toUpperCase();
        let name = firstLetter + input.substring(1).toLowerCase();
        db[firstLetter].push(name);
        let listItems = document.querySelectorAll("ol li")
        let index = letters.indexOf(firstLetter);
        listItems[index].textContent = db[firstLetter].join(", ");
    }
}