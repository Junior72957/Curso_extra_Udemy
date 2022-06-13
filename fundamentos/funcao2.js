//armazenando uma função em uma variavel

const imprimirSOma = function (a, b){
    console.log(a + b)
}

imprimirSOma(2, 3)

//armazenando uma função arrow em uma variavel

const soma = (a, b) =>{ //=> substitui a palavra function
    return a + b
}
console.log(soma(2, 3))

//retorno implicito

const subtracao = (a, b) => a - b
// quando nao tem chaves significa q essa função so vai ter 1 linha

console.log(subtracao(2, 3))

// mais um exemplo reduzido

const imprimir2 = a => console.log(a)
imprimir2('legal, agora ta mais reduzido')