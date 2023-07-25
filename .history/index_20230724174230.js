const kg = document.querySelector('#weight').value;
const cm = document.querySelector('#height').value;

document.querySelector('.result button').addEventListener('click', function() {
    let toM = cm/100;
    let result = kg/toM
    document.querySelector('.result h3').innerHTML = `Your BMI is ${result}`
    console.log(result)
})