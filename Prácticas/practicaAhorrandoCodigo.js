

/* En la empresa donde nos han contratado nos exigen incrementar la productividad, para lo que debemos ser rápidos codificando. 
Eso exige escribir el menor número de líneas de código posible. Nos han pedido que mostremos en el documento el contenido de 
un array de 30 elementos que contiene números aleatorios entre 0 y 9. Debemos mostrarlo ordenado de forma inversa, cada número 
en una línea del documento. ¿Cómo lo harías con el menor número de líneas de código posible?

Nota: los comentarios no se cuentan como línea de código a estos efectos. Debes comentar el código para mantener las buenas prácticas…*/

//Declaro un array
let numerosAleatorios = [];

//Lo lleno de numeritos
for(let i = 0; i < 30; i++){
    numerosAleatorios.push( Math.floor(Math.random() * (10 - 0) + 0));

    //Los escupo para que se vea el orden
    document.write(numerosAleatorios[i] + '<br>');
}

//Le doy la vuelta
numerosAleatorios.reverse();
document.write('<br>');

//Y los vuelvo a escupir
numerosAleatorios.forEach((element)=>{ document.write(element + '<br>')});