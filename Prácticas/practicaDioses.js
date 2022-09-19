var dios="Hercules"

function invocarDioses (){
    let dios="Zeus"
    document.write(dios)    // Imprime Zeus
}

// Mostramos el dios más poderoso en la Tierra
document.write(dios)        // Imprime Hercules
document.write("<br>");
// Invocamos a los dioses del Olimpo
invocarDioses();
document.write("<br>");
// ¿Y ahora? ¿Quien es el dios más poderoso?
document.write(dios)        // Imprime Hercules

/*Si en la funcíon invocarDioses no declaras la variable y simplemente lo asignas,
 al final Zeus queda guardado */
 function invocarDioses2 (){
    var dios="Zeus"
    document.write(dios) 
    if(true){
        let dios = "Hercules"
        document.write(dios)
        document.write("<br>");
    }   // Imprime Zeus
    document.write(dios);
}
invocarDioses2();
document.write(dios) //imprime Zeus