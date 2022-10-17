/*Dada una serie de palabras, debe encontrar la palabra con la puntuación más alta.

Cada letra de una palabra puntúa según su posición en el alfabeto: a = 1, b = 2, c = 3 etc.

Debe devolver la palabra con la puntuación más alta como una cadena y su puntuación. El formato será: palabra (puntuación)

Si dos palabras obtienen la misma puntuación, devuelva la palabra que aparece antes en la cadena original.

Todas las letras serán minúsculas y todas las entradas serán válidas.

Ejemplos:

    highscore('aa b');      // 'aa (2)'
    highscore('b aa');      // 'b (2)'
    highscore('bb d');      // 'bb (4)'
    highscore('d bb');      // 'd (4)'
    highscore('aaa b');     // 'aaa (3)'*/


    var arrayLetras = new Array();
    let letraASCII = 97

    for (let j = 1; j < 26; j++){
        let caracter ="\"" + String.fromCharCode(letraASCII) + "\"";
        arrayLetras[caracter] = j;
        letraASCII++;     
    }

    function highscore(x){
    const  cadena = x.split(' ');
    let pA = cadena[0];
    let pB = cadena [1];
    let valorA = 0;
    let valorB = 0;

      for(let i = 0; i < pA.length; i++){
       valorA = arrayLetras["\"" + pA.charAt(i) + "\""] + valorA;
      }
   
      for(let i = 0; i < pB.length; i++){
        valorB = arrayLetras["\"" + pB.charAt(i) + "\""] + valorB;
       }
       document.write(valorA + '<br>');
       document.write(valorB + '<br>');

       if(valorA > valorB){
        document.write(pA + " es mayor que " + pB + ": " + valorA + " > " + valorB);
       }else if (valorA < valorB){
        document.write(pB + " es mayor que " + pA + ": " + valorB + " > " + valorA);
       }else{
        document.write(pA + " es igual que " + pB + ": " + valorA + " = " + valorB);
       }

    }

    highscore('aaa b');
    highscore('aaaa bbbbbb');
    highscore('jorge jose');
