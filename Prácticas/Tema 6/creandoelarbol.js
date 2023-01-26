//He de admitir que este ejercicio se me ha atragantado un poco 
//Y es posible que no sea el codigo más elegante. Cuando lleguemos a la 
//parte crítica te explico.

//Pillamos el contenedor donde vamos a meter el listado
let ulEnElQueMetoCosas = document.getElementById("contenedor");

//Creo una función que vaya recorriendo el DOM nodo a nodo
function recorrerDom(padre){
  //Según el nodo en el que esté pillo el número de hijos que tiene
  let numeroHijos = padre.childElementCount;

  //y también los metemos en un array
  let hijos = padre.children;

  //Arrancamos un bucle para que me recorra los hijos uno a uno
  for(let i = 0; i < numeroHijos; i++){
    
    //Creamos la etiqueta del listado
    let nuevoLi = document.createElement("li");
    //y una variable para guardar que etiqueta tiene el nodo
    let textoQueVaDentro = hijos[i].tagName;

    //Pongo un control para que el ul donde meto la vaina no cuente
    if(textoQueVaDentro != "ul" && hijos[i].id != "contenedor"){
      
      //Y aquí es cuando me ha dado el derrame cerebral 
      //este if lo he puesto para que si en el nodo que estoy, hay texto
      //lo pueda añadir junto con el nombre de la etiqueta al listado. PERO PARA MI SORPRESA
      //el textContent te coge, no solo si tienes un hijo nodo de texto, sino tambien los hijos que tengan hijos
      //con nodos de texto. Con lo cual en la etiqueta HEAD o en la de BODY se ha empezado a repetir todo el contenido textual 
      //que tenia sus nodos hijos. Al final he podido con la adversidad pero desconozco si hay algo más elegante que el textContent para 
      //comprobar los nodos con texto.
      if (hijos[i].textContent !== "" ){
       
        //Lo que he hecho al final es recoger el texto 
        var textoQueIncluyeLaEtiqueta = hijos[i].textContent;
        //Y si el nodo en el que estoy no tiene mas de un hijo (el nodo de texto)
        if (hijos[i].childElementCount === 0) {

          //le meto el texto que tendría ese hijo y asi evito que vaya repitiendo, una y otra vez con los nodos padres 
          var nuevoTextoParaLi = document.createTextNode(textoQueVaDentro + " : " + textoQueIncluyeLaEtiqueta);
          //Si tiene más hijos, pues solo añado el nombre de la etiqueta al nodo que vamos a apendizar
        }else{ var nuevoTextoParaLi = document.createTextNode(textoQueVaDentro);}

      }else{
        //Si es un feliz nodo soltero que no tenia hijos que dan problemas de texto lo añado sin problemas con la condición control principal
        var nuevoTextoParaLi = document.createTextNode(textoQueVaDentro);
      }

    //Añado el bloque de texto a la nueva etiqueta del listado
      nuevoLi.appendChild(nuevoTextoParaLi);
     //Y esta ultima a la ul que pides 
      ulEnElQueMetoCosas.appendChild(nuevoLi);
      //e invoco a la función para que vaya bajando de nodos como en la peli de origen
      recorrerDom(hijos[i]);
    }
  }
}

//y finalmente activo la funcion desde la etiqueta html para que comience la fiesta del helado
recorrerDom(document.documentElement);


