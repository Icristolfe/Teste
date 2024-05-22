#!/bin/python3

# Problema 1
#
# Complete a funÃ§Ã£o 'sort_string_as_number' abaixo.
#
# A funÃ§Ã£o aceita um array de string como parametro.
# Os elementos sempre comeÃ§am com 'person_' seguido por um numero. Ex. 'person_8', 'person_1234'.
#
# A funÃ§Ã£o deve retornar o array de entrada ordenado pelos numeros no final de cada elemento.
# Exemplo: O retorno para a entrada ['person_8', 'person_80', 'person_9'] deve ser ['person_8', 'person_9', 'person_80'].
#
# Exemplo de saida: ['person_8', 'person_9', 'person_80']
#
def sort_string_as_number(arr):

    def extract_number(s):
        return int(s.split('_')[-1])



    arr.sort(key=extract_number)

    return arr


# Problema 2
#
# Complete a funÃ§Ã£o 'stair_draw' abaixo.
#
# A funÃ§Ã£o aceita um inteiro como parametro que define o tamanho da base da escada.
# A funÃ§Ã£o vai usar o simbolo # para desenhar uma escada.
# Exemplo de saida para base igual 3.
'''
  #
 ##
###
'''


def stair_draw(n):

    stairs = []

    for i in range(1, n + 1):

        line = ' ' * (n - i) + '#' * i

        stairs.append(line)

    return '\n'.join(stairs)


# Problema 3
#
# Complete a funÃ§Ã£o 'compare_skills' abaixo.
#
# A funÃ§Ã£o recebe dois arrays de inteiros como parametro, cada um contendo 3 posiÃ§Ãµes. Ex. [3, 4, 18] e [14, 4, 1]
# Cada posiÃ§Ã£o representa os pontos de habilidade de uma pessoa em linguagens de programaÃ§Ã£o como: [python, php, javascript].
#
# O parametro 'a' representa a pontuaÃ§Ã£o de JoÃ£o, e o parametro 'b' representa a pontuaÃ§Ã£o da Maria.
# A tarefa Ã© comparar as pontuaÃ§Ãµes de cada habilidade de JoÃ£o e Maria: a[0] com b[0], a[1] com b[1], a[2] com b[2].\
# Se a[i] > b[i], entÃ£o JoÃ£o ganha 1 ponto.
# Se a[i] < b[i], entÃ£o Maria ganha 1 ponto.
# Se a[i] = b[i], entÃ£o ninguÃ©m ganha ponto.
#
# Veja o exemplo abaixo:
#
# a = [3, 4, 8]
# b = [1, 5, 9]
#
# Na posiÃ§Ã£o 0 JoÃ£o ganha 1 ponto. Na posiÃ§Ã£o 1 Maria ganha 1 ponto. Na posiÃ§Ã£o 2 Maria ganha 1 ponto.
# O resultado da funÃ§Ã£o Ã© um array com valores [1, 2], onde 1 Ã© a soma dos pontos de JoÃ£o e 2 Ã© a soma dos pontos de Maria.
# Maria ficou em primeiro e JoÃ£o em segundo.
#
# Exemplo de saida: [1, 2]
#
def compare_skills(a, b):
    joao_pontos = 0
    maria_pontos = 0


    for i in range(3):
        if a[i] > b[i]:
            joao_pontos += 1
        elif a[i] < b[i]:
            maria_pontos += 1

    return [joao_pontos, maria_pontos]



# Problema 4
#
# Complete a funÃ§Ã£o 'diagonal_diff' abaixo.
#
# Calcule a diferenÃ§a absoluta entre as somas das diagonais de uma matriz quadrada.
# Exemplo de matriz quadrada de ordem 4:
#
# 1 2 3 1
# 4 5 6 2
# 9 8 9 2
# 2 4 1 3
#
# Diagonal da esquerda para a direita = 1 + 5 + 9 + 3 = 18
# Diagonal da direira para a esquerda = 1 + 6 + 8 + 2 = 17
#
# O retorno da funÃ§Ã£o Ã© a diferenÃ§a absoluta: 18 - 17 = 1.
# Exemplo de saida: 1
#
def diagonal_diff(arr):
    n = len(arr)

    sum_primary = 0
    sum_secondary = 0


    for i in range(n):
        sum_primary += arr[i][i]


    for i in range(n):
        sum_secondary += arr[i][n - 1 - i]


    diff = abs(sum_primary - sum_secondary)

    return diff


# Problema 5
#
# Complete a funÃ§Ã£o 'perc_elements' abaixo.
#
# Dado um array de inteiros, calcule a proporÃ§Ã£o de elementos positivos, negativos e zeros.
# Exemplo de array de entrada: [1, 1, 0, -1, -1]
#
# Dos 5 elementos do array, temos 2 inteiro, 2 negativos e 1 zero.
# Nesse exemplo a funÃ§Ã£o deve retornar um array com a proporÃ§Ã£o de cada tipo, com uma precisÃ£o de 6 casas decimais.
#
# O retorno deve ser um array com 3 posiÃ§Ãµes um para cada tipo: [positivo, negativo, neutro]
# Exemplo de saida: [0.400000, 0.400000, 0.200000]
#
def perc_elements(arr):
    total_elementos = len(arr)
    positivos = sum(1 for num in arr if num > 0)
    negativos = sum(1 for num in arr if num < 0)
    zeros = sum(1 for num in arr if num == 0)

    proporcao_positivos = positivos / total_elementos
    proporcao_negativos = negativos / total_elementos
    proporcao_zeros = zeros / total_elementos

    return [round(proporcao_positivos, 6), round(proporcao_negativos, 6), round(proporcao_zeros, 6)]





if __name__ == '__main__':





    print('--------------------------------------------------------------------')

    # sort_string_as_number()
    arr = ['person_1', 'person_2', 'person_3', 'person_10', 'person_100', 'person_31', 'person_22']
    res = sort_string_as_number(arr)
    print(res)

    print('--------------------------------------------------------------------')

    # stair_draw()
    n = 6
    res = stair_draw(n)
    print(res)

    print('--------------------------------------------------------------------')

    # compare_skills()
    joao = [17, 28, 30]
    maria = [99, 16, 8]
    res = compare_skills(joao, maria)
    print(res)

    print('--------------------------------------------------------------------')

    # diagonal_diff()
    arr = [[1, 2, 2, 1], [2, 1, 1, 2], [1, 2, 1, 2], [2, 1, 2, 1]]
    res = diagonal_diff(arr)
    print(res)

    print('--------------------------------------------------------------------')

    # perc_elements
    arr = [-4, 3, -9, 0, 4, 1]
    res = perc_elements(arr)
    print(res)

    print('--------------------------------------------------------------------')

