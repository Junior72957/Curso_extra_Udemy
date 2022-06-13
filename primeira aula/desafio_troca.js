let a = 7;
let b = 94;

console.log(a);
console.log(b);
// depois da troca a = 94 / b = 7

let temp = a;
a = b;
b = temp;

console.log("Mudando os numeros");

// [a,b] = [b,a] tambem serve

console.log(a);
console.log(b);