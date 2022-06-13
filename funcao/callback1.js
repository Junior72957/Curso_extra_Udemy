const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprmir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprmir)
//esse é igual o debaixo, porem o de baixo é mais facil...
/*fabricantes.forEach(function(a) {
    console.log(a)
})*/
fabricantes.forEach(fabricante => console.log(fabricante))

//callback é como se fosse um loop, ele acessa o array e puxa os elementos.

