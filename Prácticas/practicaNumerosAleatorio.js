cienNumeros = new Array();
for (let i = 0; i < 100; i++){
    min = Math.ceil(1);
    max = Math.floor(1000);
    cienNumeros.push(Math.floor(Math.random() * (max - min + 1) + min)); 
}

document.write('Último número del array: ' + cienNumeros[99] + '<br>');
document.write('Penúltimo número del array: ' + cienNumeros[98] + '<br>');
document.write('Tamaño del array: ' + cienNumeros.length);

