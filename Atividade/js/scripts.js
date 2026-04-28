const cadastrar = (event) => {
// Parar a propagação padrão do evento
event.preventDefault();
// Capturar os valores do elementos por Id
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let Editar = document.getElementById("Editar").value;
let Deletar = document.getElementById("Deletar").value;

userCount++;
let id = userCount;
// Capturando o elemento de lista por Id
let lista = document.getElementById("lista");
// Criar um novo elemento <li>Nome - Email</li>
let novoItem = document.createElement("li");
novoItem.innerHTML = `${id}
${nome} - ${email} - <p onClick=editar(${id})class='btn'>Editar</p> <p onClick=excluir(${id}) class='btn'>Excluir</p>';

// Adicionar o novo item na lista ja existente
lista.appendChild(novoItem);

// Limpar os campos
document.getElementById("nome").value = "";
document.getElementById("email").value = "";

//Editar os campos
document.getElementById("nome").value = nome;
document.getElementById("email").value = email;
};

const lista = document.getElementById("lista").value;
const editar = (id) => {
//buscar o conteudo do id na lista
//preencher os campos do formulario com os valores
};
const excluir = (id) => {
//buscar o conteudo do id na lista
// e remover o item
const lista = document.getElementById("lista");
const itens = document.getElementById("li");

itens.forEach((item) => {
if (item.innerHTML.includes(id)) {
item.remove();
}
});
};
