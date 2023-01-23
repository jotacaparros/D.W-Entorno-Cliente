let nombre = document.getElementById('nombre');
let formulario = document.getElementsByTagName('form');

nombre.placeholder = "Nombre de usuario";





nombre.addEventListener('click', SugerenciaNombre);

var span = document.getElementById('ayudaNombre');

function SugerenciaNombre () {
    if(!span || span.textContent !== "Introduce un nombre de usuario"){
        span.textContent="Introduce un nombre de usuario";
    }
}

document.addEventListener("click", function(event) {
    if (event.target.id != "nombre") {
        if(span.textContent == "Introduce un nombre de usuario"){
            span.textContent = "";
        }
    }
  });

  const subscribeCheckbox = document.getElementById("confirmacion");
  let newsletterOptions = document.querySelector('input[name="suscripcion"]:checked');
  const radioButtons = document.querySelectorAll('input[name="suscripcion"]');


  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
      newsletterOptions = this;
      MostrarEstadoNewsletter();
    });
  }

subscribeCheckbox.addEventListener("change", MostrarEstadoNewsletter);

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