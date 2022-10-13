    var ventana = true;
    var internet;

   function abreAyuda(){
    if(ventana === true){
      internet = window.open("https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia", "¡Mdn Ayuda!", "width=500, height=800, menubar=no");
        ventana = false;
    }else{
        internet.close();
        ventana = true;
      }
   }