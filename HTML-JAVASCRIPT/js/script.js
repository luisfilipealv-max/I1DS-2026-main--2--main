/* Arrow function */
const olamundo = () => {
  alert("olamundo");
};

const mudartexto = () => {
  // criar uma variável para variar o elemento do documento

  let elementoalvo = document.getElementById("texto");

  document.getElementById("texto").innerHTML = "novo texto com js";
  document.getElementById("texto").style.color = "red";
  document.getElementById("texto").style.backgroudColor = "yellow";
};

const enviarNome = () => {
  let nomeDigitado = document.getElementById("nome").value;
  alert("Olá " + nomeDigitado);

  // let nomeDigitado = document.getElementsByName("nome").value;
  // alert("Olá " + nomeDigitado);
};


const somar = () => {
  event.preventDefault(); //
  // Buscou os elementos por ID
  let numero1 = document.getElementById("n1").value;
  let numero2 = parseInt(document.getElementById("n2").value);

  // Realizou a soma dos valores
  let result = parseInt(numero1) + numero2;
  // let result =  + numero2;

  // Devolveu o resultado para o formulario
  document.getElementById("resultado").innerHTML = result;
};
