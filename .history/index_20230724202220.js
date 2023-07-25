
function calc() {
    var kg = document.querySelector('#kg').value;
    var cm = document.querySelector('#cm').value;
    var lbs = document.querySelector('#lbs').value;
    var ft = document.querySelector('#ft').value;
    var inch = document.querySelector('#in').value;

    var cm2m = cm / 100;

    var result = Math.round(kg / (cm2m * cm2m));

    if (result === NaN) {
        document.querySelector('.result h3').innerHTML = 'Wrong Input. Try Again.'
    } else {
        document.querySelector('.result h3').innerHTML = 'Your BMI is ' + result;
    }

}