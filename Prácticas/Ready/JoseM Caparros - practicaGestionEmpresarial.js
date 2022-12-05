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


//Creamos la clase empleado
class empleado {
    constructorEmpleado(nombre, edad, salario){
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;       
    }



    //Utilizaremos estos dos métodos para verbalizar nuestra decisión
    contratado(nombre) {
        document.write("Enhorebuena " + nombre + " . Has sido seleccionado." + "<br>");
    }

    noDasLaTalla(nombre){
        document.write("Lo sentimos mucho, " + nombre + " no ha sido seleccionado." + "<br>");
    }

}

const candidatos = [];
//Nos metemos en un bucle para recopilar en un array a nuestros futuros esclavos
for (let i = 0; i < 3; i++){
   
    //Instanciamos a la posible vícitma
    candidatos[i] =  new empleado();
    
    //Pedimos su nombre
    candidatos[i].nombre = prompt("Nombre del empleado: ");
   
    //Y que introduzca su edad
    let edad = parseInt(prompt("Edad del empleado: "));
    
    //Puede que el/la muy cafre lo haya escrito con letras. Así que hacemos un pequeño control de errores.
    if (!isNaN(edad)){
        candidatos[i].edad = edad;
    }else{
        while (isNaN(edad)){
            edad = parseInt(prompt("Solo números por favor. Introduzca de nuevo la edad"));
        }
        candidatos[i].edad = edad;
    }
    
    //Lo mismo pero con el salario
    let salario = parseInt(prompt("Salario del empleado: "));
   
    if (!isNaN(salario)){
        candidatos[i].salario = salario;
    }else{
        while (isNaN(salario)){
            salario = parseInt(prompt("Solo números por favor. Introduzca de nuevo el salario"));
        }
        candidatos[i].salario = salario;
    }
} 

//Y aquí ponemos en marcha la maquinaria burocratica que ira candidato por candidato 
for (let i = 0; i < 3; i++){
    procesoDeSeleccion(i);
}


//Creamos una función despiadada para filtrar solo trabajadores potencialmente explotables
function procesoDeSeleccion(x)
{
    //Nos da igual si son menores. Pasamos los filtros del enunciado y tomamos una decisión.
    if (candidatos[x].edad > 60 || candidatos[x].salario > 45000){
        candidatos[x].noDasLaTalla(candidatos[x].nombre);
    }else {
        candidatos[x].contratado(candidatos[x].nombre);
    }
}
