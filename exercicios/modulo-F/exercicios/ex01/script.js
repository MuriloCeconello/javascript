var num = document.getElementById('txtnum')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function Numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (Numero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já digitado!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var position in valores){
            soma += valores[position]
            if(valores[position] > maior)
                maior = valores[position]
            if(valores[position] < menor)
                menor = valores[position]
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<p>A média dos valores digitados é ${media}`
    }
}