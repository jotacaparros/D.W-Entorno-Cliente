let f = document.querySelector('form');
f.addEventListener('submit', ponNombre);

function ponNombre(ev){
    ev.preventDefault();
    let n = document.querySelector('#nombre');
    let a = document.querySelectorAll('input')[1];
    let m = 'Hola, ' + n.value + ' ' + a.value + ', Dios te ama';

    let p = document.getElementById('saludo');

    if(p.hasChildNodes())
        p.childNodes[0].remove();

    let pTN = document.createTextNode(m);

    p.appendChild(pTN);
}