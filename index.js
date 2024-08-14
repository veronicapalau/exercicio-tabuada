/* 
multiplicador x numero = resultado
multiplicador x 0 = resultado
multiplicador x 1 = resultado
multiplicador x 2 = resultado
multiplicador x 3 = resultado
multiplicador x 4 = resultado
multiplicador x 5 = resultado
multiplicador x 6 = resultado
multiplicador x 7 = resultado
multiplicador x 8 = resultado
multiplicador x 9 = resultado
multiplicador x 10 = resultado
obs: não podemos criar varios console.log (multiplicador x 3 = resultado)
*/

const multiplicador = 8;

//lei i = 0
//chegará ate o valor desejado = 10
//ele add + 1 sobre o valor atual, então sempre que acabar o codigo ele vai adicionar
// +1 = 1+ 1 = 2

for (let i = 0; i <= 10; i++){
    const calculo = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calculo}`);
}

