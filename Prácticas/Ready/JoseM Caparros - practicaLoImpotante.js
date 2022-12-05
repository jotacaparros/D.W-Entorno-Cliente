// Se necesita crear un objeto que represente los datos de un Participante de un juego. Definir las propiedades “nombre” y “puntos” y los siguientes métodos:

//  · imprimir (): Muestra el nombre de jugador y los puntos actuales
//  · aumentarPuntos (valor): permite incrementar la cantidad de puntos actuales del jugador en el valor pasado por parámetro
//  · ganador(): Verifica si los puntos superan a 1000 y muestra un mensaje

//Una vez definida la clase, se han de crear dos jugadores y simular una batalla asignando puntuaciones aleatorias de 1 a 200 puntos cada vez, mostrando un mensaje cuando gane uno de los dos.

//Creamos la clase
class Participante{
    constructorParticipante(nombre, puntos)
    {
        this.nombre = nombre;
        this.puntos = puntos;
    }
//Con su método para imprimir
    imprimir(){
        document.write(this.nombre + " tiene " + this.puntos + " puntos." + "<br>");
    }
//Método para sumar puntos
    aumentar(valor){
        this.puntos = this.puntos + valor;
    }
//Método para imprimir ganador
    ganador(){
        if(this.puntos > 1000){
            document.write("El jugador " + this.nombre + " ha ganado. Enhorabuena, campeón." + "<br>");
        }
    }
}
//Aquí hay algo que te preguntaré la proxima ve que te vea dani,
//porque no entiendo por qué no puedo pasarle los valores de los atributos por el constructor
//rollo poner directamente: ---- let participante1 = new Participante("Madelman", 0);
let participante1 = new Participante();
    participante1.nombre = "Madelman";
    participante1.puntos = 0;

let participante2 = new Participante();
    participante2.nombre = "Tom Platz";
    participante2.puntos = 0;

//Mientras tengan menos de 1000 puntos iran sumando aleatoriamente
do{

    participante1.aumentar(getRandomIntInclusive(1, 200));
    participante2.aumentar(getRandomIntInclusive(1, 200));

}while(participante1.puntos < 1000 && participante2.puntos < 1000);


//Mostramos los resultados de esta lucha encarnizada
if(participante1.puntos > 1000 && participante1.puntos > participante2.puntos){

    participante1.ganador();
    participante1.imprimir(); 
    participante2.imprimir();

}if (participante2.puntos > 1000 && participante2.puntos > participante1.puntos){

    participante2.ganador();
    participante1.imprimir();  
    participante2.imprimir();
} 

//La función para generar números aleatorios 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }