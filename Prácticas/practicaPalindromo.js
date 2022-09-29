let palindromo = promt('Introduce una palabre o frase y te digo si es palindromo');
let palindromoMinusculo = palindromo.ToLowerCase();

let palindromoMinSinEspacios = palindromoMinusculo.replace(/\s/g,'');
for(let i = 0; i <= palindromoMinSinEspacios.length; i++){
    if(palindromoMinSinEspacios.charAt(i) === palindromoMinSinEspacios.charAt(palindromoMinSinEspacios.length - i - 1)){

    }
}


