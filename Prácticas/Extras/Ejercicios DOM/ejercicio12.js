window.addEventListener('load',inicio);

function inicio() {
    let a = document.querySelector('a');
    a.addEventListener('click', muestraTexto);
}

function muestraTexto(ev) {
    let span = document.getElementsByTagName('span')[0];
    span.removeAttribute('class');
    span.setAttribute('class', 'visible');

    let a = document.querySelector('a');
    //a.parentNode.removeChild(a);
    //a.outerHTML='';
    a.remove();
}