let userPassword = prompt("Enter your Password");
if (userPassword.length > 6) {
    if (userPassword.charCodeAt(0) >= 48 || userPassword.charCodeAt(0) <= 57) {
        alert("Pasword can not begin with the number");
        document.write(`<div class="card">
        <h4>Checking for User Valid Input Password</h4>
        <span> UserInput Password : "${userPassword}" </span>
        <span>Password can not begin with number</span>
        </div>`);
    } else {
        document.write(`<div class="card">
        <h4>Checking for User Valid Input Password</h4>
        <span> UserInput Password : "${userPassword}" </span>
        <span>Your Entered password is in correct format</span>
        </div>`);
    }
} else {
    alert("Password must contains more than 6 characters");
    document.write(`<div class="card">
        <h4>Checking for User Valid Input Password</h4>
        <span> UserInput Password : "${userPassword}" </span>
        <span>The Length of Password should be greater than 6 character</span>
        </div>`);
}
