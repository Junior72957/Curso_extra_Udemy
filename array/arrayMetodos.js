const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro! (remove o ultimo elemento)
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro
console.log(pilotos)

//splice pode adicionar e remover

//adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//removendo
pilotos.splice(3, 1) //massa quebrou novamente:/ 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array (pega do numero pra frente)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Pega o primeiro e para no penultimo definido
console.log(algunsPilotos2)