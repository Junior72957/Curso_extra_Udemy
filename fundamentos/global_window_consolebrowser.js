let a = 3 //variavel local

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b) //igual window no console do navegador
console.log(this.c)
console.log(module.exports.c) //isso é igual a linha de cima
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var e let!

abc = 3 //não faça isso em casa. isso é uma variavel global no node
console.log(global.abc)