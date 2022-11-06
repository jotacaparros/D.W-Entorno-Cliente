let tablas = prompt('¿Cuantas tablas quieres ver?');
let numeroTablas = parseInt(tablas);

//Controlamos que no se pasen de listos y no nos metan un número
while(isNaN(numeroTablas)){
    tablas = prompt('Error: Introduce solo números');
    numeroTablas = parseInt(tablas);
}

//Primer bucle para saber el número de la tabla
for(let i = 1; i <= numeroTablas; i++){
    //Le he metido un estilo sencillo pero es un clásico que nunca falla. Elegante y sofisticado.
    document.write('<h1> Tabla del ' + i + '</h1> <ul style="list-style: none;">');

    //Segundo bucle para que vaya multiplicando del 1 al 10
    for(let j = 1; j <= 10; j++){
        document.write('<li>' + i + ' * ' + j + ' = ' +  i*j   +'</li>')
    }

    //Cerramos la etiqueta de lista desordenada
    document.write('</ul>'); 
}