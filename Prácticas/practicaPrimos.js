

var divisores;

//Primero un rico bucle que recorra del 1 al 100
for(let i = 0; i < 101; i++){

//Como un promo solo tendrá 2 divisores, nos metemos en otro rico bucle que vaya del 1 
//al número que estamos analizando si es primo.
    for( j = 1; j <= i; j++){      

//Contamos cuantos divisores con resto 0 tiene el número      
        if( i % j == 0){
            divisores++;
        }

 //Si tiene solo 2 es que es primo   
    }if(divisores == 2){
        document.write(i + ' ');
    }
    
//Reseteamos la variable para las siguientes vueltas del bucle
    divisores = 0;

}