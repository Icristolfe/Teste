// Problema 3
//
// Complete a funÃ§Ã£o 'compare_skills' abaixo.
//
// A funÃ§Ã£o recebe dois arrays de inteiros como parametro, cada um contendo 3 posiÃ§Ãµes. Ex. [3, 4, 18] e [14, 4, 1]
// Cada posiÃ§Ã£o representa os pontos de habilidade de uma pessoa em linguagens de programaÃ§Ã£o como: [python, php, javascript].
//
// O parametro 'a' representa a pontuaÃ§Ã£o de JoÃ£o, e o parametro 'b' representa a pontuaÃ§Ã£o da Maria.
// A tarefa Ã© comparar as pontuaÃ§Ãµes de cada habilidade de JoÃ£o e Maria: a[0] com b[0], a[1] com b[1], a[2] com b[2].\
// Se a[i] > b[i], entÃ£o JoÃ£o ganha 1 ponto.
// Se a[i] < b[i], entÃ£o Maria ganha 1 ponto.
// Se a[i] = b[i], entÃ£o ninguÃ©m ganha ponto.
//
// Veja o exemplo abaixo:
//
// a = [3, 4, 8]
// b = [1, 5, 9]
//
// Na posiÃ§Ã£o 0 JoÃ£o ganha 1 ponto. Na posiÃ§Ã£o 1 Maria ganha 1 ponto. Na posiÃ§Ã£o 2 Maria ganha 1 ponto.
// O resultado da funÃ§Ã£o Ã© um array com valores [1, 2], onde 1 Ã© a soma dos pontos de JoÃ£o e 2 Ã© a soma dos pontos de Maria.
// Maria ficou em primeiro e JoÃ£o em segundo.
//
// Exemplo de saida: [1, 2]
//


function compare_skills(a, b){
  let pontosJoao = 0;
  let pontosMaria = 0;

  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
          pontosJoao++;
      } else if (a[i] < b[i]) {
          pontosMaria++;
      }
  }

  return [pontosJoao, pontosMaria];

}

joao = [17, 28, 30]
maria = [99, 16, 8]
res = compare_skills(joao, maria)
  console.log(res)
