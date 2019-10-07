function solve() {
    let firstOperand = "";
    let sign = "";
    let secondOperand = "";

    Array.from(document.querySelectorAll(".keys"))
        .map(x => x.addEventListener("click", function pressed(e) {

            if (Number.isInteger(Number(e.target.innerHTML)) || e.target.innerHTML == ".") {
                if (sign !== "") {
                    secondOperand += e.target.innerHTML;
                } else {
                    firstOperand += e.target.innerHTML;
                    document.querySelector("#expressionOutput").innerHTML = firstOperand;
                }
            } else {
                if (secondOperand == "" || firstOperand == "") {
                    if (e.target.innerHTML !== "=") {
                        sign = e.target.innerHTML;
                        document.querySelector("#expressionOutput").innerHTML = firstOperand + " " + sign;
                    } else {
                        document.querySelector("#resultOutput").innerHTML = "NaN";
                    }
                }
            }

            document.querySelector(".clear").addEventListener("click", function clear() {
                document.querySelector("#expressionOutput").innerHTML = "";
                document.querySelector("#resultOutput").innerHTML = "";
                firstOperand = "";
                sign = "";
                secondOperand = "";
            });

            document.querySelector("#expressionOutput").innerHTML = firstOperand + " " + sign + " " + secondOperand;
            
            if (firstOperand && sign && secondOperand && e.target.innerHTML === "=") {
                firstOperand = Number(firstOperand);
                secondOperand = Number(secondOperand);
                let result = calculte(firstOperand, sign, secondOperand);
                document.querySelector("#resultOutput").innerHTML = result;
            }

        }))

    function calculte(firstNum, operation, secondNum) {
        if (operation === "-") {
            return firstNum - secondNum;
        }
        if (operation === "+") {
            return firstNum + secondNum;
        }
        if (operation === "x") {
            return firstNum * secondNum;
        }
        if (operation === "/") {
            return firstNum / secondNum;
        }
    }

}