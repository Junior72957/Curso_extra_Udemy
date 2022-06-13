const valor = 'Global'

function minhaFUncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFUncao()
}

exec()