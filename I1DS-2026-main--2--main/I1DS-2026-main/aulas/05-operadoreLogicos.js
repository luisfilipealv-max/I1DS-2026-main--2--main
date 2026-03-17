// Operadores Lógicos
let souPobre = true;

console.log("Sou pobre?", souPobre);
console.log("Negação de souPobre:", !souPobre);

let manha = true;
let sono = true;
console.log("-------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);

// Comparador E (AND) e OU (OR)
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

manha = false;
console.log("-------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);

// Comparador E (AND) e OU (OR)
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);

sono = false;
console.log("-------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);

// Comparador E (AND) e OU (OR)
console.log("Operador AND (E):", manha && sono);
console.log("Operador OR (OU):", manha || sono);
