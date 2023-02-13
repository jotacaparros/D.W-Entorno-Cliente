
// Variables globales
var elementoSeleccionado = 0;
var cache = {};

// Crear elemento <div> para mostrar sugerencias
var sugerenciasDiv = document.createElement("div");
sugerenciasDiv.setAttribute("id", "sugerencias");
document.body.appendChild(sugerenciasDiv);

// Posicionar cursor en el cuadro de texto
document.getElementById("municipio").focus();

// Evento de teclado en el cuadro de texto
document.getElementById("municipio").addEventListener("keyup", autocompletar);

// Función para obtener sugerencias del servidor
function obtenerSugerencias(texto) {
  if (cache[texto]) {
    return cache[texto];
  } else {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "autocompletaMunicipios.php", false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("municipio=" + texto);

    if (xhr.status == 200) {
      var sugerencias = JSON.parse(xhr.responseText);
      cache[texto] = sugerencias;
      return sugerencias;
    }
  }
}

// Función para mostrar sugerencias
Array.prototype.toUL = function() {
  var lista = document.createElement("ul");
  for (var i = 0; i < this.length; i++) {
    var elemento = document.createElement("li");
    elemento.innerHTML = this[i];
    lista.appendChild(elemento);
  }
  return lista;
};

// Función de autocompletar
function autocompletar() {
  var texto = document.getElementById("municipio").value;
  var sugerencias = obtenerSugerencias(texto);

  if (sugerencias.length > 0) {
    var lista = sugerencias.toUL();
    sugerenciasDiv.innerHTML = "";
    sugerenciasDiv.appendChild(lista);
    sugerenciasDiv.style.display = "block";

    // Flechas del teclado
    if (event.keyCode == 40) {
      if (elementoSeleccionado + 1 < sugerencias.length) {
        elementoSeleccionado++;
      }
    } else if (event.keyCode == 38) {
      if (elementoSeleccionado > 0) {
        elementoSeleccionado--;
      }
    } else if (event.keyCode == 13) {
      document.getElementById("municipio").value = sugerencias[elementoSeleccionado];
      sugerenciasDiv.style.display = "none";
    }

    // Cambiar el color del elemento seleccionado
    for (var i = 0; i < lista.children.length; i++) {
      if (i == elementoSeleccionado) {
        lista.children[i].style.backgroundColor = "lightgray";
      } else {
        lista.children[i].style.backgroundColor = "white";
      }
    }
  } else {
    sugerenciasDiv.innerHTML = "No hay sugerencias para el texto introducido";
    sugerenciasDiv.style.display = "block";
  }
}