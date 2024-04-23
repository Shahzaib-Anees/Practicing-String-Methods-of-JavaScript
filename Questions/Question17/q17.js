let userInput = prompt("Enter a String");
let lastIndex = userInput.length - 1;
let lastIndexOfInput = userInput.charAt((lastIndex));

document.write(`<div class="card">
  <h4>Printing the Last Character of the UserInput</h4> 
  <span> UserInput : "${userInput}" </span>
  <span>The last Character of ${userInput} = ${lastIndexOfInput}</span>
</div>`);