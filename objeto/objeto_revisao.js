//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 65,
        endereco: {
            logadouro:'Rua ABC',
            numero: 168
        }
    },
    condurotes: [ {
        nome: 'Junior',
        idade: 22,
    
    }, {
        nome: 'Ana',
        idade: 35
    
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logadouro'] = 'Av Gigante'
console.log(carro)

delete carro.calcularValorSeguro
//delete carro.condurotes
//delete carro.proprietario.endereco
console.log(carro)