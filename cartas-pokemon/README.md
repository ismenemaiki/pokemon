# Desafio Cartas Pokemon

O desafio consiste em criar uma aplicação web consumindo a api do [TCG pokemon](https://pokemontcg.io/) e a descrição dos detalhes da implementação [aqui](https://github.com/aisdigital/FrontEndChallenge/blob/master/README.md).

## Explicação: detalhes do desenvolvimento

### Problemas

Durante a criação do app responsivo (mobile first) tive alguns problemas:

1. Ao criar uma slider (para o mobile) e um grid (para o desktop) tive que condicionar conforme o 'dispositivo'.

2. Entendimento dos [requisitos para o modal](https://github.com/aisdigital/FrontEndChallenge/blob/master/README.md#modal-com-detalhe-do-ataque-do-pokemon-com), mais precisamente o item 1 "custo de mana".

3. Durante o desenvolvimento os requests para API "quebrava".

4. O pior problema que tive. O retorno dos [cards](https://api.pokemontcg.io/v2/cards) no componente de cards está demorando de retornar e faz com que a variavel que eu atribuo esse retorno seja undefined na proxima execução fazendo com que eu fique impossibilitado de atuar com o mesmo.


### Soluções

1. Para exibição correta dos itens para cada qual, usei a lib browser-detect e condicionar o template de acordo com o item. OBS: Para esse feature é necessario que seja feito o recarregamento da página, pois é feito a verificação na criação do componente (algo parecido com a da pagina inicial do google).

2. Pedi ajuda a moça que me contatou pelo linkedin, mas nao obtive resposta. Tive que ler alguns tópicos para entender o que era o DADO, pois precisava dele para a feature do modal o que me custou um bom tempo, já que custo de "mana" é um jargão e todo material encontrado (em ingles) traduzido não tinha essa definição

3. Peguei a API, criei a service e comecei a consumir, porém depois de um tempo que estava atuando, o resultado era "chashado". Voltei na documentação da API e vi que tinha um API KEY para aumentar a quantidade de requests. Implementei o mesmo no Header da requisição. 

4. Para esse problema de 'sincronia' (mesmo com observable) criei um mock com menos itens e retornava na chamada da service convertendo o retorno para um observable (para continuar igual ao retorno original da API). Feito isso utilizava o retorno do mock normalmente.
OBS: O request feito a API com ID funciona normalmente (por isso eu acho que tem relação ao tamanho do objeto de cards retornado).

## LINK publicado

[link da Aplicação] (https://maiki-pokemon.vercel.app/)
