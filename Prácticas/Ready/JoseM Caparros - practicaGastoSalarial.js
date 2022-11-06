/*Incompleto*/
/* El departamento de Finanzas de la empresa ACME, S.A. nos ha pedido ayuda para hacer
el análisis del gasto anual en salarios.Necesitan conocer el total anual empleado en 
pagar los salarios de los empleados de la empresa y conocer el importe de los tres sueldos más altos.

Deberás solicitar al usuario la introducción de los sueldos anuales de cada empleado (diez en total). 
Tras ello, habrás de mostrar los sueldos introducidos, la suma total y los tres sueldos más altos 
ordenados de mayor a menor. */

//Creo mi clase empleado con sus atributos
class empleado{
   constructor(n,a,s){
    this.nombre = n;
    this.apellido = a;
    this.salario = s;
   }
}

//Dos constantes con nombres y apellidos molones y un array donde meter las instancias 
const nombres = ["Quique", "José Luis", "Pancho", "Gustavo", "Pedro", "Pablo", "Guillermo","Lucia","Natalia","Francisca"];
const apellidos = ["Garcia", "Lopez", "Calvo", "Gutierrez", "Poleo", "Piltrafa", "Galan","Llorenç","Nieto","Franco"];
let empleados = new Array ();

//Bucle rico donde instancio el objeto y guardo en el array 
for(let i = 0; i < 10; i++){
 empleados[i] = new empleado(nombres[i], apellidos[i]);

 //No te hago control de errores porque confio plenamente en tus capacidades para no meterme letras
 let salarioString = prompt("¿Qué cobra " + empleados[i].nombre + " " + empleados[i].apellido + "?");
   empleados[i].salario = parseInt(salarioString); 

//Imprimo mis 10 empleados con su salario
   document.write(empleados[i].nombre + " " + empleados[i].apellido + " - - - Salario: " + empleados[i].salario + "€" + "<br>");
}
//Uso esta variable para guardar la suma de los salarios
let totalSalarios = empleados.reduce((a, b) => a + b.salario, 0);

//Y en esta guardo el array ordenadito de mayor a menor
let salariosMasAltos = empleados.sort((a,b) => a.salario > b.salario ? -1 : 1);

//Imprimimos
document.write( "<br>" + "TOTAL A PAGAR: " + totalSalarios + "€" + "<br>");

//Esto te podría haber hecho un bucle pero lo pensé tarde
document.write("<br>" + "LOS SALARIOS MÁS ALTOS: " + "<br>" + " 1º " + salariosMasAltos[0].nombre + " " + salariosMasAltos[0].apellido + " " + salariosMasAltos[0].salario + "€" + "<br>");
document.write(" 2º " + salariosMasAltos[1].nombre + " " + salariosMasAltos[1].apellido + " " + salariosMasAltos[1].salario + "€" + "<br>");
document.write(" 3º " + salariosMasAltos[2].nombre + " " + salariosMasAltos[2].apellido + " " + salariosMasAltos[2].salario + "€" + "<br>");