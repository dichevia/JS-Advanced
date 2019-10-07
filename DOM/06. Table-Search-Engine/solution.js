function solve() {
   let inRows = [];
   let button = document.querySelector("#searchBtn");
   
   button.addEventListener("click", function search() {
      let input = document.querySelector("#searchField").value;
      let rows = Array.from(document.querySelectorAll('tbody tr'));

      inRows.map((e) => rows[e].classList.remove("select"));
      inRows = [];

      rows.map((e, i) => {
         if (e.innerHTML.includes(input)) {
            inRows.push(i);
         }
      });

      inRows.map((e) => document.querySelectorAll("tbody tr")[e].classList.add("select"));
      document.querySelector("#searchField").value = "";
   })
}