// const numArr = [3, 4, 7, 8,11,30];
// const missing = [];


// create an array
var numArr = [];
numArr.length = 4;
var missing = [];

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
}

function missingroll() {
    for (let i in numArr) {

        // get the size of the gap
        let x = numArr[i] - numArr[i - 1];
        // start filling in the gap with `1`
        let diff = 1;
        // while there's still a gap, push the correct numbers
        // into `missing`, calculated by the number + diff
        while (diff < x) {
            missing.push(numArr[i - 1] + diff);
            diff++;


            console.log(missing);
            document.getElementById("missingrollnum").innerHTML = missing;
        }
    }
}