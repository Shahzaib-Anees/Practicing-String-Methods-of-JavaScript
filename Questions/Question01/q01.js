// // Question no 01 
let userFirstName = prompt("Enter your First Name:");
let userLastName = prompt("Enter your Last Name:");
let userFullName = userFirstName + " " + userLastName;
document.write(`<div class="card">
<h4>Conctenating User Inputs and Greeting User</h4>
<span> Hello ${userFullName}! Good Morning and Have a good day </span>
</div>`);