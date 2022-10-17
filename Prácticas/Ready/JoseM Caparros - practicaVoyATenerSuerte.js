
// direccion será la variable donde guardo un numero para ligar a cada web.
//control para controlar las condiciones
//internet para el objeto window
var direccion;
var control = true;
var internet;

function redireccionar(){  

    //Pillamos número aleatorio y lo guardamos en direccion
    direccion = paginaRandom();

    //Pasamo el control para abrir la ventana por primera vez
    if(control==true){
        abrirPagina(direccion);

    //Capamos el control para que no abra más ventanas    
        control = false;      
    }else {
        
        //Y si sigue abierta redireccionamos
        direccion = paginaRandom();
        cambioPagina(direccion);

        //Si ha cerrado la ventana a mano la vuelve a abrir
        if(internet.closed = true){
            abrirPagina(direccion);
        }       
    }
}
//Esta funcion me da un numero aleatorio entre el 0 y el 2
function paginaRandom() {
    return Math.floor(Math.random() * 3);
}
//Esta para redireccionar la página una vez abierta
function cambioPagina(x){  
        switch(x) {
            case 0:
              internet.location.href = 'https://www.outlook.com';
                break
            case 1:
                internet.location.href = 'https://mail.google.com';
                break
            case 2:
                internet.location.href = 'https://mail.yahoo.com/?.lang=es-ES';
                break
    }

}
//Esta para abrir la pagina
function abrirPagina(x){
    switch(x) {
        case 0:
           internet = window.open("https://www.outlook.com", "Outlook", "width=500, height=800, menubar=no");
            break
        case 1:
           internet = window.open("https://mail.google.com", "Gmail", "width=500, height=800, menubar=no");
            break
        case 2:
           internet = window.open("https://mail.yahoo.com/?.lang=es-ES", "Yahoo", "width=500, height=800, menubar=no");
            break
    }
}