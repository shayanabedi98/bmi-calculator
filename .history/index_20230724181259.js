var kg = document.querySelector('#weight').value;
var cm = document.querySelector('#height').value;
function calc() {
    let result = kg / (cm * cm);
     console.log(result);
}