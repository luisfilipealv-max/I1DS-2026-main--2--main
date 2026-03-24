// Laço de repeteção . FOR (PARA)
// O professor te colocou de castigo e pediu para voce escrever mil vezes a frase
// "Eu vou prestar atenção as aulas e anotar tudo!"

//, i++ == i = 1+1
// let 1 = 0 => primeiro utilizo uma variavel de controle
//i++ => aumenta a variavel de controle para não trazer e somar
for (let i = 0; i < 1000; i++) {
  console.log("eu vou prestar atenção as aulas e anotar tudo|");
}

// escreva todos os números de 1 a 20
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
console.log("-----------------------------------------------------");

// outra solição de números pares
for (let i = 1; i < 20; i++) {
  if (i % 2 == 0) console.log(1);
  // % => resto da divisão
  // 1 % 2 => se o resto da divisão de 1 por 2 for 0, ele mostra!
}

// Dado um vetor, calcule e exiba o somatório de seus elementos
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2]; 
let soma = 0;

console.log(numeros.length) 
           // numeros.length => mostra a quantidade do itens do array
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);