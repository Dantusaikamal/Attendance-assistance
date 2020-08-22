// This function is used to push the data from the textbox to an array
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
    document.getElementById('pText').innerHTML = "<b>" + pval;

    console.log(numArr);
}
// This function is used to
let missingNumbers = (a, l = true) => Array.from(Array(Math.max(...a)).keys()).map((n, i) => a.indexOf(i) < 0 && (!l || i > Math.min(...a)) ? i : null).filter(f => f);

// Creating an array to get present student roll numbers
var numArr = [];

// calling this when button is clicked
function result() {

    var result = missingNumbers(numArr);
    document.getElementById("missingrollnum").innerHTML = "<b>" + result ;

}


// Function to reset 
function reset(){
    // remove array elements
     while(numArr.length > 0){
         numArr.pop();
     }

     // removing textbox content
     document.getElementById("inputText").value = "";

     // removing present student roll no content
     document.getElementById("pText").innerHTML = "";

     // removing absent students roll no content
     document.getElementById("missingrollnum").innerHTML = "";

     console.log(numArr);
}