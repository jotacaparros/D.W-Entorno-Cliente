let expresion = /\d{2}\/\d{2}\/\d{4}/;
let fecha = "Nací el 04/05/1977 en Alicante";
let resultado = expresion.test(fecha);
console.log(resultado);

let expresion2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
let email = "example@gmail.com";
let resultado2 = expresion2.test(email);
console.log(resultado);

function escapeHTML(text) {
    return text.replace(/&/g, "&amp;")
               .replace(/"/g, "&quot;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;");
}

var inputText = "<p>This is some text that needs to be escaped.</p>";
var escapedText = escapeHTML(inputText);
console.log("Original: " + inputText);
console.log("Escaped: " + escapedText);


let nombre = "John Smith";
let nombreInvertido = nombre.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(nombreInvertido);

let html = "Alguien podría <b>joderte la vida</b> si <script>alert('sabemos donde vives')</script> le dejas <i>hacerlo</i>.";
let HTMLsinMalicia = html.replace(/<script[\s\S]*?<\/script>/g, "");
console.log(HTMLsinMalicia);
