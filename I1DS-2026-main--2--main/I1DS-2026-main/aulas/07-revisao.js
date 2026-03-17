// comentário em linha

/*
  comentário de varias linhas
  Bloco de codigo
*/

// imprimir informações na tela
console.log("imprime informações na telas");

/*
 Declaração de variáveis
 sitaxe: let tipo-variavel = valor-variavel;
 exemplo: let idade = 45
 */
/*
 tipos dados primários:
 numeros inteiros (int) = 10
 numeros decimais (double) = 8.53
 caracteres ALfanumeros (string) = "Luis"
 numeros Booleanos (Bool) = false
 */
let idade = 16;
let salario = 10000;
let ehprofessor = false;
let nome = "poyo";

console.log("nome: ", nome, "idade: ", idade, "salário: ", salario);

/*
 Operadores Matemáticos
 + -> Adição
 - -> Subtração
 * -> Multiplicação
 /-> divisão
*/

let num1 = 10;
let num2 = 2;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

// Imprimir as operações
console.log("Somando ", num1, "+", num2, "=", soma);
console.log("O resto da Divisão do ", num1, "por", num2, " = ", restoDivisao);

/*
  Operadores de comparação
  == => Comparação de igualdade 
  != => diferente
  > -> maior que
  < -> menor que
  >= -> maior ou igual
  <= -> ,menor ou igual
  === -> exatamente igual (Valor e tipo de variavel)

  retorna 'true' ou 'false' | Verdadeiro ou falso
  */

console.log("O numero 1 é igual ao numero 2?", num1 == num2);
console.log("O numero 1 é maior ou igual ao numero 2?", num1 >= num2);
console.log("O numero 1 é menor que o numero 2?", num1 < num2);

/*
  Operdores lógicos

  && (AND "E") -> Retorna verdadeiro se todas as clausulas forem verdadeiras
  || (OR "Ou") -> Retorna verdadeiro se ao uma das clausulas forem verdadeiras
  | (not "navegação") -> Operador de navegação (inverte o valor lógico)
  */

let sexo = "Feminino";
let idadeAluno = 17;

console.log("É sexo Masculino ou tem 17 ou mais anos de idade? ",(sexo == "Masculino") || (idadeAluno >= 17));

console.log("É sexo Masculino e tem 17 ou mais anos de idade? ",(sexo == "Masculino") && (idadeAluno >= 17));

console.log("É sexo Masculino e tem 17 ou mais anos de idade? ",!((sexo == "Masculino") && (idadeAluno >= 17)));

// Concatenando strings (somando texto)

let n1 = "20";
let n2 = 10;

console.log(n1+n2);
console.log("20"+n2);

var primeiroNome = "Cristiano";
var sobreNome = " de Paula";

console.log(primeiroNome+sobreNome);
