const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5 ) {
    break //age em cima do bloco mais perto dele, tipo for, while e switch
    }
    console.log(`${x} = ${nums[x]}`)    
}
console.log('...')

for (y in nums) {
    if (y == 5) {
        continue //esse aqui ele interrompe a execução atual e pula. tipo definimos pra chegar no 5 e pular ele. 
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log('...')

externo: for (a in nums) {
    for (b in nums){
        if(a == 2 && b ==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
