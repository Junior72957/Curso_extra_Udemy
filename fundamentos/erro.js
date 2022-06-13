function tratarErroELancar(erro){
    //throw 10
    //throw true
    //throw 'o suporte ja foi contactado'
    throw{
        nome: erro.nome,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {     
        console.log(obj.name.toUpperCase() + '!!!')     //touppercase deixa maiusculo
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)