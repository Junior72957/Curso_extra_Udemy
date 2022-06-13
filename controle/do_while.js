function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //nao precisa atribuir um valor incial, pq ela sempre vai repetir pelo menos 1x
    do { //garante pelo menos 1 repetção 
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima!')
