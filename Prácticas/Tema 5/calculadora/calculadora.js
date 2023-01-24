//Pillo todos los botones
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
const resultDisplay = document.getElementById("result-display");

//Y recojo los eventos según el botón
//Al final el = no lo he puesto porque he pensado para qué? si te puede dar el resultado directamente, 
//y lo he hecho así, directo como alguien seguro de si mismo que no duda en actuar ante la adversidad.

//Si pulsa en sumar
add.addEventListener("click", function() {
    resultDisplay.value = parseFloat(num1.value) + parseFloat(num2.value);
  });
//En restar
  subtract.addEventListener("click", function() {
    resultDisplay.value = Number(num1.value) - Number(num2.value);
  });
//En multiplicar  
  multiply.addEventListener("click", function() {
    resultDisplay.value = Number(num1.value) * Number(num2.value);
  });
//En dividir
  divide.addEventListener("click", function() {
    resultDisplay.value = Number(num1.value) / Number(num2.value);
  });
//Y en limpiar
  clear.addEventListener("click", function() {
    num1.value = "";
    num2.value = "";
    resultDisplay.value = "";
  });

