/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

var frutas = ["Banana", "Maçã", "Pera", " Uva", "Morango"];

// imprimir dados em forma de linha
console.table(frutas);
//imprimir dados em forma de tabela
console.table(frutas);

//push -> adicione um novo elemento ao final da lista
frutas.push("Tangerina");
console.table(frutas);

//push -> adicione um novo elemento ao final da lista
frutas.push("Goiaba");
console.table(frutas);

// imprimir elemento a partir do indice
console.log(frutas[5]);

// splice -> remove um elemento a partir de um indice
frutas.splice(4, 1); // remove somente o quarto item da lista
console.table(frutas);
console.log("o vetor agora tem", frutas.length, "elementos");

// splice -> remove um elemento a partir de um indice
frutas.splice(3, 1); // remove somente o terceiro item da lista
console.table(frutas);
console.log("o vetor agora tem", frutas.length, "elementos");

// unshft -> adicione um novo elemento ao inicio da lista
frutas.unshift("Goiaba");
console.table(frutas);

// splice -> remove um elemento a partir de um indice
frutas.splice(5, 1); // remove somente o quinto item da lista
console.table(frutas);
console.log("o vetor agora tem", frutas.length, "elementos");

// slice -> Criar uma cópia do Vetor remove 2,3,4 da lista
let novaLista = frutas.slice(); // Cópia completa do vetor dinos
console.table(novaLista);

let listaParcial = frutas.slice(2,5); // Cria uma cópia do vetor dinos a partir do indice onde começa e onde termina a copia
console.table(listaParcial);
