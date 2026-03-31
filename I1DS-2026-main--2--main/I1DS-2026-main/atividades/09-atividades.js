var nome = "José"
var idade = 17;
var cidade = "Jahu"
console.log("Meu nome é" , nome,", tenho", idade, "anos e moro em", cidade);

console.log("----------------------------------------------");

let num1 = 9;
let num2 = 5;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

console.log("O resultado da Soma é", soma);
console.log("O resultado da subtração é", subtracao);
console.log("O resultado da multiplicação é", multiplicacao);
console.log("O resultado da Divisão é", divisao);
console.log("O resultado do Resto da Divisão é", restoDivisao);

console.log("----------------------------------------------");

function calcularArea(largura, altura) {
return largura * altura;
}

let largura = 15
let altura = 7

let area = calcularArea(largura, altura);
console.log("A Aréa de um retangulo é", area);

console.log("----------------------------------------------");

function calcularVolume(Comprimento, largura, altura) {
return Comprimento * largura * altura;
}
let Comprimento = 6;
let Largura = 5;
let Altura = 4;

let volume = calcularVolume(Comprimento, Largura, Altura);
console.log("Volume do paralelepípedo:", volume);

console.log("----------------------------------------------");

let valor = 100;
let desconto = 10 / 100;

console.log(
"O valor do produto com o desconto foi:",
valor - valor * desconto,
"Reias",
);

console.log("--------------------------------------------------");


function converterCelsiusParaFahrenheit(celsius) {
let fahrenheit = celsius * 1.8 + 32;
return fahrenheit;
}

let temperaturaC = 25;
let temperaturaF = converterCelsiusParaFahrenheit(temperaturaC);

console.log(`${temperaturaC}°C é igual a ${temperaturaF}°F`);

console.log("--------------------------------------------------");


let peso = 67;
let ALtura = 167;

console.log("O IMC será", peso / (ALtura * ALtura));

console.log("--------------------------------------------------");


function final(n1, n2, n3) {
let media = (n1 + n2 + n3) / 3;
let situacao;

if (media < 5) situacao = "Recuperação";
else if (media < 7) situacao = "Recuperação";
else situacao = "Aprovado";

return "Média: " + media + " - situação: " + situacao;
}
console.log(final(7, 8, 6));

console.log("--------------------------------------------");


let a = 2;
let b = 3;
let c = -5;

let delta = Math.pow(b, 2) - 4 * a * c;

console.log("O valor de Delta é: " + delta);

console.log("--------------------------------------------")

let horas = 1

//11
let numero = -5;

if (numero > 0) {
    console.log("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("Número é zero");
}

console.log("----------------------------------");
//12
let num = 7;

if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}
 
console.log("----------------------------------");
//13
let nume = 9;

if (numero % 3 === 0) {
    console.log("É múltiplo de 3");
} else {
    console.log("Não é múltiplo de 3");
}
console.log("-----------------------------------");
//14
let nota = 6;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
console.log("------------------------------------");
//15
let Idade = 20;

if (Idade < 16) {
    console.log("Não pode votar");
} else if (Idade < 18) {
    console.log("Voto opcional");
} else if (Idade < 70) {
    console.log("Voto obrigatório");
} else {
    console.log("Voto opcional");
}

console.log("--------------------------------");
//16
let numer = 34

if (numer < 10){
console.log("Não está entre os selecionados");
} else if (numer >= 11) {
  console.log("Está entre os selecionados");
} else if (numer < 50) {
console.log("Está entre os selecionados");
} else if (numer >= 51) {
  console.log("Não está entre os selecionados");
} else {
}

console.log("-----------------------------------");

//17
const log = "toptop"
const sen = "75676"

let logUser = "toptop"
let senUser = "75676"

if (logUser == log && senUser == sen) {
  console.log("Login efetuado com sucesso!");
}

console.log("---------------------------------");
//18
let nume1 = 4;
let nume2 = 5;

if (nume1  > nume2) {
  console.log("O maior número é:", nume1);
} else if (nume2 > nume1) {
  console.log("O maior número é:", nume2);
} else {
  console.log("Os números são iguais");
}

console.log("------------------------------------------");

//19

let n1 = 5;
let n2 = 9;
let n3 = 7;

let maior;

if (n1 >= n2 && n1 >= n3) {
    console.log("Maior numero:", n1);
} else if (n2 >= n1 && n2 >= n3) {
    console.log("Maior numero:", n2);
} else {
    console.log("Maior numero:", n3)
}

console.log("Maior número:", n3);

console.log("------------------------------------------");
let mais = 0;

for (let i = 1; i <= 100; i++) {
  mais += i; // mesma coisa que soma = soma + i
}

console.log("Soma total:", mais);
//20
let idad = 30;

if (idad <= 12) {
  console.log("Criança");
} else if (idad <= 17) {
  console.log("Adolescente");
} else if (idad <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

console.log("-------------------------------------------");

//21

let dia = 7;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
}

console.log("---------------------------------------");

//22

let mes = 7;
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
}

console.log("---------------------------------------");

//23
let Mes = 11;
switch (Mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre");
    break;
  default:
}

console.log("-----------------------------------------");
//24
let opcao = 1; // escolha do usuário

let numero1 = 10;
let numero2 = 5;

