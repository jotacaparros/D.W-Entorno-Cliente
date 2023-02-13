// Variables para guardar los selectores de los desplegables de provincias y municipios
var selectProvincias = document.getElementById("provincia");
var selectMunicipios = document.getElementById("municipio");

// Función para cargar la lista de provincias desde el servidor
function cargarProvincias() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "provinciasJSON.php", true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var provincias = JSON.parse(xhr.responseText);
      provincias.forEach(function(provincia) {
        var option = document.createElement("option");
        option.value = provincia.codigo;
        option.text = provincia.nombre;
        selectProvincias.add(option);
      });
    } else {
      console.error("Error al cargar las provincias");
    }
  };
  xhr.send();
}

// Función para cargar la lista de municipios desde el servidor
function cargarMunicipios(codigoProvincia) {
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "municipiosJSON.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let datos = ("provincia=" + codigoProvincia);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var municipios = JSON.parse(xhr.responseText);
      municipios.forEach(function(municipio) {
        var option = document.createElement("option");
        option.value = municipio.codigo;
        option.text = municipio.nombre;
        selectMunicipios.add(option);
        
      });
    } else {
      console.error("Error al cargar los municipios");
    }
  };
    xhr.send(datos);
}

// Evento que se ejecuta cuando se selecciona una provincia
selectProvincias.addEventListener("change", function() {
  
  //Para darle un poco de chicha a los comentarios de este código me he pasado 2 horas como un tonto 
  //pensando que el método post no funciona porque siempre me aparecia lo mismos municipios y era porque se
  //me iban guardando en el select, hasta que me di cuenta. Se me ha quedado cara de tonto. Solucinado con limpiar la lista
  //al cambiar de provincia
    selectMunicipios.options.length = 0;
    var codigoProvincia = selectProvincias.value;
  cargarMunicipios(codigoProvincia);
  
});


 

// Cargamos la lista de provincias cuando se carga la página
window.onload = cargarProvincias;
