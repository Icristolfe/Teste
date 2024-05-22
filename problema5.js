


// Problema 5
//
// Complete a funÃ§Ã£o 'perc_elements' abaixo.
//
// Dado um array de inteiros, calcule a proporÃ§Ã£o de elementos positivos, negativos e zeros.
// Exemplo de array de entrada: [1, 1, 0, -1, -1]
//
// Dos 5 elementos do array, temos 2 inteiro, 2 negativos e 1 zero.
// Nesse exemplo a funÃ§Ã£o deve retornar um array com a proporÃ§Ã£o de cada tipo, com uma precisÃ£o de 6 casas decimais.
//
// O retorno deve ser um array com 3 posiÃ§Ãµes um para cada tipo: [positivo, negativo, neutro]
// Exemplo de saida: [0.400000, 0.400000, 0.200000]

function perc_elements(arr) {

  let positive = 0
  let negative = 0
  let zero = 0
  arr.forEach(item => {
    if( item > 0) positive = positive + 1
    else if( item == 0) zero = zero + 1
    else negative = negative +1
  });

  const getProportionValue = (value) => {
    return ( value / arr.length).toFixed(6)
  }

  const proportionPositive = getProportionValue(positive)
  const proportionNegative = getProportionValue(negative)
  const proportionZero = getProportionValue(zero)

  return proportionNegative + ' ' + proportionPositive + ' ' + proportionZero
  
}

// perc_elements
const arr = [-4, 3, -9, 0, 4, 1]
res = perc_elements(arr)
    console.log(res)

