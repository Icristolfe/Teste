

// Problema 2
//
// Complete a funÃ§Ã£o 'stair_draw' abaixo.
//
// A funÃ§Ã£o aceita um inteiro como parametro que define o tamanho da base da escada.
// A funÃ§Ã£o vai usar o simbolo // para desenhar uma escada.
// Exemplo de saida para base igual 3.
/*
  #
 ##
###
'''
*/
function stair_draw(res) {
  let stair = ''

  for (let i = 0; i < res; i++) {
    for (let j = 0; j < res; j++) {
      if (i < j) {
        stair += ' '
      } else {
        stair += '#'
      }
    }
    stair += '\n'
  }
  return stair
}
// stair_draw()
  n = 6
  res = stair_draw(n)
  console.log(res)


