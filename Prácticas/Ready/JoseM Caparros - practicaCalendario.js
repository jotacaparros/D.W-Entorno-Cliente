
mesAno = prompt('Introduce un mes y un año en el siguiente formato: mm/yyyy');

var fecha = mesAno.split('/');

//Controlo que tenga sentido lo que pone el usuario
if (fecha[0] > 12 || fecha[0] < 1 || fecha[1] > 2050 || fecha[1] < 1){
    document.write('Fecha no válida. No me marees y pon algo con sentido.');
}

/*Hago dos variables de mes porque para averiguar los días del mes mediante Date(año, mes, 0).getDate(),
enero comienza por el 1, mientras que si le añado un día específico, enero comienza en la posición 0.
Ni idea de por que. Perdí mucho pelo en estas averiguaciones */

var mes = parseInt(fecha[0]);
var mesMenos = parseInt(fecha[0] - 1);
var ano = parseInt(fecha[1]);
var diasMes = new Date(ano, mes, 0).getDate();

document.write('En el mes ' + fecha[0] + ' del año ' + fecha[1] + ' habían '+ diasMes + ' dias' +'<br>');

//Bucle en el que pasamos por cada día de ese mes y le ponemos nombre
for ( let i = 1; i <= diasMes; i++){
    let day;
    switch (new Date(ano, mesMenos, i).getDay()) {
        case 0:
          day = "Domingo";
          break;
        case 1:
          day = "Lunes";
          break;
        case 2:
           day = "Martes";
          break;
        case 3:
          day = "Miércoles";
          break;
        case 4:
          day = "Jueves";
          break;
        case 5:
          day = "Viernes";
          break;
        case 6:
          day = "Sábado";
      }
    document.write('<br>' + i + ' ' + ' (' + day + ')' +'<br>' );
}