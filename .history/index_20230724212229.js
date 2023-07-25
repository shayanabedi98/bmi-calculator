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


function calcMetric() {
    var kg = document.querySelector('#kg').value;
    var cm = document.querySelector('#cm').value;

    var cm2m = cm / 100;
    var resultMetric = Math.round(kg / (cm2m * cm2m));

    
    if (resultMetric) {
        document.querySelector('.result h3').innerHTML = 'Your BMI is ' + resultMetric;
    } else {
        document.querySelector('.result h3').innerHTML = 'Wrong Input. Try Again.'
    }
}

function calcImperial() {
    var lbs = document.querySelector('#lbs').value;
    var ft = document.querySelector('#ft').value;
    var inch = document.querySelector('#in').value;

    var lbs2kg = lbs * 0.453
    var ft2m = ((ft * inch) * 2.54) / 100
    var resultImperial = lbs2kg / (ft2m * ft2m)

    if (inch === 0) {
        ft2m = (ft * 2.54) /100;
    }

    if (resultImperial) {
        document.querySelector('.result h3').innerHTML = 'Your BMI is ' + resultImperial;
    } else {
        document.querySelector('.result h3').innerHTML = 'Wrong Input. Try Again.'
    }
}