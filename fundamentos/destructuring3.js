function rand({min = 0, max = 1000}) { //rand gera um numero aleatorio
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)

}
const obj = { max: 50, min: 40} //gerar um valor entre 50 e 40)
console.log(rand(obj)) 
console.log(rand({min: 955})) //gera um valor acima de 955 entre 1000
console.log(rand({}))
