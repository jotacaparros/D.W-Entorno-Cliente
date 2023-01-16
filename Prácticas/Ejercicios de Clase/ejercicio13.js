/*
Implementa el código JavaScript necesario para que se añadan dos nuevos elementos 
a la lista cada vez que se pulsa sobre el botón. En el primero se deberán usar las 
funciones DOM para crear nuevos nodos y añadirlos a la lista existente y en el segundo 
se deberá utilizar innerHTML para conseguir el mismo efecto.
*/

let b = document.querySelector('input');
b.addEventListener('click', creaLis);

function creaLis(){
    let ul = document.querySelector('ul');
    let li1 = document.createElement('li');
    let li1tn = document.createTextNode('Rico, rico textico');

    li1.appendChild(li1tn);
    ul.appendChild(li1);

    ul.innerHTML += '<li> Rico, rico textico </li>';
}