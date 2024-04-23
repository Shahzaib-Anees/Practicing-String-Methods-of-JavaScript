
// Question no 09 
let userInputString = prompt("Enter a Number");
let numbetParse = Number(userInputString);
if(typeof(numbetParse) === "number"){
    document.write(`<div class="card">
    <span>Value : ${userInputString} </span>
    <span>Type : ${typeof(userInputString)} </span>
    <span>Value : ${numbetParse} </span>
    <span>Type : ${typeof(numbetParse)} </span>
    </div>`);    
}else{
    alert("Enter only Integer/Number")
}
