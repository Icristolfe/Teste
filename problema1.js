// Problema 1
//
// Complete a funÃ§Ã£o 'sort_string_as_number' abaixo.
//
// A funÃ§Ã£o aceita um array de string como parametro.
// Os elementos sempre comeÃ§am com 'person_' seguido por um numero. Ex. 'person_8', 'person_1234'.
//
// A funÃ§Ã£o deve retornar o array de entrada ordenado pelos numeros no final de cada elemento.
// Exemplo: O retorno para a entrada ['person_8', 'person_80', 'person_9'] deve ser ['person_8', 'person_9', 'person_80'].
//
// Exemplo de saida: ['person_8', 'person_9', 'person_80']


function sort_string_as_number(arr) {
  arr.sort((a, b) => {
    // Extrai os números dos elementos de string
    const numA = parseInt(a.replace('person_', ''));
    const numB = parseInt(b.replace('person_', ''));

    // Compara os números extraídos
    return numA - numB;
});

return arr;
}

// sort_string_as_number()
    arr = ['person_1', 'person_2', 'person_3', 'person_10', 'person_100', 'person_31', 'person_22']
    const arraySorted = sort_string_as_number(arr)
   console.log(arraySorted)


