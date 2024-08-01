var inicio = document.getElementById('txtinicio')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpasso')
var res = document.getElementById('res')
var emojipas = String.fromCharCode('U+1F449')
var emojifim = String.fromCharCode('🏁')

function contar() {
    while (inicio <= fim) {
        res.innerHTML = `${inicio} ${emojipas} ${emojifim}`
        inicio+=passo
        emojipas++
    }
}

