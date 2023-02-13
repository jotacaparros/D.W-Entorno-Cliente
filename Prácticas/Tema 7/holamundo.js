
//Codigo facilito

//Creamos una nueva instancia del objeto XMLHttpRequest, que es el encargado de realizar la solicitud AJAX
let xhr = new XMLHttpRequest();

// Con el método open() especifico el tipo de solicitud (en este caso "GET"), 
//la URL del archivo  y por último parámetro como "true" para que la solicitud sea asíncrona tope de power 
xhr.open("GET", "holamundo.txt", true);

// Asigno una función al evento onreadystatechange, que se activará cada vez que cambie el estado de la solicitud
xhr.onreadystatechange = function() {
    //verifico que todo esta guchi
    if (xhr.readyState === 4 && xhr.status === 200) {
        //escribimo el contenido de la respuesta en la página, que es accesible a través de la propiedad responseText del objeto XMLHttpRequest
        document.write(xhr.responseText);
    }
};

//y mandamos
xhr.send();

