
var array15 = [31,99,34,12,19,11,63,84,29,41,93,40,73,85,13];
var array50 = [95,100,26,36,22,74,58,34,41,91,71,13,56,14,16,31,84,47,8,28,51,7,61,
               46,11,9,17,87,80,35,23,81,1,6,92,25,43,37,3,98,67,72,77,57,96,10,99,54,4,44];
var array100 = [20,194,180,87,158,117,102,155,142,127,27,171,141,187,190,82,16,118,30,159,28,173,105,39,
                125,2,200,13,3,196,138,81,151,44,49,5,166,17,103,165,16,34,163,43,176,79,157,197,130,14,
                89,167,72,35,193,68,174,53,168,76,186,23,131,112,61,9,88,185,64,51,26,160,114,48,29,107,
                96,191,161,11,134,47,188,140,84,71,50,129,156,91,199,182,67,178,85,59,104,19,15,4];


var arrayOrdenado15 = ordenadorBurbujero(array15);
var arrayOrdenado50 = ordenadorBurbujero(array50);
var arrayOrdenado100 = ordenadorBurbujero(array100);

document.write(arrayOrdenado15 + "<br>");
document.write(arrayOrdenado50 + "<br>");
document.write(arrayOrdenado100 + "<br>");

//Veamos la mágia de este ordenador burbujero
function ordenadorBurbujero(array) {

//Me creo una variable control para seguir los cambios que haremos en el array 
    let cambiar = true;

//Hacemos un do/while que se ejecutará hasta que nuestra variable cambiar sea falsa
    do {

        //Lo dejamos en falso para salir del bucle si en nuestra iteración no hemos cambiado nada
        cambiar = false;

        //Bucle for para comprobar y cambiar el orden
        for (let j = 0; j < array.length; j++) {
            
            //Si la posicion actual es mayor que la posición siguiente
            if (array[j] > array[j + 1]) {
                
                //Guardo el valor para meterlo en la siguiente posicion
                let valorMayor = array[j];

                //Hacemos el cambio
                array[j] = array[j + 1];
                array[j + 1] = valorMayor;

                //Y como hemos hecho cambios le metemos el true para dar otra vuelta
                cambiar = true;
            }
        }
    } while (cambiar);
    return array;
}