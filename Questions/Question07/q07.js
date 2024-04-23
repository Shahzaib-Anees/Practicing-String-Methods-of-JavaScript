let userInputString = prompt("Enter a word / string");
let userInputIndex = +prompt("What Index Letter do you want to find ?");

if (typeof (userInputIndex) != NaN) {
    let letterAtIndex = userInputString.charAt(userInputIndex);
    document.write(`<div class="card">
    <h4>Finding String Character at User Input Index</h4>
    <span> Your Input String : ${userInputString} </span>
    <span>Letter at index : ${userInputIndex} is : ${userInputString.charAt(userInputIndex)} </span>
    </div>`);
}else{
    alert("You have Enter Wrong Input");
}
