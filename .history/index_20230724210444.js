var metric = document.querySelector('.metric');
var imperial = document.querySelector('.imperial');
var metricBtn = document.querySelector('#metric');
var imperialBtn = document.querySelector('#imperial');

imperialBtn.addEventListener('click', function() {
    metric.style.visibility = 'hidden';
    metric.style.height = '0';
    imperial.style.visibility = 'visible';
    imperial.style.height = '100%';
});

metricBtn.addEventListener('click', function() {
    imperial.style.visibility = 'hidden';
    imperial.style.height = '0';
    metric.style.visibility = 'visible';
    metric.style.height = '100%';
});


function calc(func) {
    var kg = document.querySelector('#kg').value;
    var cm = document.querySelector('#cm').value;
    var lbs = document.querySelector('#lbs').value;
    var ft = document.querySelector('#ft').value;
    var inch = document.querySelector('#in').value;


    var lbs2kg = lbs * 0.453
    var ft2m = ((ft * inch) * 2.54) / 100
    var cm2m = cm / 100;

    var resultImperial = lbs2kg / (ft2m * ft2m)
    var resultMetric = Math.round(kg / (cm2m * cm2m));

    if (!resultMetric) {
        document.querySelector('.result h3').innerHTML = 'Wrong Input. Try Again.'
    } else if (resultMetric) {
        document.querySelector('.result h3').innerHTML = 'Your BMI is ' + resultMetric;
    };

}

