
//Pillo cuadado
var recuadro1 = document.getElementById("recuadro1");
//Tu pulsal? Tu amalillo
recuadro1.addEventListener("mousedown", function(){
    this.style.backgroundColor = "yellow";
});
//Tu levanta? Tu lojo
recuadro1.addEventListener("mouseup", function(){
    this.style.backgroundColor = "red";
});