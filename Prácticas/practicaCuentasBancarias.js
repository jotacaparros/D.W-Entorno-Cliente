
// Necesitamos registrar las cuentas bancarias de tres clientes. Para ello debe pedirse al usuario que introduzca los siguientes datos:

// Nombre del titular
// Apellidos del titular
// Saldo de la cuenta
// Tras ello, se guardarán los datos en un objeto definido por el usuario dentro de un array de tres elementos.

// Por último, se mostrarán los datos de las tres cuentas creadas haciendo uso de un método definido para este objeto.

//Creamos la clase
class CuentaBancaria
{
    constructorCuentaBancaria(nombre, apellido, saldo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    //El método que nos pide el enunciado
    mostrarDatos(i){

        document.write("Cuenta número " + i + "<br>");
        document.write("Nombre: " + this.nombre + "." + "<br>");
        document.write("Apellido: " + this.apellido + "." + "<br>");
        document.write("Saldo: " + this.saldo + "." + "<br>");
        document.write("<br>");
    }


}

const cuentas = [];

//Un blucle para añadir los datos
for (let i = 0; i < 3; i++){
   
    cuentas[i] =  new CuentaBancaria();
    
    cuentas[i].nombre = prompt("Nombre: ");
   
   cuentas[i].apellido = prompt("Apellido: ");
    
   let saldo = prompt("Saldo: ");
    
   //Control de errores para que nos pasen un número en el saldo de la cuenta
    if (!isNaN(saldo)){
        cuentas[i].saldo = saldo;
    }else{
        while (isNaN(saldo))
        {
            saldo = parseInt(prompt("Solo números por favor. Introduzca de nuevo el saldo"));
        }
        cuentas[i].saldo = saldo;
    }
    
    //Y mostramos con las cuentas con el método de clase 
    cuentas[i].mostrarDatos(i);
} 