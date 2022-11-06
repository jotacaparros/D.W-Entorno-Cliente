console.log(tripleNumber(112223, 54622));
console.log(tripleNumber(12345, 12345));
function tripleNumber ( num1, num2){

    const primero = num1.toString();
    const segundo = num2.toString();
    
    console.log(primero);

   const arrayNumero1 =  primero.split("");
   const arrayNumero2 = segundo.split("");

   console.log(arrayNumero1);

    //lo ordeno de forma ascendente
   const ascendente = arrayNumero1.sort((a,b) => a > b ? 1 : -1);
   let triplicados = [];
  
   console.log(ascendente);

   for (let i = 0; i < ascendente.length; i++) {
    if (ascendente[i + 1] === ascendente[i] && ascendente[i + 2] === ascendente[i]) {
        triplicados.push(ascendente[i]);
    }
  }

  console.log(triplicados);
   
  let resultado =  arrayNumero2.some((elemento)=>{
    
    //si indexOf = -1 es que ese elemento no está en el array
    if(triplicados.indexOf(elemento)!= -1){
        return true;
    }
});

return resultado;

  




}