switch (opcao) {
  case 1:
    console.log("Soma:", numero1 + numero2);
    break;

  case 2:
    console.log("Subtração:", numero1 - numero2);
    break;

  case 3:
    console.log("Multiplicação:", numero1 * numero2);
    break;

  case 4:
    console.log("Divisão:", numero1 / numero2);
    break;

  default:
    console.log("Opção inválida");
}
console.log("---------------------------------------------------");

//25
let notas = "A";

switch (notas) {
  case "A":
    console.log("Excelente");
    break;

  case "B":
    console.log("Bom");
    break;

  case "C":
    console.log("Regular");
    break;

  case "D":
    console.log("Ruim");
    break;

  default:
    console.log("Nota inválida");
}
console.log("-------------------------------------------");

//26
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("--------------------------------");
//27
for (let i = 100; i >= 1; i--) {
  console.log(i);
}
console.log("---------------------------------");
//28
for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

console.log("---------------------------------");

//29
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

console.log("---------------------------------");

//30
let Mais = 0;

for (let i = 1; i <= 100; i++) {
  mais += i; // mesma coisa que soma = soma + i
}

console.log("Soma total:", mais);

console.log("------------------------------------------");

//31.

function fatorial(n) {
let resultado = 1;

for (let i = 1; i <= n; i++) {
resultado *= i;
}

return resultado;
}

let Numero = 5;
console.log("Fatorial:", fatorial(numero));

console.log("-------------------------------------------")

//32.

function fatorial(n) {
if (n < 0) {
return "Número inválido";
}

let resultado = 1;

for (let i = 1; i <= n; i++) {
resultado *= i;
}

return resultado;
}

console.log(fatorial(5));

console.log("------------------------------------------");

//33.

for (let i = 0; i <= 100 ; i += 2) {
console.log(i);
}

console.log("Entre o 1 ao 100 tem 50 números pares.")

console.log("-------------------------------------------")

//34.

for (let i = 0; i <= 100; i++) {
if (i % 5 === 0) {
console.log(i);
}
}
console.log("-------------------------------------------")


//35.

for (let i = 1; i <= 5; i++) {
let linha = '';
for (let j = 1; j <= i; j++) {
linha += '*';
}
console.log(linha);
}

console.log("--------------------------------------------")

//36. Crie um vetor com 10 números e exiba todos.
const Numeros = [5, 6, 8, 9, 10, 11, 3, 21, 13,21];
for (let i = 0; i < Numeros.length; i++) {
    console.log(Numeros[i]);
}

console.log(
  "--------------------------Atividade37--------------------------------",
);
//37. Calcule a soma dos elementos do vetor.
var numerosVetor = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let somaVetor = 0;

for (let i = 0; i < numerosVetor.length; i++) {
  somaVetor += numerosVetor[i];
}

console.log(somaVetor);

console.log(
  "--------------------------Atividade38--------------------------------",
);
// 38. Calcule a média do vetor.
const VetorMedia = [12, 45, 78, 34, 89, 23, 56, 91, 10, 67];

const somaVetor1 = VetorMedia.reduce((total, atual) => total + atual, 0);
const mediaVetor = somaVetor1 / VetorMedia.length;

console.log(mediaVetor);

console.log(
  "--------------------------Atividade39--------------------------------",
);

const VetorMedia1 = [12, 45, 78, 2, 90, 33, 56, 8, 100, 21];

const maiorValor = Math.max(...VetorMedia1);

console.log(maiorValor);

console.log(
  "--------------------------Atividade40--------------------------------",
);

const VetorMedia2 = [10, 20, 30, 45, 5.5, 60, 77, 88, 90, 100];

const menorValor = Math.min(...VetorMedia2);

console.log(menorValor);


//41

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Quantidade de números pares:", pares);
console.log("Quantidade de números ímpares:", impares);

console.log("------------------------------------------");

//42

let vetor = [1, 2, 3, 4, 5];
let resultado = [];

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] !== undefined) {
        resultado[i] = vetor[i] * 2;
    }
}

console.table(resultado);
console.log("------------------------------------------");
//43
let MATRIZ = [
[7, 6, 5],
[8, 4, 6],
[2, 9, 1],
];
console.table(MATRIZ);

console.log("------------------------------------------");
//44
let matris = [
[7, 6 ,5],
[8, 4, 6],
[2, 9, 1],
];

console.log("A diagonal da matriz é:");
for (let i = 0; i < matris.length; i++) {
console.log(matris[i][i]);
}

console.log("------------------------------------------");

//45

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let tamanho = matriz.length;

for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        if (i + j === tamanho - 1) {
            console.log(matriz[i][j]);
        }
    }
}

let Matriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
];
console.table(MATRIZ)


console.log("------------------------------------------");

//48
let matriZ = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];


let x = 2;


console.log("MatriZ original:");
for (let i = 0; i < 3; i++) {
console.log(matriZ[i]);
}

// Multiplicar os valores
for (let linha = 0; linha < 3; linha++) {
for (let coluna = 0; coluna < 3; coluna++) {
matriZ[linha][coluna] = matriZ[linha][coluna] * x;
}
}

// Mostrar matriz depois
console.log("MatriZ depois da multiplicação:");
for (let linha = 0; linha < 3; linha++) {
console.log(matriZ[linha]);
}
