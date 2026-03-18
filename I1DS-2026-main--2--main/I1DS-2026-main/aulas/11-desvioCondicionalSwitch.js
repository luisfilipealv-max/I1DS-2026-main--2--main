// swtch case -> estrtura de decisões usada quando queremos comparar o valor de
// uma variável com vários possíveis resultados.
// REGRA DO PROFCASTELLO - se tiver mais que 3 comparadores, faça um swtch case

// Exemplo 01 - MENU
// Neste exemplo a varíavel menuSeleção guardará o nome de uma opção de menu.
// O swtch verifica qual foi a opção escolhida e exibe ma mensagem correspondente

let menuSelecionado = "pague um café6";
switch (menuSelecionado) {
  case "home":
    console.log("Você clicou no link 'home'");
    break;
  case "quem somos":
    console.log("Você clicou no link 'quen somos'");
    break;
  case "contato":
    console.log("Você clicou no link 'contato'");
    break;
  case "Redes sociais":
    console.log("Você clicou no link 'redes sociais");
    break;
     case "pague um café":
    console.log("Você clicou no link 'pague um café'");   

  default:
    console.log("Opção incorreta, selecione uma opção no menu!");
    break;
}

// redes sociais
// pague um café

/* 
            🧠 Desafio: Descobrindo o Trimestre


Você deverá criar um programa em JavaScript que identifique em qual trimestre do ano um determinado mês está.


📌 Regras do desafio
O programa deve receber um número de 1 a 12 representando o mês.
Utilize a estrutura switch case para resolver.
Exiba no console em qual trimestre o mês informado se encontra:


Mês                     Trimestre
1, 2, 3                 Primeiro trimestre
4, 5, 6                 Segundo trimestre
7, 8, 9                 Terceiro trimestre
10, 11, 12              Quarto trimestre
*/