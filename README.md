# Descrição detalhada das etapas realizadas no código da atividade: 📖
Feito por: Cauã Silva Moreira Santos 👦

## Inicio
<p>Primeiro selecionei as imagens no google, e ao salvar nomeei de 0 a 9 com .jpg.</p>

## HTML
<p>Fiz a estrutura básica do HTML e dentro do body coloquei um h1 com o nome do jogo, a imagem com uma id chamada "imagem" e a função onclick (Evento de clique) com o nome trocar(), por fim, um parágrafo com a descrição do jogo. No final do body chamei o javascript.</p>

## CSS
<p>No css personalizei a página centralizando os itens, mudando a cor de fundo, as fontes e as cores da fonte. Além de uma borda na imagem e efeito hover(aumenta um pouco o tamanho do width e height da imagem ao passar o mouse em cima).</p>

## Javascript
<p>No javascript fiz um código simples chamando a função trocar().</p>

<p>Dentro dessa função criei um let com o comando document.getElementById("imagem") para pegar a imagem.</p>

<p>E outro let para calcular o número aleatório, utilizando a função Math.random que sorteia um número aleatorio entre 0 e 1, por isso multipliquei por 10. Mas como daria alguns números quebrados, utilizei a função Math.trunc para remover as casas depois da virgula e retornar apenas o número inteiro.</p>

<p>Com isso ja consigo utilizar as imagens que nomeei de 0 a 9 pegando o src e alterando de acordo com o número aleatório. Foi preciso fazer uma concatenação com o "img/" + nome do let do número aleatório + ".jpg".</p>

## FIM
<p>Toda vez que clicar na imagem, um número de 0 a 9 será sorteado, assim alterando as imagens de acordo com o seu número no nome.</p>