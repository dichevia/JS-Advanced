function solve() {

    let binary = document.createElement("option");
        let hexadeicmal = document.createElement("option");

        binary.innerHTML = "Binary";
        binary.setAttribute("value", "binary");
        document.querySelector("#selectMenuTo").appendChild(binary);

        hexadeicmal.innerHTML = "Hexadecimal";
        hexadeicmal.setAttribute("value", "hexadecimal");
        document.querySelector("#selectMenuTo").appendChild(hexadeicmal);

    document.querySelector("button").addEventListener("click", convert)

    function convert(){
        let number = Number(document.querySelector("#input").value);

        if (document.querySelector("#selectMenuTo").value === "binary"){
            number = number.toString(2);
            document.querySelector("#result").value = number;
        }
        if (document.querySelector("#selectMenuTo").value === "hexadecimal"){
            number = number.toString(16).toUpperCase();
            document.querySelector("#result").value = number;
        }
    }
}