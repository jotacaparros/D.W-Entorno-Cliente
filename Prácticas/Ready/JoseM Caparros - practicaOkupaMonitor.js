
function abrirVentana(){

    //Podría haberlo metido directamente en los parametros pero he decidido declarar varias variables para hacer pruebas

    let altoVentana = (window.screen.availHeight / 2);
    let anchoVentana = window.screen.availWidth;
    let ventanaParametros =  "top=0, left=0,width=" + anchoVentana + ", height=" + altoVentana ;
    

   window.open("https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia", '_blank', ventanaParametros);
   
}