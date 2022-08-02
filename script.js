var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
let result = document.getElementById('p_2');

function capturar() {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;
}

function soma() {
    result.innerText = parseInt(num1) + parseInt(num2);
}
function menos() {
    result.innerText = parseInt(num1) - parseInt(num2);
}
function vezes() {
    result.innerText = parseInt(num1) * parseInt(num2);
}
function dividir() {
    result.innerText = parseInt(num1) / parseInt(num2);
}