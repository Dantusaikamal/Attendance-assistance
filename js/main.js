
// var numArr = [];

function pushData() {
    // get value from the input text
    var inputText = document.getElementById('inputText').value;

    // append data to the array
    numArr.push(inputText);

    var pval = "";

    for (i = 0; i < numArr.length; i++) {
        pval = pval + numArr[i] + ", ";
    }

    // display array data

    document.getElementById('pText').innerHTML = pval;
    console.log(numArr);
}
function findMissingNumbers(arr) {
    // Create sparse array with a 1 at each index equal to a value in the input.
    var sparse = arr.reduce((sparse, i) => (sparse[i] = 1, sparse), []);
    // Create array 0..highest number, and retain only those values for which
    // the sparse array has nothing at that index (and eliminate the 0 value).
    return [...sparse.keys()].filter(i => i && !sparse[i]);
}

// Creating an array to get present student roll numbers
var numArr = [];

// callng this when button clicked
function result() {

    var result = findMissingNumbers(numArr);

    document.getElementById("missingrollnum").innerHTML = result;

}