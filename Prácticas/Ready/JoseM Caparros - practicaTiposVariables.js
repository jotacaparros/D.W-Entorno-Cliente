// Modifica el codigo para que se muestre el contenido y tipo de datos de cada variable por la consola
var v1=" pollitos en la granja";
var v2=23;
var v3=true;
var v4=0xa3b;

console.log("Contenido de v1: " + v1);
console.log("Tipo de datos de v1: " + typeof(v1));
console.log("Contenido de v2: " + v2);
console.log("Tipo de datos de v2: " + typeof(v2));
console.log("Contenido de v3: " + v3);
console.log("Tipo de datos de v3: " + typeof(v3));
console.log("Contenido de v4: " + v4);
console.log("Tipo de datos de v4: " + typeof(v4));

v2=v2+v3;
console.log("Nuevo contenido de v2: " + v2);
console.log("Ahora el tipo de datos de v2 es: " + typeof(v2));

v3=v3+v4;
console.log("Nuevo contenido de v3: " + v3);
console.log("Ahora el tipo de datos de v3 es: " + typeof(v3));

v4=v4+v1;
console.log("Nuevo contenido de v4: "  + v4);
console.log("Ahora el tipo de datos de v4 es: " + typeof(v4));