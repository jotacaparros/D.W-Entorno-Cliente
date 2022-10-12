let palindromo = prompt('Introduce una palabre o frase y te digo si es palíndromo');

//Transformo la frase del usuario para que no tenga comas ni espacios
let palindromoMinusculo = palindromo.toLowerCase();
let palindromoMinSinEspacios = palindromoMinusculo.replace(/\s/g,''); 
let palindromoMinSinEspaciosNiComas = palindromoMinSinEspacios.replace(/,/g, "");

arrayPalindromo = new Array();
//Con un bucle voy metiendo los caracteres
for(let i = 0; i <= palindromoMinSinEspaciosNiComas.length; i++){
    arrayPalindromo.push(palindromoMinSinEspaciosNiComas.charAt(i));
}
//Declaro dos variables para pasar a String el array. Sin comas y con una variable al revés. 
let arrayDelante = arrayPalindromo.join('');
let arrayReves = arrayPalindromo.reverse().join('');

//Compruebo que sean iguales 
if (arrayDelante === arrayReves){
    document.write("¡Vaya palíndromo!");
}else{
    document.write("No hay palíndromo que valga");
}


