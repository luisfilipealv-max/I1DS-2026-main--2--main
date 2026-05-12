let userCount = 0; // Contador

const cadastrar = (event) => {
  // Parar a propagação padrão do evento
  event.preventDefault();
  // Capturar os valores do elementos por Id
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  // Capturando o elemento de lista por Id
  let lista = document.getElementById("lista");

  userCount++; // Acrescer o contador em
  let id = userCount; // Criar um novo elemento <li>Nome - Email</li>
  let novoItem = document.createElement("li");
  novoItem.innerHTML = `${id} - ${nome} - ${email} - <p onClick=editar(${id}) class='btn'>Editar</p> - <p onClick=excluir(${id}) class='btn'>Excluir</p>`;

  // Adicionar o novo item na lista ja existente
  lista.appendChild(novoItem);

  // Limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
};

const editar = (id) => {
  const lista = document.getElementById("lista");
  const itens = document.querySelectorAll("li");
  itens.forEach((item) => {
    if (item.innerHTML.includes(id)) {
      // recuperar o texto do item
      // cortar a string e variaveis nome e email
      let nome = item.innerHTML.split(" - ")[3];
      let email = item.innerHTML.split(" - ")[2];

      document.getElementById("nome").value = nome;
      document.getElementById("email").value = email;
    }
  });
};

// Função Escluir
const excluir = (id) => {
  const lista = document.getElementById("lista");
  const itens = document.querySelectorAll("li");

  itens.forEach((item) => {
    if (item.innerHTML.includes(id)) {
      item.remove();
    }
  });
};

let produtos = [];
let totalGeral = 0;

const adicionarProduto = () => {
  let nome = document.getElementById("produto").value;

  let qtd = parseInt(document.getElementById("quantidade").value);

  let valor = parseFloat(document.getElementById("valor").value);

  // VALIDAR
  if (!nome || !qtd || !valor) {
    alert("Preencha todos os campos");
    return;
  }

  // TOTAL DO PRODUTO
  let total = qtd * valor;

  // SOMAR TOTAL GERAL
  totalGeral += total;

  // ADICIONAR NO ARRAY
  produtos.push({
    nome,
    qtd,
    valor,
    total,
  });

  atualizarTabela();

  // LIMPAR CAMPOS
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";
};

const atualizarTabela = () => {
  let tbody = document.querySelector("#tabelaProdutos tbody");

  tbody.innerHTML = "";

  produtos.forEach((item) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.qtd}</td>
        <td>R$ ${item.valor.toFixed(2)}</td>
        <td>R$ ${item.total.toFixed(2)}</td>
      </tr>
    `;
  });
};
const finalizarCompra = () => {
  document.getElementById("total").innerText =
    totalGeral.toFixed(2);
}
// APLICAR DESCONTO

const aplicarDesconto = () => {
  // Captura o desconto em reais
  let descontoReais =
    parseFloat(document.getElementById("descontoValor").value) || 0;

  // Captura o desconto em porcentagem
  let descontoPorcentagem =
    parseFloat(document.getElementById("descontoPercentual").value) || 0;

  let valorFinal = totalGeral;

  // DESCONTO EM PORCENTAGEM

  // Verifica se foi digitado algum %
  if (descontoPorcentagem > 0) {
    // Calcula o valor do desconto
    let valorDesconto = totalGeral * (descontoPorcentagem / 100);

    // Subtrai do valor final
    valorFinal -= valorDesconto;
  }

  // DESCONTO EM REAIS

  // Verifica se foi digitado desconto em reais
  if (descontoReais > 0) {
    // Subtrai do valor final
    valorFinal -= descontoReais;
  }

  // EVITAR VALOR NEGATIVO

  // Se o valor final ficar menor que 0
  if (valorFinal < 0) {
    // Define como 0
    valorFinal = 0;
  }

  // MOSTRAR VALOR FINAL

  // Mostra o valor líquido na tela
  document.getElementById("valorLiquido").innerText = valorFinal.toFixed(2);
};