let numero;
let resultado;

function factorial(n){
    for(let i = 1; i < n; i++){
     let factorial = n - i;  
     numero = n;
     resultado = numero * factorial;
     document.write(resultado + '<br>');    
    }

}

factorial(5);