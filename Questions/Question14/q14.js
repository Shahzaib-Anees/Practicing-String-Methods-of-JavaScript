let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInputItem = prompt("Search for Bakery Items")
for(var i=0 ; i < userInputItem.length ; i++){
  let userSearch = userInputItem.toLowerCase();
    if(bakeryItems.includes(userSearch)){
        document.write(`<div class="card">
        <h4>Finding User Search Bakery Items in an Array</h4>
        <span> User Searching for : "${userInputItem}" </span>
        <span>${userInputItem} is present at index ${bakeryItems.indexOf(userInputItem)} in our Bakery</span>
        </div>`);
        break;
    }else{
        document.write(`<div class="card">
        <h4>Finding User Search Bakery Items in an Array</h4>
        <span> User Searching for : "${userInputItem}" </span>
        <span>We are sorry ${userInputItem} is not present in our Bakery</span>
        </div>`);
        break;
    }
}
