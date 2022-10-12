
let dados = prompt('¿Cuanto dados quieres lanzar? Tiene que ser mínimmo 2 máximo 5.');
dadosNum = parseInt(dados);

 //Compruebo si es NaN para ver si me ha parseado a int correctamente
if(isNaN(dadosNum)){
    document.write('Macho pon números, no me lo escribas con letras.');
}

//Compruebo de que me ha dado el número de dados correcto
if(dadosNum < 2 || dadosNum > 5){
    document.write("¿De que vas tio? Te he dicho entre 2 y 5 dados.");
}else{
    //Le lanzo los dados que me pide
    for(let i = 0; i < dadosNum; i++){
        document.write(getRandomInt(1,7) + '<br>');
    }
}

//Esta función coge el min pero no el max.
function getRandomInt(min, max) {
    min = Math.ceil(min); // Ceil para redondear el entero mayor o igual más próximo.
    max = Math.floor(max);// Floor para redondear el máximo entero menor o igual a un número.
    return Math.floor(Math.random() * (max - min) + min);
}

