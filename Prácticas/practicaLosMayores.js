// Se necesita codificar una clase Persona que permita almacenar el nombre y la edad pasados por parámetro en la creación.
// Tras ello, se ha de definir un vector de cuatro elementos de tipo Persona.
// Se pide, una vez realizado la implementación de la clase y el array, imprimir el nombre de la persona de mayor edad 
// y decir también si hay más de una persona con la edad mayor.

 class Persona
{
    Persona(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

}

const nombres = ['Dani', 'Jose', 'Jaime', 'Pablo'];
const edades = [32, 12, 15, 73];
let elVector = [];

for(let i=0; i<4; i++){
    elVector[i] = new Persona();
    elVector[i].nombre = nombres[i];
    elVector[i].edad = edades[i];
}




//Lo ordeno de menor a mayor
elVector.sort((a, b) => {
    if (a.edad < b.edad){
        return -1;
    }
    if (a.edad > b.edad){
        return 1;
    }
    return 0;
});

//Escupo el nombre del más mayor
document.write("La persona más mayor es " + elVector[3].nombre + "<br>");

document.write("Estas son las edades que existen en el array menores de 18 años: " + "<br>");

//Aquí al usar filter he tenido que usar un segundo iterador porque al imprimir solo me salia [object Object]
const filtrado = elVector.filter(valor => valor.edad < 18);
filtrado.forEach((valor) => {
    document.write(valor.edad + "<br>")
});




