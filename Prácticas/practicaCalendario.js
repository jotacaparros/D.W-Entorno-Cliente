
mesAno = prompt('Introduce un mes y un año en el siguiente formato: mm/yyyy');

var fecha = mesAno.split('/');

document.write(fecha[0] + '<br>');
document.write(fecha[1] + '<br>');

if (fecha[0] > 12 || fecha[0] < 1 || fecha[1] > 9999 || fecha[1] < 1){
    document.write('Fecha no válida. No me marees y pon algo con sentido.');
}

var mes = parseInt(fecha[0]);
document.write(mes);
var mesMenos = parseInt(fecha[0] - 1);
document.write(mesMenos);

var ano = parseInt(fecha[1]);
var diasMes = new Date(ano, mes, 0).getDate();
document.write(new Date(1995, 9, 31).toDateString() + '<br>');

document.write(diasMes);
document.write('<br>' + diasMes + '<br>');

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
    // fff = new Date(ano, mes, i)
    document.write( i + ' ' + ' (' + day + ')' +/*  fff.toString() +*/'<br>' );
}


document.write('<br>' + diasMes + '<br>');

// var Xmas95 = new Date('December 25, 1995 23:15:30');
// var weekday = Xmas95.getDay();

// var diciembre = new Date('December 1,  25, 1995 23:15:30');

// var noviembre = new Date();

// noviembre.setDate(diciembre.getDate() - 2);

// document.write(noviembre.getDate());

// //document.write(weekday); // 1