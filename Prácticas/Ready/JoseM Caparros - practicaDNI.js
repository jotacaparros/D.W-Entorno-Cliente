let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt('Introduce tu número del DNI');

//Si nuestro amig@ no pone un número de 8 dígitos válido, entrará en este bucle inquisitorio
while (dni == null || /\D/.test(dni) || dni == "" || dni.toString().length != 8) {
    dni = prompt("Entre un número VÁLIDO: ");
};

//Calculo resto y escribo la posición del array
let posicionLetra = parseInt(dni) % 23;
alert('Tu DNI es: ' + dni + (letras[posicionLetra]));