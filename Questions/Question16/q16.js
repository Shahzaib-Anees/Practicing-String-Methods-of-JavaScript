var university = "University of Karachi";
var splitUni = university.split(" ");
for (var i = 0; i < splitUni.length; i++) {
    for(var j=0 ; j<splitUni[i].length;j++){
        document.write(`<div class="card">
        <span>${splitUni[i][j]}</span>
        </div>`);
        document.write("<br>");
    }     
}