
/*
  Introdução a funçoes em JavaScript
    função -> Uma função em JavaScript é um bloco de código reutilizavel
    que executa uma tarefa quando é chamado.~
*/

function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log("5 + 3 =", somar(5, 3));
console.log("15 + 32 =", somar(15, 32));

let v1 = 10;
let v2 = 35;

console.log("A soma de v1 + v2 = ", somar(v1, v2));

/* Criar uma função que escreve bom dia */

function BomDia() {
  console.log("Olá bom dia para você!");
}

BomDia();
BomDia();
BomDia();

/* função para aprensetar uma pessoa */
function apresentarPessoa(nome, idade, cidade){
    console.log("Apresento a vocêss:",
         nome,
         " que tem",
          idade,
           " anos, e mora em",
            cidade ,
             ".",
   
    )
}
apresentarPessoa("Vitor", 15, "Brotas")
apresentarPessoa("Pedro", 16, "Brotas")
apresentarPessoa("Roberta", 16, "Brotas")


/* Criar uma função que calcula e retorna o desconto em uma venda */

function  desconto (valorVenda, percentualDesconto){
    let valorDesconto = valorVenda * (percentualDesconto / 100)
    return valorDesconto;
}
    let totalPedido = 530.0;
let totalDesconto = desconto(totalPedido, 7.5);
let valorFinal = totalPedido - totalDesconto;

console.log("------------------------------------------");
console.log("Total do Pedido:", totalPedido);
console.log("Total do Desconto:", totalDesconto);
console.log("Valor Final do Pedido:", valorFinal);
console.log("------------------------------------------");