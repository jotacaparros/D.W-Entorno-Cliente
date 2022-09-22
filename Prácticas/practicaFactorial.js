let numero;
let resultado;
var cadena = '';

function factorial(n){
    // for(let i = 0; i < n; i++){
    //  let factorial = n - i;
    //  numero = n;
    //  resultado = numero * factorial;
    //  document.write(numero + ' * ' + factorial + ' = ' + resultado + '<br>')
    //  cadena = factorial + ' * ';
    //     if(factorial != 0){
    //         cadena = cadena + ' ' + cadena;
    //     }
    //     document.write(cadena);
    // }
    // document.write(cadena);
    let total = 1; 
	for (let i = 0; i<=n; i++) {
		total = total * i; 
       if(i != n - 1 || i != n)
        cadena += (n - i) + ' *';
       else
        cadena += (n - i) + ' = ';

	}
	// document.write(total);  
    document.write(cadena); 
     

}

factorial(5);