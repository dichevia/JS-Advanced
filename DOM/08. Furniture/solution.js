function solve() {

  let generateBtn = document.querySelector("#exercise > button:nth-child(3)");

  generateBtn.addEventListener("click", function generate() {
    let furnitures = document.querySelector("#exercise > textarea:nth-child(2)").value;
    furnitures = JSON.parse(furnitures);

    furnitures.forEach((furniture, i) => {
      let currImg = furniture['img'];
      let currName = furniture['name'];
      let currPrice = furniture['price'];
      let currDecFactor = furniture["decFactor"];

      let oldRow = document.querySelector(`#exercise > div > div > div > div > table > tbody > tr:nth-child(${i + 1})`);
      oldRow.querySelector("td:nth-child(5) input").removeAttribute("disabled");
      let row = oldRow.cloneNode(true);

      row.querySelector("td:nth-child(1)").innerHTML= `<img src=${currImg}>`;
      row.querySelector("td:nth-child(2)").innerHTML = `<p>${currName}</p>`;
      row.querySelector("td:nth-child(3)").innerHTML = `<p>${currPrice}</p>`;
      row.querySelector("td:nth-child(4)").innerHTML = `<p>${currDecFactor}</p>`;
      row.querySelector("td:nth-child(5)").innerHTML = `<input type="checkbox">`;

      document.querySelector("tbody").appendChild(row);
    });
  })


  document.querySelector("#exercise > button:nth-child(6)").addEventListener("click", function buy() {

    let inputs = Array.from(document.querySelectorAll("tbody tr"));
    let boughtFurniture = [];
    let totalPrice = 0;
    let sumDecFactor = 0;
    let inpCount = 0;
    for (const input of inputs) {
      let checkbox = input.querySelector("td:nth-child(5) > input[type=checkbox]");
      if (checkbox.checked) {
        inpCount++;
        let name = input.querySelector("td:nth-child(2)").innerHTML;
        name = name.substring(3, name.length-4);
        let price = input.querySelector("td:nth-child(3)").innerHTML;
        price = price.substring(3, price.length-4);
        let decFac = input.querySelector("td:nth-child(4)").innerHTML;
        decFac = decFac.substring(3, decFac.length-4);
        boughtFurniture.push(name);
        totalPrice += Number(price);
        sumDecFactor += Number(decFac);
      }

    }

    document.getElementsByTagName('textarea')[1].textContent = 
    `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${sumDecFactor / inpCount}`
  })

}