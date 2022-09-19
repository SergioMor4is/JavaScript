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
                //Jovem
                img.setAttribute('src', '002\midia\young_man_250')
            } else if (idade < 45){
                //Adulto
                img.setAttribute('src', '002\midia\man_250')
            } else {
                //Idoso
                img.setAttribute('src', '002\midia\old_man_250')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 18) {
                //Jovem
                img.setAttribute('src', '002\midia\young_woman_250')
            } else if (idade < 45){
                //Adulto
                img.setAttribute('src', '002\midia\woman_250')
            } else {
                //Idoso
                img.setAttribute('src', '002\midia\old_woman_250')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}
