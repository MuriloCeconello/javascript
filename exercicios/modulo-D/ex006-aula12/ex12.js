var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

if (hora >= 0 && hora <= 23.59) {
    console.log(`Agora são exatamente ${hora}:${minutos} horas.`)
    if (hora < 6) {
        console.log('Boa madrugada')

    } else if (hora < 12) {8
        console.log('Bom dia')

    } else if (hora < 18) {
        console.log('Boa tarde')

    } else {
        console.log('Boa noite')

    }
}else{
    console.log('Digite uma horário existente')
}