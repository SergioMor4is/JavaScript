function carregar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os daods inseridos')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 18) {
                
                img.setAttribute('src', 'midia/jovem.jpg')
            } else if (idade < 45){
                
                img.setAttribute('src', 'midia/homem.jpg')
            } else {
                
                img.setAttribute('src', 'midia/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade < 18) {
                
                img.setAttribute('src', 'midia/menina.jpg')
            } else if (idade < 45){
                
                img.setAttribute('src', 'midia/mulher.jpg')
            } else {
                
                img.setAttribute('src', 'midia/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}
