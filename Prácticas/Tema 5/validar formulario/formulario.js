 // Obtener el formulario
 var formulario = document.getElementById("formulario");

 // Añadir un escuchador de eventos al formulario
 formulario.addEventListener("submit", validarFormulario);

 function validarFormulario(event) {
   // Inicializar variables de error
   var nombreError = document.getElementById("nombreError");
   var edadError = document.getElementById("edadError");
   var emailError = document.getElementById("emailError");

   // Obtener los valores de los campos del formulario
   var nombre = document.getElementById("nombre").value;
   var edad = document.getElementById("edad").value;
   var email = document.getElementById("email").value;

   // Validar que el nombre y el correo electrónico no estén vacíos
   if (nombre === "") {
     nombreError.textContent = "El nombre no puede estar vacío.";
     nombreError.classList.add("error");
     event.preventDefault();
   } else {
     nombreError.textContent = "";
     nombreError.classList.remove("error");
   }
   if (email === "") {
     emailError.textContent = "El correo electrónico no puede estar vacío.";
     emailError.classList.add("error");
     event.preventDefault();
   } else {
     emailError.textContent = "";
     emailError.classList.remove("error");
   }

   // Validar que el correo electrónico contenga los símbolos @ y .
   if (!email.includes("@") || !email.includes(".")) {
     emailError.classList.add("error");
     emailError.textContent = "El correo electrónico debe contener los símbolos @ y .";
     event.preventDefault();
   }

   // Validar que exista al menos una letra antes y después del símbolo @
   var arrobaIndex = email.indexOf("@");
   if (arrobaIndex === 0 || arrobaIndex === email.length - 1) {
     emailError.classList.add("error");
     emailError.textContent = "El correo electrónico debe contener al menos una letra antes y después del símbolo @.";
     event.preventDefault();
   }

   // Validar que existan al menos dos letras después del punto
   var puntoIndex = email.lastIndexOf(".");
   if (puntoIndex < arrobaIndex || puntoIndex >= email.length - 2) {
     
    emailError.textContent = "El correo electrónico debe contener al menos dos letras después del punto.";
     event.preventDefault();
   }
   // Validar que la edad no esté vacía, sea numérica y mayor que cero
if (edad === "") {
    edadError.textContent = "La edad no puede estar vacía.";
    edadError.classList.add("error");
    event.preventDefault();
    } else if (isNaN(edad)) {
    edadError.textContent = "La edad debe ser numérica.";
    edadError.classList.add("error");
    event.preventDefault();
    } else if (edad <= 0) {
    edadError.textContent = "La edad debe ser mayor que cero.";
    edadError.classList.add("error");
    event.preventDefault();
    } else {
    edadError.textContent = "";
    }
    
      // Quitar el color de advertencia cuando el campo toma el foco
      document.getElementById("nombre").addEventListener("focus", function() {
        nombreError.classList.remove("error");
      });
      document.getElementById("edad").addEventListener("focus", function() {
        edadError.classList.remove("error");
      });
      document.getElementById("email").addEventListener("focus", function() {
        emailError.classList.remove("error");
      });
    }
