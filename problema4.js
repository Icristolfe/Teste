
// Problema 4
//
// Complete a funÃ§Ã£o 'diagonal_diff' abaixo.
//
// Calcule a diferenÃ§a absoluta entre as somas das diagonais de uma matriz quadrada.
// Exemplo de matriz quadrada de ordem 4:
//
// 1 2 3 1
// 4 5 6 2
// 9 8 9 2
// 2 4 1 3
//
// Diagonal da esquerda para a direita = 1 + 5 + 9 + 3 = 18
// Diagonal da direira para a esquerda = 1 + 6 + 8 + 2 = 17
//
// O retorno da funÃ§Ã£o Ã© a diferenÃ§a absoluta: 18 - 17 = 1.
// Exemplo de saida: 1
//
function diagonal_diff(arr) {
  let diagonalLeft = 0
  let diagonalRight = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diagonalLeft += arr[i][j]
      } else if (i + j === arr.length - 1) {
        diagonalRight += arr[i][j]
      }
    }
  }
  return Math.abs(diagonalLeft - diagonalRight)
}



// diagonal_diff()
    const arr = [[1, 2, 2, 1], [2, 1, 1, 2], [1, 2, 1, 2], [2, 1, 2, 1]]
  const diff = diagonal_diff(arr)
    console.log(diff)
