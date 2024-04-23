
// // Question no 08 
var message = "Ali and Sami are best friends. They play cricket and football together";
var replaceMessage= message.replaceAll("and","&");
document.write(`<div class="card">
<h4>Replacing Values by  using .replaceAll() method</h4>
<span> Original Para : ${message} </span>
<span>Replace Para : ${replaceMessage} </span>
</div>`);
