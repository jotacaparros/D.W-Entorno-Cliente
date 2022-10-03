
let palindromo = prompt('Introduce una palabre o frase y te digo si es palindromo');
let palindromoMinusculo = palindromo.toLowerCase();
var contadorVerdadero = 0;   
let palindromoMinSinEspacios = palindromoMinusculo.replace(/\s/g,'');

for(let i = 1; i <= palindromoMinSinEspacios.length; i++){

    if(palindromoMinSinEspacios.charAt(i) === palindromoMinSinEspacios.charAt(palindromoMinSinEspacios.length - i - 1)){
        contadorVerdadero++;
    }
}

if(contadorVerdadero == palindromoMinSinEspacios.length){
    document.write("Es un palíndromo");
}else{
    document.write("No es un palíndromo");
}


