// factory 

function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notbook', 1999.99))
console.log(criarProduto('Iphone', 4999.80))