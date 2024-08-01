function gerar() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert('Escolha um número!')
    } else {
        var n = Number(num.value)
        res.innerHTML = ''

        for (var conta = 1; conta <= 10; conta++) {
            var tabuada = document.createElement('option')
            tabuada.text = `${n} x ${conta} = ${n*conta}`
            tabuada.value = `tab${conta}`
            res.appendChild(tabuada)
        }
    }
}