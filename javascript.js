function clickButton(input) {
   document.getElementById("display").value+=input;
}
function evalMath() {
    let result=document.getElementById("display").value;
    let output=eval(result);
    document.getElementById("display").value=output;
}
function delNumber() {
    document.getElementById("display").value= "";
}