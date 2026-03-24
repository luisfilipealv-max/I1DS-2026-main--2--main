// operadores de incremento e decremento | pré e pós incremento
// incremento => SOMAR algo de alguma variável
// decremento => subtrair algo de alguma variável

let idade = 16;
console.log(idade);

// idade = idade + 1; // somei 1 na idade
idade++;
console.log(idade);
idade++;
console.log(idade);
console.log("------------------------------------------------");
// idade = idade - 1 // subtrai 1 na idade
idade--;
console.log(idade);
idade--;
console.log(idade);
console.log("-------------------------------------------------");


let novaIdade = idade + 1; // Idade++ soma na mesma variável 
console.log("Idade:", idade, "| Nova idade Idade:", novaIdade);

 novaIdade = ++ idade;
console.log("Idade:", idade, "| Nova idade Idade:", novaIdade);