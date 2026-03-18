function Notas(notas) {
  if (notas < 5) {
    return "Reprovado";
  } else if (notas < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(Notas(5));
console.log(Notas(7));

// parte 02- solução + parte extra
function situaçãofinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;

  if (media < 5) {
    return "reprovado";
  } else if (media < 7) {
    return " recuperação";
  } else {
    return "Aprovado";
  }
}
console.log(situaçãofinal(7, 6, 5));
console.log(situaçãofinal(7, 7, 7));
console.log("------------------------------------------------------");
// parte 03 - solução + parte extra

function final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "reprovado";
  else if (media < 7) situacao = "recuperação";
  else situacao = "Aprovado";

  return "média: " + media + " - Situação: " + situacao;
}

console.log(final(7, 8, 6, 5));
