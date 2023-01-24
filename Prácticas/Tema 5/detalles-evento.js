
//Creamos contador para saber los clicks que llevamos
let clickCount = 0;

//Creamos una función anonima en la cual contamos clicks
//e imprimimos por consola toda la info que nos piden.
const showInfo = (event, buttonName) => {
  clickCount++;
  console.log("Botón del ratón pulsado: " + buttonName);
  console.log("Coordenadas (X, Y) del navegador: " + event.clientX + ", " + event.clientY);
  console.log("Coordenadas (X, Y) del documento: " + event.pageX + ", " + event.pageY);
  console.log("Coordenadas (X, Y) de la pantalla: " + event.screenX + ", " + event.screenY);
  console.log("Nº de clicks realizados: " + clickCount);
};

//Aqui recogemos el evento del click izquierdo y llamos a nuestra funcion core de antes
document.addEventListener("click", (event) => {
  showInfo(event, "izquierda");
});
//Repetimos para el boton derecho del raton
document.addEventListener("contextmenu", (event) => {
  showInfo(event, "derecha");
});
//Y lo mismo para la rueda :D
document.addEventListener("mousedown", (event) => {   
    if (event.button === 1) {
        showInfo(event, "rueda ratón");
    }
});
