
function calc() {
    var kg = document.querySelector('#kg').value;
    var cm = document.querySelector('#cm').value;
    var lbs = document.querySelector('#lbs').value;
    var ft = document.querySelector('#ft').value;
    var inch = document.querySelector('#in').value;
    var metric = document.querySelectorAll('.system button')[0];
    var imperial = document.querySelectorAll('.system button')[1];

    var lbs2kg = lbs * 0.453
    var ft2m = ((ft * inch) * 2.54) / 100
    var cm2m = cm / 100;

    var resultImperial = lbs2kg / (ft2m * ft2m)
    var resultMetric = Math.round(kg / (cm2m * cm2m));

    if (!result) {
        document.querySelector('.result h3').innerHTML = 'Wrong Input. Try Again.'
    } else {
        document.querySelector('.result h3').innerHTML = 'Your BMI is ' + resultMetric;
    };

    imperial.addEventListener('click', function() {
        metric.style.visibility = 'hidden';
        metric.style.height = '0'
    })
}