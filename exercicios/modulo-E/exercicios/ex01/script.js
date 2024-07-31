var inicio = document.getElementById('txtinicio')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpasso')
var res = document.getElementById('res')
var emojipas = String.fromCharCode('U+1F449')

while(inicio <= fim){
    res.innerHTML = `${inicio}`
    res.innerText += `${emojipas}`
    passo++ 
}