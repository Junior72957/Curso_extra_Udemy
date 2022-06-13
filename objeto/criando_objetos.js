// usando a notação literal
const obj1 = {}
console.log(obj1)

// object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1- desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notbook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salariobase, faltas) {
    return {
        nome,
        salariobase,
        faltas,
        getSalario() {
            return (salariobase / 30 * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)