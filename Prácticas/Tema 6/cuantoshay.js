//Número de enlaces
let enlaces = document.querySelectorAll('a');
let numeroEnlaces = enlaces.length;
console.log("Número de enlaces: " + numeroEnlaces);

//Aquí me ha pasado una cosa curiosa y es que me pilla como etiqueta tipo enlace
//la propia etiqueta de script. Así que te he puesto el penúltimo sin contar el de javascript.
//Pero bueno sería restar en vez de 2, 1
let direccionPenultimo = document.getElementsByTagName("a")[numeroEnlaces - 2].href;
console.log("Dirección a la que enlaza el penúltimo enlace: " + direccionPenultimo);

//Número de enlaces que apuntan a http://prueba
let enlacesPrueba = document.querySelectorAll('a[href="http://prueba"]');
let numeroEnlacesPrueba = enlacesPrueba.length;
console.log("Número de enlaces que apuntan a http://prueba: " + numeroEnlacesPrueba);

//Número de enlaces en el tercer párrafo
let enlacesTercerParrafo = document.querySelectorAll('p:nth-of-type(3) > a');
let numeroEnlacesTercerParrafo = enlacesTercerParrafo.length;
console.log("Número de enlaces del tercer párrafo: " + numeroEnlacesTercerParrafo);