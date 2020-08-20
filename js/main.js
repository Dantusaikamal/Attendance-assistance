
// Creating an array to get present student roll numbers
var numArr = [];

function pushData() {
    // get value from the input text
    var inputText = document.getElementById('inputText').value;

    // append data to the array
    numArr.push(inputText);

    var pval = "";

    for (i = 0; i < numArr.length; i++) {
        pval = pval + numArr[i] + "<br/>";
    }

    // display array data

    document.getElementById('pText').innerHTML = pval;
    console.log(numArr);
}

function findMissingNumbers() {


    var N = Array.from(Array(Math.max.apply(Math, numArr)).keys()); //Generate number array using the largest int from X

    Array.prototype.diff = function (a) {
        return this.filter(function (i) { return a.indexOf(i) < 0; }); //Return the difference
    };

    document.getElementById("missingrollnum").innerHTML =  (N.diff(numArr));

}

