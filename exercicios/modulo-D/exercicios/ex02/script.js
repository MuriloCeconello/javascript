function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoNasc = document.getElementById('anonasc')
    var res = document.getElementById('res')
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var genero = document.getElementsByName('genero')
        var idade = anoAtual - Number(anoNasc.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (genero[0].checked) {
            sexo = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/criança-M.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovem-M.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto-M.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/idoso-M.png')
            }
        } else {
            sexo = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/criança-F.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovem-F.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto-F.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/idoso-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}

