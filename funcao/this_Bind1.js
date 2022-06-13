const pessoa = {
    saudacao: 'Bom diiaaaa!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //aqui temos conflito entre paradigmas: funcional e 00

//bind serve para amarrar a uma determinada função, this sempre sera a função que vc passou para o bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()