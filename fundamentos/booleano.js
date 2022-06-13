let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo) //colocando 2x "!!"(negação) ele se transforma em verdade

console.log('os verdadeiros...') //tudo abaixo resolve verdadeiro
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //espaço vazio ou texto é verdadeiro
console.log(!![])
console.log(!!{})
console.log(!!Infinity) //tipo infinito divisao por zero
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')//string vazia é falsa
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa'))

let nome = '' //se colocar um nome aqui, imprime o nome, senao sai o desconhecido

console.log(nome || 'desconhecido')


