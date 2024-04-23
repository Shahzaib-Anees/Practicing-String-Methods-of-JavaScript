let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInputItem = prompt("Search for Bakery Items")
for(var i=0 ; i < userInputItem.length ; i++){
  userInputItem = userInputItem.toLowerCase();
    if(bakeryItems.includes(userInputItem)){
        document.write(`<div class="card">
        <h4>Finding User Search Bakery Items in an Array</h4>
        <span> UserInput : "${userInputItem}" </span>
        <span>${userInputItem} is present at index ${bakeryItems.indexOf(userInputItem)} in our Bakery</span>
        </div>`);
        break;
    }else{
        document.write(`<div class="card">
        <h4>Finding User Search Bakery Items in an Array</h4>
        <span> UserInput : "${userInputItem}" </span>
        <span>${userInputItem} is not present in our Bakery</span>
        </div>`);
        break;
    }
}
