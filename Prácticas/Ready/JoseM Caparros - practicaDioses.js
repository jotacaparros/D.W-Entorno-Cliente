var dios="Hercules" //Cuando hacemos declaración var el alcance es global

function invocarDioses(){
  
    var dios="Zeus" /*Si declaras con var dentro de una función esta tiene un alcance
    local por lo tanto al escribir dios despues de usar la fución el valor será "Hercules"
    pero dentro de esta será "Zeus"*/
    document.write(dios + '<br>')
    
    if(true){
        var dios="Dionisio" /*Si añdieramos un if y volvemos a declarar dios con var, la variable
        de la función sería la última declarada por eso si imprimimos fuera del if otra vez el valor de 
        dios te dará Dionisio  */
        document.write(dios + '<br>')
    }
   document.write(dios + '<br>')
}

// El resultado sería el siguiente: 
document.write( dios + '<br>') //"Hercules"
invocarDioses();// "Zeus" <br> "Dionisio" <br> "Dionisio" 
document.write(dios + '<br>') // "Hercules" 

/* Por último si en vez de usar var utilizáramos para declarar let,
las variables respetarían su valor en el bloque de codigo delimitdo por {}*/

//Por lo tanto, el resultado en ese caso sería el siguiente: 
document.write( dios + '<br>') //"Hercules"
invocarDioses();// "Zeus" <br> "Dionisio" <br> "Zeus" 
document.write(dios + '<br>') // "Hercules" 