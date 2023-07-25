var kg = document.querySelector('#weight').value;
var cm = document.querySelector('#height').value;

document.querySelector('.calculate').addEventListener('click', function() {
    let m = cm / 100;
    let result = kg / (m * m);
     console.log(result);
})