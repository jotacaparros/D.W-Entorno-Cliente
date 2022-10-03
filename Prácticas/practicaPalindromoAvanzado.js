let palindromo = prompt('Introduce una palabre o frase y te digo si es palindromo');

let palindromoMinusculo = palindromo.toLowerCase();
var contadorVerdadero = 0;   
let palindromoMinSinEspacios = palindromoMinusculo.replace(/\s/g,'');
arrayPalindromo = new Array();

for(let i = 0; i <= palindromoMinSinEspacios.length; i++){

    arrayPalindromo.push(palindromoMinSinEspacios.charAt(i));
    
    if(palindromoMinSinEspacios.charAt(i) === palindromoMinSinEspacios.charAt(palindromoMinSinEspacios.length - i - 1)){
        contadorVerdadero++;
    }
}
document.write()
if ( arrayPalindromo.join() == arrayPalindromo.reverse()){
    document.write("pLS DONT STOP DE MUSIC");
}

// if(contadorVerdadero == palindromoMinSinEspacios.length){
//     document.write("Es un palíndromo");
// }else{
//     document.write("No es un palíndromo");
// }


