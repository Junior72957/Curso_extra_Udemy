console.log('01)', '1' == 1) //sim pois aqui ele so compara o conteudo
console.log('02)', '1' === 1) //ele é exatamente igual? nao pq um é string e o outro number
console.log ('03)', '3' != 3) //eles sao diferentes? nao 
console.log('04)', '3' !== 3) //essa maneira confere se é exatamente diferente (string/number)

console.log('05)', 3 <2)
console.log('06', 3<2)
console.log('07)', 3<=2)
console.log('08)', 3>=2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)