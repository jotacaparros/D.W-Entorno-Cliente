//El orden del código es el mismo que el de los requisitos
//Capturo el input nombre y el formulario
let nombre = document.getElementById('nombre');
let formulario = document.getElementsByTagName('form');

//Primer requisito poner un placeholder. Hecho!
nombre.placeholder = "Nombre de usuario";

//Segundo requisito la sugerencia en el span.
//Escucho el evento click en el input
nombre.addEventListener('click', SugerenciaNombre);

//Capturo el span
var span = document.getElementById('ayudaNombre');

//Y la funcion comprueba y añade el texto 
function SugerenciaNombre () {
    if(!span || span.textContent !== "Introduce un nombre de usuario"){
        span.textContent="Introduce un nombre de usuario";
    }
}

//Tercer requisito si pinchan fuera. Hecho!
//Si al hacer click no es en el input nombre y el span tiene la sugerencia me la quita
document.addEventListener("click", function(event) {
    if (event.target.id != "nombre") {
        if(span.textContent == "Introduce un nombre de usuario"){
            span.textContent = "";
        }
    }
  });

  //Cuarto requisito checkbox y radiobuttons. Hecho!
  //Recojo todo lo que me piden
  const subscribeCheckbox = document.getElementById("confirmacion");
  let newsletterOptions = document.querySelector('input[name="suscripcion"]:checked');
  const radioButtons = document.querySelectorAll('input[name="suscripcion"]');

//Hago un for para que me detecte cuando se cambia los radio buttons
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
      newsletterOptions = this;
      MostrarEstadoNewsletter();
    });
  }

  //Escucho tambien si cambian el estado del checkbox
subscribeCheckbox.addEventListener("change", MostrarEstadoNewsletter);

//Y en esta funcion hago la magia. Comprobando el checkbox y segun el valor de los radiobuttons
//imprimiendo por consola lo que toque.
function MostrarEstadoNewsletter(){
   if (subscribeCheckbox.checked){
    console.log("Checkbox marcado.");
   }else{
    console.log("Checkbox desmarcado.");
   }  
  switch(newsletterOptions.value){
    case "newsPromo":
        console.log("Elegido: \"Suscribirme a la newsletter y a las promociones\"" );
    break;

    case "news":
        console.log("Elegido: \"Suscribirme sólo a la newsletter\"" );
    break;

    case "noNewsPromo":
        console.log("Elegido: \"No deseo suscribirme\"" );
    break;
  }         
  };

//Validar formulario.Hecho!
//Funcion para comprobar que has puesto bien el nombre    
    function validarNombre(name) {
        if (name.length < 3 || name.length > 20) {
          return false;
        }
        return true;
      }
//Que has puesto bien la contraseña      
      function validarPassword(password) {
        if (password.length < 3) {
          return false;
        }
        return true;
      }
//Capturo el boton de enviar
    var submitBtn = document.querySelectorAll('input[type="submit"]')[0];
//Y al hacer click invoco a la función que lo valida
    submitBtn.addEventListener("click", (evento)=>{
        validateForm(evento);
    });

//Y aqui valido que hay puesto bien todo y le pongo mensajitos para que sepa
//si ha hecho algo mal o si todo ha ido fetén
    function validateForm(evento) {
        var nombreParaValidar = nombre.value;
        var password = document.getElementById("clave").value;
        if (!validarNombre(nombreParaValidar)) {
          alert("El nombre debe tener entre 3 y 20 caracteres");
          evento.preventDefault();
        } else if (!validarPassword(password)) {
          alert("La contraseña debe tener al menos 3 caracteres");
          evento.preventDefault();
        } else {
            alert("Formulario enviado");
            formulario.submit();
        }
      }