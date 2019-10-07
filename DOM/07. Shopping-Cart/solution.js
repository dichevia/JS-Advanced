function solve() {
   let addedProducts = [];
   let toAppend = [];
   let sumAddedProducts = 0;
   Array
      .from(document.querySelectorAll(".product"))
      .map(x => x.querySelector(".add-product")
         .addEventListener("click", function addProduct() {
            let currProductName = x.querySelector(".product-title").innerHTML;
            let currProductPrice = x.querySelector(".product-line-price").innerHTML;
            addedProducts.push(currProductName);
            sumAddedProducts += Number(currProductPrice);
            toAppend.push((`Added ${currProductName} for ${currProductPrice} to the cart.\n`))
            document.querySelector("body > div > textarea").innerHTML = toAppend.join("");
         })
      );

   document.querySelector(".checkout").addEventListener("click", function check() {
      let uniqueProducts = [...new Set(addedProducts)].join(", ");
      toAppend.push(`You bought ${uniqueProducts} for ${sumAddedProducts.toFixed(2)}.`);
      document.querySelector("body > div > textarea").innerHTML = toAppend.join("");

      let buttons = Array.from(document.querySelectorAll("button"));
      for (const button of buttons) {
         button.setAttribute("disabled", "true");
      }
   })
}