function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || = ou //se o trabalho1 for true, vamos tomar sorvete fds, senao nao
    const comprarTv50 = trabalho1 && trabalho2 // && = e //se os dois trabalhos derem certo = true // se o primeiro trabalho for falso, vai comprar tv de 32
    //const comprarTv32 = !!(trabalho1 ^trabalho2) //bitwise xor 
   const comprarTv32 = trabalho1 != trabalho2 // != = xor //
    const manterSaudavel = !comprarSorvete
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))