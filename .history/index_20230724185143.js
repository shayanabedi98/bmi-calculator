
function calc() {
    var kg = document.querySelector('#weight').value;
    var cm = document.querySelector('#height').value;

    var m = cm / 100;

    result = kg/(m*m);
}

    document.querySelector('.result h3').innerHTML = 'Your BMI is ' + result.round