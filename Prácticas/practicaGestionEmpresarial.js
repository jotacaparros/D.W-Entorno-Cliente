/* En la empresa ACME, S.A. han decidido contratar a tres personas, 
con un tope de edad para su ingreso de 60 años y un tope salarial de 45.000 euros.

Se debe realizar el diseño de los objetos de usuario en JavaScript para definir los datos
relevantes de las personas y gestionar su ingreso en la empresa o su no admisión debido 
a no cumplir los parámetros de edad o salario.

Para cada persona se solicitará al usuario el nombre, edad y salario. 
En caso de ser admitido por cumplir los requisitos, ingresará en la empresa
y se mostrará un mensaje indicando tal extremo. En caso contrario, se indicará la no admisión,
el parámetro incumplido (edad o salario) y se solicitará de nuevo una persona al usuario.
*/

let contratados = [];
class empleado {
    constructorEmpleado(nombre, edad, salario){
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;       
    }


    procesoDeSeleccion(edad, salario){

        if(edad > 60 || salario > 45000){
            this.noDasLaTalla();
        }if (contratados.length < 3) {
            this.contratado();
        } else {
            this.noDasLaTalla();
        }

    }

    contratado(nombre) {
        document.write("Enhorebuena " + nombre + " . Has sido seleccionado." + "<br>");
    }

    noDasLaTalla(nombre){
        document.write("Lo sentimos mucho, " + nombre + " no ha sido seleccionado." + "<br>");
    }

}

const candidatos = [];

for (let i = 0; i < 3; i++){
   
    candidatos [i] =  new empleado();

    candidatos[i].nombre = prompt("Nombre del empleado: ");
    candidatos[i].edad = parseInt(prompt("Edad del empleado: "));
    candidatos[i].salario = parseInt(prompt("Salario del empleado: "));
    
} 

for (let i = 0; i < 3; i++){
    procesoDeSeleccion(i);
}



function procesoDeSeleccion(x)
{
    if (candidatos[x].edad > 60 || candidatos[x].salario > 45000){
        candidatos[x].noDasLaTalla(candidatos[x].nombre);
    }else {
        candidatos[x].contratado(candidatos[x].nombre);
    }
}
