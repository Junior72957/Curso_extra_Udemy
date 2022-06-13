const a = {name: 'teste'}

console.log(a)

const b = a 
//atribuição por referencia
b.name = 'opa'

console.log(b)
console.log(a)

let c = 3
let d = c //copia por valor
d++
console.log(d)
console.log(c)

let valor //nao incializada

console.log(valor)

valor = null  //ausencia de valor
console.log(valor) //sempre use nulo caso queira zerar uma variavel

//console.log(valor.toString()) >vai da erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
//use null para zerar algo

console.log(!!produto.preco)
console.log(produto)

