# Multiplicador de Números

Este projeto é uma implementação simples de uma tabuada utilizando JavaScript. O objetivo é multiplicar um número (definido como `multiplicador`) por valores de 0 a 10 e exibir os resultados no console de forma eficiente.

## Descrição

O código percorre uma série de números, de 0 a 10, e multiplica cada um deles pelo `multiplicador` definido. Os resultados são então exibidos no console no formato:


## Código

O código principal está escrito em JavaScript e utiliza um loop `for` para percorrer os números de 0 a 10. O cálculo de cada multiplicação é feito dentro do loop, e o resultado é exibido utilizando o `console.log`:

    ```javascript
    const multiplicador = 8;

    for (let i = 0; i <= 10; i++) {
      const calculo = multiplicador * i;
      console.log(`${multiplicador} x ${i} = ${calculo}`);
    }

### Como Funciona

**Declaração do Multiplicador:**

- O valor do multiplicador é definido na constante `multiplicador`. No exemplo, ele é definido como 8.

**Loop `for`:**

- O loop `for` é utilizado para iterar os números de 0 a 10 (`i`).
- Para cada iteração, o valor de `i` é multiplicado pelo `multiplicador`.

**Exibição dos Resultados:**

- O resultado da multiplicação é armazenado na constante `calculo` e é exibido no console no formato `multiplicador x i = calculo`.

### Como Executar

Para executar este código, podes simplesmente copiá-lo para um arquivo `.js` e rodá-lo em um ambiente que suporte JavaScript, como o Node.js ou diretamente no console do navegador.

    ```bash
      node nome_do_arquivo.js

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.




