let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.querySelector('img');
let numeracion = document.getElementById('numeracion')

let posicion = 3;

adelante.addEventListener('click', moverPosicion);
atras.addEventListener('click', moverPosicion);


function moverPosicion(){

    if(this.id == "adelante"){
        posicion++;
        if(posicion == 6){
            posicion--;      
        }
    }else{
        posicion--;
        if (posicion == 0){
            posicion++;
        }
    }

    switch(posicion){
        case 1:
            alert("No podemos retroceder más ya estamos en la primera imagen.");
            posicion++;
        break;

        case 2:
            numeracion.innerText = "Camiseta 6";
            imagen.src="camiseta_6_humor_informatico_foto.jpg";
        break;

        case 3:
            numeracion.innerText = "Camiseta 9";
            imagen.src="camiseta_9_humor_informatico_foto.jpg";
        break;

        case 4:
            numeracion.innerText = "Camiseta 11";
            imagen.src="camiseta_11_humor_informatico_foto.jpg";
        break;

        case 5:
            alert("No podemos avanzar más ya estamos en la última imagen.");
            posicion--;
        break;
    }
}
