
//Selecciono todas las celdas 
var celdas = document.querySelectorAll("td");
//Uso esta variable para ir alternando
var jugadorActual = "X";
//Y este es un array con todas las posibles combinaciones de victoria
var combinacionesGanadoras = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//Aquí intuyo que se podría hacer mejor, y hacer un bucle que compruebe que celdas están vacias, pero
// no tenia mucho tiempo y he dicho: "Na como sé cuantas casillas hay pongo un contador y listo".
//dicho y hecho he aquí la variable que refleja la poca resilencia y tiempo que tengo.
var casillasDisponibles = 8;


//Un bucle como comentaste en clase que vaya celda a celda
for(var i = 0; i < celdas.length; i++) {
    
    //El evento para cuando hagan click
        celdas[i].addEventListener("click", function() {
            
            //Compruebo que no esté seleccionada la casilla 
            if(this.textContent != "")
            {
                alert("Perdona colega pero esta casilla está ocupada.");
               
            }else {
             //Si no esta ocupada, según el jugador rellenamos la casilla   
                if(jugadorActual == "X"){
                    this.textContent = "X";
                    this.style.backgroundColor = "yellow";
                    jugadorActual = "O"
                }else{
                    this.style.backgroundColor = "blue";
                    this.textContent = "O";
                    jugadorActual = "X"
                }
                //Bajamos el contador
                casillasDisponibles--;
                //Y aquí lo que para mi ha sido lo más cabrón del ejercicio. Este es el bucle que va comprobando  los contenidos (innerHTML) de cada celda con la combinación actual. 
                //Si los contenidos de las tres celdas son iguales y no están vacíos, entonces se muestra quien ha ganado. 
                for (var i = 0; i < combinacionesGanadoras.length; i++) {
                    if (celdas[combinacionesGanadoras[i][0]].innerHTML === celdas[combinacionesGanadoras[i][1]].innerHTML &&
                        celdas[combinacionesGanadoras[i][1]].innerHTML === celdas[combinacionesGanadoras[i][2]].innerHTML && 
                        celdas[combinacionesGanadoras[i][0]].innerHTML !== "") 
                    {          
                        //Y en este alert también he perdido neuronas, porque no sabia por que al meterle el setTimeout la variable i que pensaba que le daba el scope
                        //pues no la detectaba ¿Por qué si es var ? Ni idea y bueno lo que he hecho es renombrar la i por variableCabrona en honor a la frustración que 
                        //me ha hecho pasar              
                        let variableCabrona = i;
                        setTimeout(()=>{alert("¡El jugador \"" + celdas[combinacionesGanadoras[variableCabrona][0]].innerHTML + "\" gana!");}, 500);

                        //En un momento de mi crisis existencial debido a que cada vez tenia menos tiempo, he pensado: "joder le estoy metiendo tronchos aquí de código que pueden ser funciones"
                        //pero he acabado tan fatigado que al final he dicho: "le pongo una sencillita para que sepa que no se me escapa el tema". Ojo a la pedazo de función que me he marcado.
                        //Sirve para resetar :D 
                        reseteo(1000);
                                                  
                    }
                }

                //Dspués de comprobar si ha ganado alguien, compruebo si se han acabado las casillas y si es así un alert con la triste noticia
                if(casillasDisponibles < 0){
                    
                    setTimeout(()=>{
                        alert("Se acabó el juego. No ha ganado nadie :(");
                    }, 1000);
                    reseteo(1000);
                }      
            }
        });     
   

}

//Master en modularizar el código
function reseteo(num){

    setTimeout(()=>location.reload(), num);
}

//Me ha quedado guarro pero así me aseguro de que sepas que esto no la hecho la IA :p


