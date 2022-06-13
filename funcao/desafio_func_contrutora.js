// function

function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('João')
p1.falar()


//factory

class Pessoa1{
    constructor(nome1  ) {
        this.nome1  = nome1 
    }
    falar() {
        console.log(`Meu nome é ${this.nome1}`)
    }
}

const p2 = new Pessoa1 ('João')
p1.falar()