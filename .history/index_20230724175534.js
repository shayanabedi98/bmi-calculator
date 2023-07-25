const kg = document.querySelector('#weight').value;
const cm = document.querySelector('#height').value;

document.querySelector('.result button').addEventListener('click', function() {
    let result = kg/cm
    document.querySelector('.result h3').innerHTML = `Your BMI is ${result}`
    console.log(result)
})