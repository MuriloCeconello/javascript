var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var frase = document.getElementById('frase')
var body = document.getElementById('body')
var img = document.getElementById('image')
var title = document.getElementById('titulo')
var footer = document.getElementById('footer')

if (hora >= 5 && hora < 12) {
    frase.innerText = `Agora são ${hora}:${minutos}`
    body.style.background = '#F2BF80';
    img.src = 'images/here.png'

} else if (hora >= 12 && hora < 18) {
    frase.innerText = `Agora são ${hora}:${minutos}`
    body.style.background = '#cc772d';
    img.src = 'images/afternoon.png'

} else {
    frase.innerText = `Agora são ${hora}:${minutos}`
    body.style.background = '#023859'
    img.src = 'images/night.png'
    title.style.color = '#ffffff'
    footer.style.color = '#ffffff'

}
