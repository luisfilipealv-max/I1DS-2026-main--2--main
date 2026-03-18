//  desvio condicional - IF-ELSE

/* condições simples com IF 
   sitaxe: if( condição ){ 
     código a ser executado, se verdadeiro.
}  
*/

let anoNascimento = 1999;

if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003");
}

if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}

// condicional IF-ELSE

if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000");
} else {
  console.log("A pessoa nasceu antes do ano 2000");
}

// condicional composta com IF

const login = "admin";
const senha = "12345";

let loginUser = "admin";
let senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Login realizado com sucesso!");
}

// Condicional Composta com IF-ELSE
if (loginUser == login && senhaUser == senha) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

// Desvio aninhado - IF-ELSE-IF-ELSE ...

let semaforo = "vermelho";

if (semaforo == "vermelho") {
  console.log("STOP");
} else if (semaforo == "amarelo") {
  console.log("ALERT");
} else if (semaforo == "verde") {
  console.log("GO");
} else {
  console.log("opção invalida!");
}
// Criando variaveis locais ( só existem coisas dentro do bloco onde foram criadas )

let mes = "Agosto";
let dia = "15";

if (dia == 15 && mes == "Agosto") {
  let mensagem = "Hoje é dia 15 de agosto.";
  console.log(mensagem);
}
console.log(
  "Tentando acessar a variável 'mensagem' fora do escopo do IF, vai dar erro!!!",
);

//console.log(mensagem)

//********************************************************* */
// IF Ternário (IF Inline)

let preco = 500;
let resultado =
  preco <= 100 ? "Ta barato pra caramba" : "Vish, ta caro pra caramba";
console.log("preço:", preco, "-", resultado);

// o código acima, faz exatamente a mesma coisa que o código abaixo

if (preco <= 100) {
  resultado = "ta barato";
} else {
  resultadp = "vish, ta caro";
}
