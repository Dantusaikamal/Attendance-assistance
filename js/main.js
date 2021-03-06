
function startingRollNo() {

    var startingRollNo = document.getElementById('startingRollNo').value;

    if (startingRollNo == "") {
        alert("You need to enter 'Starting Roll No' of a student");
    } else {
        numArr.push(startingRollNo);
        console.log(numArr);
    }

}

function lastRollNo() {
    var lastRollNo = document.getElementById('lastRollNo').value;

    if (lastRollNo == "") {
        alert("You need to enter 'Last Roll No' of a student");
    } else {
        var lastNum = Number(lastRollNo);
        numArr.push(lastNum + 1);
        console.log(numArr);
    }
}




// This function is used to push the data from the textbox to an array
function pushData() {
    // get value from the input text
    var inputText = document.getElementById('inputText').value;

    if (inputText == "") {
        alert("You must enter present students roll no to continue ...!");
    } else {
        // append data to the array
        numArr.push(inputText);

        var pval = "";

        for (i = 0; i < numArr.length; i++) {
            pval = pval + numArr[i] + ", ";
        }

        // display array data in pText box
        document.getElementById('pText').innerHTML = "<b>" + pval;

        // remove value from textbox after data is pushed in an array
        document.getElementById("inputText").value = "";

        console.log(numArr);
    }


}


// This function is used to find missing numbers
let missingNumbers = (a, l = true) => Array.from(Array(Math.max(...a)).keys()).map((n, i) => a.indexOf(i) < 0 && (!l || i > Math.min(...a)) ? i : null).filter(f => f);



// Creating an array to get present student roll numbers
var numArr = [];

// calling this when button is clicked
function result() {

    var result = missingNumbers(numArr);
    document.getElementById("missingrollnum").innerHTML = "<b>" + result;

}

// Function to reset 
function reset() {
    // remove array elements
    while (numArr.length > 0) {
        numArr.pop();
    }

    // removing startingRollNo value from array
    document.getElementById("startingRollNo").innerHTML = "";

    // removing startingRollNo textbox content
    document.getElementById("startingRollNo").value = "";



    // removing lastRollNo value from array
    document.getElementById("lastRollNo").innerHTML = "";

    // removing lastRollNo textbox content
    document.getElementById("lastRollNo").value = "";



    // removing textbox content
    document.getElementById("inputText").value = "";

    // removing present student roll no content
    document.getElementById("pText").innerHTML = "";

    // removing absent students roll no content
    document.getElementById("missingrollnum").innerHTML = "";

    console.log(numArr);
}


// On presss enter key add elements into an array
document.getElementById("addbtn").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        return true;
    }
});