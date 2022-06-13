// par nome/valor

const saudacao = 'Opa' //contexto léxico (local fisico que foi definido a varial)

function exec() {
    const saudacao = 'fala' // contexto léxico 2
    return saudacao
}
// objeto sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua resende costa',
        numero: 168
    }
} 

console.log(saudacao)
console.log(exec())  //lembrar de colocar () quando puxar o nome da função
console.log(cliente)

