const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá
${nome}!`

console.log(concatenacao, template)

//expressoes...

console.log(`1 + 1 = ${1 + 1}`)/*aqui é um exemplo de demonstrar uma soma
usa `` e ${ } pois vc faz a soma dentro das chames e o que estiver
antes fica como texto, so para exibir o que foi pedido, por exemplo
uma soma*/

const up = s => s.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)

//vc pode usar esses comandos para deixar uma grase em letras maiuscula
