function create(words) {

   let content = document.getElementById("content");

   for (const word of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");

      p.style.display = "none"
      p.textContent = word;
      div.appendChild(p);
      content.appendChild(div);
   }

   let divs = Array.from(content.querySelectorAll("div"));

   divs.map(x=>x
      .addEventListener("click", function(){
      x.childNodes[0].style.display = "block";
   }))
}