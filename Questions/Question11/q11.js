let userInput = prompt("Enter a String in LowerCase / UpperCase");
let userInputFirstLetter = userInput.slice(0,1);
let userInputRemainingLetter = userInput.slice(1);
let userInputLowerCase = userInput.toLowerCase();
let userInputUpperCase = userInput.toUpperCase();
if (userInput === userInputLowerCase || userInput === userInputUpperCase){
    let finalResultString = userInputFirstLetter.toUpperCase() + userInputRemainingLetter.toLowerCase();
    document.write(`<div class="card">
    <h4>Converting LowerCase String / UpperCase String into TittleCase</h4>
    <span> Your Input String : ${userInput} </span>
    <span> Your Input in Tittle Case : ${finalResultString} </span>
    </div>`);
}else{
    alert("Enter String only in LowerCase or UpperCase")
}