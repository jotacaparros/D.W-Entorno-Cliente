
//Creo la clase caza
class Caza {
    //Atributos del caza
    resistencia;
    bando;
    tipo;
    
    //Una función que me genere un núm aleatorio
    potenciaDeAtaque (min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //Una función que sirva para recibir daño
    recibirDano(dano){
        this.resistencia = this.resistencia - dano;
    }

    //Estas dos las puse por los loles pero al final no las he utilizado
    informeDeDanos(){
        
        let informe = "Comandante, la nave aún puede resistir un ataque de " + this.resistencia + " puntos de daño";
        return informe;
    }

    informacionNave(){
        let infoNave = "Se trata de un " + this.tipo + " que pertenece a " + this.bando;
        return infoNave;
    }
}

//Creo una clase hija de caza que será el modelo del imperio
class CazaTIE extends Caza {
   resistencia = 80;
   bando = "el Imperio";
   tipo = "Caza TIE";

//Modifico la potencia de ataque 
   potenciaDeAtaque(){
       return  super.potenciaDeAtaque(1,25);
        
   }
}

//Lo mismo con el caza de la Alianza
class CazaAlaX extends Caza {
    resistencia = 120;
    bando = "la Alianza Rebelde";
    tipo = "Caza Ala-x";

    potenciaDeAtaque(){
       return super.potenciaDeAtaque(2,20);
       
   }
}

//Montamos el imperio con sus 1200 cazas
let Imperio = [];

for (let i = 0; i < 1200; i++){
    
    Imperio[i] = new CazaTIE();

}

let Alianza  = [];


//Y lo mismo con la alizan
for (let i = 0; i < 1200; i++){
    Alianza[i] = new CazaAlaX();
}


//Y batallamos. Para eso uso un do/while con un controlador
let controladorBucle = true;
do{
//ATAQUE IMPERIAL
let contadorBajas = 0;
//Hago un bucle para que todas las naves Imperiales ataquen
    for (let i = 0; i < Imperio.length; i++){
        let ultimaPosicion = Alianza.length - 1 - contadorBajas;
//Aquí recibe todo ese daño las naves de la alianza que están en último lugar
        Alianza[ultimaPosicion].recibirDano(Imperio[i].potenciaDeAtaque());

//Y uso el método filter para quitarme del array las que han muerto
        Alianza = Alianza.filter(caza => caza.resistencia > 0);

//Llegará un punto que si no hay más naves el programa crashea pero lo evitamos con este if,
//anticipando de que siga en el bucle for
        if(Alianza.length  === 0){
                controladorBucle = false;
                document.write("EL IMPERIO HA GANADO");
                break;
        }
//Aquí hago un control por consola de como va la batalla
    console.log("La alianza cuenta con " + Alianza.length);
//Uso este if para que vaya quitando posiciones cuando elimina las últimas naves
        if (Alianza.length < ultimaPosicion){
                contadorBajas++;
        }
    
    }

//ATAQUE ALIANZA 
//La alianza es igual pero cambiando el bando
contadorBajas = 0;
    for(let i = 0; i < Alianza.length; i++){
        let ultimaPosicion = Imperio.length -1 - contadorBajas;
        Imperio[ultimaPosicion].recibirDano(Alianza[i].potenciaDeAtaque());
        Imperio = Imperio.filter(caza => caza.resistencia > 0);
        if(Imperio.length === 0){
            controladorBucle = false;
            document.write("LA ALIANZA HA GANADO");
            break;
        }
        console.log("El imperio cuenta con " + Imperio.length);
        if (Imperio.length < ultimaPosicion){
            contadorBajas++;
        }   
    }
}while(controladorBucle != false);

document.write("<br>" + "FIN DEL JUEGO");