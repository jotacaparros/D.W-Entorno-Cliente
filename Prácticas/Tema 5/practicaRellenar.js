let nombre = document.getElementById('nombre');
let formulario = document.getElementsByTagName('form');

nombre.placeholder = "Nombre de usuario";





nombre.addEventListener('click', ()=>{
    let span = document.getElementById('ayudaNombre');
    span.textContent="Introduce un nombre de usuario";
});

formulario.addEventListener('click',()=>{
    if(this.id != 'nombre'){
        span.textContent=" ";
    }
});