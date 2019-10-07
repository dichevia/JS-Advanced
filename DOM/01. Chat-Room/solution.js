function solve() {
   
   document.querySelector("#send").addEventListener('click', send);

   function send(){
      let messageContent = document.querySelector("#chat_input").value;
      let div = document.createElement('div');
      div.innerHTML = messageContent;
      div.className = "message my-message";
      document.querySelector("#chat_messages").appendChild(div);
      document.querySelector("#chat_input").value = '';
   }
}
