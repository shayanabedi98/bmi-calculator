
function calc() {
    var kg = document.querySelector('#weight').value;
    var cm = document.querySelector('#height').value;

    var cm2m = cm / 100;

    var result = Math.round(kg/(cm2m*cm2m));

    document.querySelector('.result h3').innerHTML = 'Your BMI is ' + result


}