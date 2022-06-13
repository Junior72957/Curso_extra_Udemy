//função é bloco de codigo nomeado

//função sem retorno
function imprimirSoma(a, b) {

    console.log(a + b)

}
imprimirSoma(2, 3)

imprimirSoma(2)
imprimirSoma(2, 5, 7, 9)
//javascript é doido

imprimirSoma()

//função com retorno

function soma(a, b = 0) {

    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //aqui vai retornar o valor que foi definido no 'b' 
//se mudar o valor de b vai mudar o valor a ser exibido
console.log()
//aqui nao vai da nada, pq o a nao foi definido




