
function calc() {
    var kg = document.querySelector('#weight').value;
    var cm = document.querySelector('#height').value;
    var kgBtn = document.querySelectorAll('.weight input')[1];
    var lbsBtn = document.querySelectorAll('.weight input')[2];

    var cm2m = cm / 100;

    var result = Math.round(kg/(cm2m*cm2m));

    document.querySelector('.result h3').innerHTML = 'Your BMI is ' + result

    lbsBtn.addEventListener('click', function() {
        kg * 0.453;
    })

}