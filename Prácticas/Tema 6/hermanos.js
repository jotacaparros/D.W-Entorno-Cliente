//Este mucho más facilito que el de antes

// Pillamos el div con id="revisar"
var revisar = document.querySelector("#revisar");

// Ahora todos los elementos dentro del div con id="revisar"
var hermanos = revisar.querySelectorAll("*");

// Seleccionamos la lista con id="contenedor"
var contenedor = document.querySelector("#contenedor");

// Iteramos sobre los hermanos
for (var i = 0; i < hermanos.length; i++) {
  // Creamos un nuevo elemento li
  var li = document.createElement("li");

  // Establecemos el contenido del elemento li como el nombre de la etiqueta del hermano
  li.textContent = hermanos[i].tagName;

  // Agregamos el elemento li a la lista
  contenedor.appendChild(li);
}


