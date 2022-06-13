function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa


//self tbm substitui o bind, mas o bind vc so faz uma alteração
//o self tem q colocar em tudo.
