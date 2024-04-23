let userInputNumber = +prompt("Enter a Number in Interger / Decimal");

let convertedString = userInputNumber.toString();
document.write(`<div class="card">
<h4> Converting Number into String</h4>
<span> Number : ${userInputNumber} </span>
<span> Type : ${typeof(userInputNumber)} </span>
<span> String : ${convertedString + " "} </span>
<span> Type : ${typeof(convertedString)} </span>
</div>`);