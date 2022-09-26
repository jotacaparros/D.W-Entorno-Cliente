var cadena = '';

function factorial(n){

    let total; 
	for (let i = 0; i<=n; i++) {
        
        total = n * (n * i);    //Resultado 
      
        if(i != n - 1 && i != n){ //Condiciones para concatenar y ordenar la operación
            cadena += (n - i) + ' * ';
        } else if(i != n){
            cadena += (n - i) + ' = ';
        } else if (i == n){
            cadena += total;
        }
	}  
    document.write(cadena); 
}

factorial(5);