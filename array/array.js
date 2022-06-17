let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Junior'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort() //causa alteração no array em ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados=['Bia ', 'carlos', 'ana' ]
aprovados.splice(1,  0, 'elemento1', 'elemento2') //depois do primeir elemento, o numero seguinte significa quantos ele vai excluir depois. e o que escrever depois, adiciona.
console.log(aprovados)
console.log(aprovados.length)