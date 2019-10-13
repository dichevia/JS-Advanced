function addItem() {
    let menu = document.getElementById("menu");
    let text = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;

    let opiton = document.createElement("option");
    opiton.setAttribute("value", value);
    opiton.textContent = text;
   
    menu.appendChild(opiton);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";

}