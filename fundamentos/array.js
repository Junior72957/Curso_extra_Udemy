const valores = [7.7, 8.9, 6.3, 9.2] //isso é uma array

console.log(valores[0], valores[3]) //para acessar um elemento especifico no array
console.log(valores[4]) //estou tentando acessar um array q nao tem

valores[4] = 10 //para adicionar novos elementos

console.log(valores)
console.log(valores.length) //para saber quantos itens tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
//push serve para adicionar novos elementos no array

console.log(valores.pop()) //serve para tirar o ultimo elemento do array
//console.log(valores)
delete valores[0] //para deletar um elemento do array
console.log(valores)

console.log(typeof valores) //array é objeto




