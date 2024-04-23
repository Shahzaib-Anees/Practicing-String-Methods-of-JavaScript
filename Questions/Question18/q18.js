let paragraph = "the quick brown fox jumps over the lazy dog";
let word = "the";
let counter = 0;
for (var i = 0; i < paragraph.length; i++) {
    let occurredWord = paragraph.slice(i , i + 3);
    if (occurredWord === word) {
        counter++;
    }
}
document.write(`<div class="card">
<h4>Calculating the Occurence of same word in the String</h4>
<span>There are ${counter} occurrences of word "the" in the above Paragraph</span>
</div>`);
