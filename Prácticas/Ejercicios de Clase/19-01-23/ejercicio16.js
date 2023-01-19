let imagen = document.querySelector('img');

imagen.addEventListener('mouseenter', cambiarImagen);
imagen.addEventListener('mouseleave', cambiarImagen2);

function cambiarImagen(){

    let nuevoSrc = "enfadado.png";
    imagen.src = nuevoSrc;
}

function cambiarImagen2(){
    let nuevoSrc = "pensativo.png";
    imagen.src = nuevoSrc;
}