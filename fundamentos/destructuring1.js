// novo recurso ES2015 

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 150
    }
}

const {nome , idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logadouro, numero, cep}} = pessoa
console.log(logadouro, numero, cep)


//esse codigo serve para desestruturar, 
//serve para puxar dados dentro de um bloco