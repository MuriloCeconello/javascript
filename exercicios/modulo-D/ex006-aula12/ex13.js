var agora = new Date()
var diaSem = agora.getDay()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()

switch (diaSem) {
    case 0:
        console.log(`Hoje é Domingo dia ${dia}/${mes}/${ano}`)
        break
    case 1:
        console.log(`Hoje é Segunda-Feira dia ${dia}/${mes}/${ano}`)
        break
    case 2:
        console.log(`Hoje é Terça-Feira dia ${dia}/${mes}/${ano}`)
        break
    case 3:
        console.log(`Hoje é Quarta-Feira dia ${dia}/${mes}/${ano}`)
        break
    case 4:
        console.log(`Hoje é Quinta-Feira dia ${dia}/${mes}/${ano}`)
        break
    case 5:
        console.log(`Hoje é Sexta-Feira dia ${dia}/${mes}/${ano}`)
        break
    case 6:
        console.log(`Hoje é Sábado dia ${dia}/${mes}/${ano}`)
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}