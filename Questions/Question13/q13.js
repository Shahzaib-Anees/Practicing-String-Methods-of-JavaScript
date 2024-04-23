let userInputUserName = prompt("Enter your UserName");
let specialCharater = ["@", "!", ",", "$", "&", "*", "%", "#"];
for (var i = 0; i < specialCharater.length; i++) {
    if (userInputUserName.includes(specialCharater[i])) {
        alert("Your Input UserName is Incorrect");

        if (userInputUserName.includes("@")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "'@'" </span>
        <span> ASCII Code of @ : ${userInputUserName.charCodeAt("@")}</span>
        </div>`);
        } else if (userInputUserName.includes("!")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "'!'" </span>
        <span> ASCII Code of @ : ${userInputUserName.charCodeAt("!")}</span>
        </div>`);
        } else if (userInputUserName.includes(",")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "','" </span>
        <span> ASCII Code of , : ${userInputUserName.charCodeAt(",")}</span>
        </div>`);
        } else if (userInputUserName.includes("$")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "'$,'" </span>
        <span> ASCII Code of , : ${userInputUserName.charCodeAt("$")}</span>
        </div>`);
        } else if (userInputUserName.includes("*")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "'*'" </span>
        <span> ASCII Code of , : ${userInputUserName.charCodeAt("*")}</span>
        </div>`);
        } else if (userInputUserName.includes("&")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "'&'" </span>
        <span> ASCII Code of , : ${userInputUserName.charCodeAt("&")}</span>
        </div>`);
        } else if (userInputUserName.includes("%")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "'%'" </span>
        <span> ASCII Code of , : ${userInputUserName.charCodeAt("%")}</span>
        </div>`);
        } else if (userInputUserName.includes("#")) {
            document.write(`<div class="card">
        <h4>Indicating ASCII Codes of Special Character (if any)</h4>
        <span> Special Character : "'#'" </span>
        <span> ASCII Code of , : ${userInputUserName.charCodeAt("#")}</span>
        </div>`);
        }
        break;
    } else {
        alert("Correct UserName");
        break;
    }
}