const kg = document.querySelector('#weight').value;
const cm = document.querySelector('#height').value;

document.querySelector('.result button').addEventListener('click', function() {
    let result = kg/bm
    document.querySelector('.result h3').innerHTML = `Your BMI is ${result}`
    console.log(result)
})

console.log(kg);
console.log(cm);