var direccion;
var control = true;
var internet;

function redireccionar(){
    direccion = paginaRandom();
    if(control==true){
        abrirPagina(direccion);
        control = false;
    }else {
        direccion = paginaRandom();
        cambioPagina(direccion);
    }

    // if(internet){
    //     document.write('ahora');
    // }

}

function paginaRandom() {
    return Math.floor(Math.random() * 3);
  }

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