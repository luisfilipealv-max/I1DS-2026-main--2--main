// criando variáveis do tipo array (vetor)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Brontossauro"];

// Imprimindo os dados em formas de linha
console.log(dinos);
// Imprimuindo os dados em forma de tabelas
console.table(dinos);

// lengthm -> "Tamanho" do Array (quantidade de elementos)
console.log("O vetor tem", dinos.length, "elementos");

// imprimir Elementos a partir do indice
console.log(dinos[2]);

// push -> Adiciona um novo elemento ao final da fila
dinos.push("Anquilossaouro");
console.log("O Vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// Obter um elemento a partir do indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição;", dinos[2]);
console.log("20ª posição (não existe):", dinos[20]);

// pop -> remover um elemento do final do vetor(ultimo elemento)
dinos.pop();
console.log(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// shift -> remover um elemento do inicio do vetor (primeiro elemento)
dinos.shift();
console.log(dinos);
console.log("o vetor agora tem", dinos.length, "elemento");

// splice -> remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluido a partir do indice.
dinos.splice(1, 1); // remove somente o segundo item da lista
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// Adicionar mais elemento ao vetor
dinos.push("Pteroldáctilo");
dinos.push("Estegossauro");
dinos.push("Argentonossauro");

// procurar u elemento a partir do nome (descrição)
//indexOf (procurando)-> retorna ao indice do elemento no vetor
let procurando = "Estegossauro";
let indice = dinos.indexOf(procurando);
console.log("o ", procurando, "está no indice:", indice);

// Excluir um elemento com base em seu nome
// 1º localizar o indice do elemento a partir do nome
// 2º excluir o registro com base no indice retornando

procurado = "Estegossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);
dinos.splice(indice, 1);
console.table(dinos);

// Alterar o valor de um elemento a partir do Indice
dinos[1] = "Anquilossauro";
console.table(dinos);

// slice -> Criar uma cópia do Vetor
let novaLista = dinos.slice(); // Cópia completa do vetor dinos
console.table(novaLista);


let listaParcial = dinos.slice(1, 3); // Cria uma cópia do vetor dinos a partir do indice onde começa e onde termina a copia
console.table(listaParcial);
