// get the value of #min and #max and generate a random number using #min as the floor and #max as the ceiling once you click the generate button
//Language: javascript
//Path: dice\index.js
function generate() {
    var min = document.querySelector('#min').value;
    var max = document.querySelector('#max').value;
    var random = Math.floor((Math.random() * (max - min + 1)) + min);
    document.querySelector('#dice').innerHTML = random;
}