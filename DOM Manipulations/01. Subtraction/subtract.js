function subtract() {
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let result = document.getElementById("result");

    let substraction = firstNumber - secondNumber;
    result.textContent = substraction;
}