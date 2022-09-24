function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('dia')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'midia/dia-600.png'
        document.body.style.background = ''
    } else if (hora >= 12 && hora <18) {
        // Boa Tarde
        img.src = 'midia/tarde-600.png'
        document.body.style.background = ''
    } else {
        //Boa Noite
        img.src = 'midia/noite-600.png'
    }
}