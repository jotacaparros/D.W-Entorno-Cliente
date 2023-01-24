let expresion = /\d{2}\/\d{2}\/\d{4}/;
let fecha = "Nací el 04/05/1977 en Alicante";
let resultado = expresion.test(fecha);
console.log(resultado);

let expresion2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
let email = "example@gmail.com";
let resultado2 = expresion2.test(email);
console.log(resultado);