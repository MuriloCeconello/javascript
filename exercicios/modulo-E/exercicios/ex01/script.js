function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Faltam Dados!!!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido!!  CONSIDERANDO PASSO 1')
            p = 1
        }


        if (i < f) {
            // Contagem crescente
            for (var conta = i; conta <= f; conta += p) {
                res.innerHTML += ` ${conta} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for (var conta = i; conta >= f; conta -= p) {
                res.innerHTML += ` ${conta} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
} 