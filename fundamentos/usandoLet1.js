var numero = 1 
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//ele procura a variavel do escopo menor
//ele da preferencia pelo escopo menor, senao vai para o mais abrangente
//variaveis definidas com var = tem escopo global e função
//variaveis definidas com let = tem escopo de função e escopo de bloco
// e isso faz toda diferença