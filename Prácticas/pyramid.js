let numero = prompt('Dame un número bombón');
numeroNumero = parseInt(numero);
// const pyramid = new Array(numero);
//pyramid2(numero);

// function pyramid2(numer){
//     for(let i = 0; i < numer; i++){
//         pyramid[i] = new Array(i+1);
//         for(let j = 0; j < pyramid[i].length; j++){
//             pyramid[i].push(1);
//         }
    
//     }
//     return JSON.stringify(pyramid);
// }
document.write(pyramid(numeroNumero));

function pyramid(n){
    let r = new Array();
    for(let s=0 ; s < n; s++){
        r[s] = new Array(s +1 );
        r[s].fill(1);
    }
    return JSON.stringify(r);
    //return r;
}

