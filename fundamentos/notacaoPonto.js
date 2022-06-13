console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Objs(nome) {
    this.nome = nome //usando this, vc deixa a operação publica,
    this.exec = function(){  // sendo possivel acessar fora do {}
        console.log('Exec...')
    }                  
}

const obj2 = new Objs('cadeira')
const obj3 = new Objs('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()