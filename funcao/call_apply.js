function getPreco(imposto = 0, moeda = 'R$') {
    return`${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 19900, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, 'R$'))
console.log(getPreco.apply(carro, [0.17, 'R$']))
console.log(getPreco.apply(global, [0.17, 'R$']))

//call passa os parametros diretamente dentro da função
// apply passa os paramentros usando ARRAY