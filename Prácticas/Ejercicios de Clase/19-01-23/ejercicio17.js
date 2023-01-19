let anadir = document.getElementById('anadir');
let anidar = document.getElementById('anidar');
//Forma noob
// anadir.addEventListener('click', anadirElemento);
// anidar.addEventListener('click', anidarElemento);

//Forma pro
anadir.addEventListener('click', crearNodo);
anidar.addEventListener('click', crearNodo);
let contador = 0;

//Forma noob
// function anadirElemento(){
//     contador++; 
//     let nuevoDiv = document.createElement("div");
//     let nuevoContenido = document.createTextNode("Nodo creado " + contador);
//     nuevoDiv.appendChild(nuevoContenido);
//     //getElements me devuelve un array
//     document.getElementsByTagName("body")[0].appendChild(nuevoDiv);

// }
// function anidarElemento(){
//     contador++;
//     let nuevoDiv = document.createElement("div");
//     let nuevoContenido = document.createTextNode("Nodo creado " + contador);
//     nuevoDiv.appendChild(nuevoContenido);

//     document.getElementById('nodoRaiz').appendChild(nuevoDiv);
  
    
// }

//Forma pro
function crearNodo(){
    contador++;
    let donde, nodoTN;

    let nodo = document.createElement("div");
    if(this.id == 'anadir'){   
        donde = document.body;
        nodoTN= document.createTextNode("Nodo creado " + contador);      
        
    } else{
        donde = document.getElementById('nodoRaiz');
        nodoTN= document.createTextNode("Nodo anidado " + contador);
    }
    nodo.appendChild(nodoTN);
    donde.appendChild(nodo);
}