
function calc() {
    var kg = document.querySelector('#weight').value;
    var cm = document.querySelector('#height').value;

    var m = cm / 100;

    document.querySelector('.result h3').innerHTML = 'Your BMI is ' + kg/m;
}