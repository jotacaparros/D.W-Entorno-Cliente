// Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:

// Objeto Persona con las propiedades nombre, edad y género, y el método getDetalles(), que muestra por pantalla las propiedades de la persona.
// Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
// Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

//Creamos la clase padre persona
class Persona{
    constructorPersona(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
//Con su metodo detalles
    getDetalles(){
        document.write("Nombre " + this.nombre + "<br>");
        document.write("Edad " + this.edad + "<br>");
        document.write("Género " + this.genero + "<br>");
    }
}

//La clase estudiante que hereda persona
class Estudiante extends Persona{
    constructorEstudiante(nombre, edad, genero, curso, grupo){

        this.curso = curso;
        this.grupo = grupo;
    }
//Un método para que puedas registrar el curso y el grupo
    registrar(){
        this.curso = prompt("Introduzca curso: ");
        this.grupo = prompt("Introduzca grupo: ");
    }
//Y le añadimos información en el método getDetalles
    getDetalles(){
        super.getDetalles();
        document.write("Curso: " + this.curso + "<br>");
        document.write("Grupo: " + this.grupo + "<br>");
    }
}

//Repetimos lo mismo pero con profesor
class Profesor extends Persona{
    constructorProfesor(nombre, edad, genero, asignatura, nivel){
       

        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar(){
        this.asignatura = prompt("Introduzca asignatura: ");
        this.nivel = prompt("Introduzca nivel: ");
    }

    getDetalles(){
        super.getDetalles();    
        document.write("Asignatura: " + this.asignatura + "<br>");
        document.write("Nivel: " + this.nivel + "<br>");
    }
}

//Vectores con datos para probar
const nombres = ["Jaime", "Hugo", "Lucia", "Benajamin", "Laura"];
const edades = ["13", "16", "29", "61", "33"];
const generos = ["Masculino", "Masculino", "Femenino", "Masculino", "Femenino"];

//Insertamos los datos en estudiantes y probamos la jerarquia
const estudiantes = [];
for(let i = 0; i < 2; i++){
    estudiantes[i] = new Estudiante();
    estudiantes[i].nombre = nombres[i];
    estudiantes[i].edad = edades[i];
    estudiantes[i].genero = generos[i];

    estudiantes[i].registrar();
    estudiantes[i].getDetalles();
    document.write("<br>");
}

//Lo mismo pero esta vez con profesores
const profesores = [];
for(let i = 2; i < 5; i++){
    profesores[i] = new Profesor();
    profesores[i].nombre = nombres[i];
    profesores[i].edad = edades[i];
    profesores[i].genero = generos[i];

    profesores[i].asignar();
    profesores[i].getDetalles();
    document.write("<br>");
}