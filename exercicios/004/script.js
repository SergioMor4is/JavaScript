function tabuada(){
    var number = document.getElementById('number').value
    var res = document.querySelector('div#res')
    var cont = 0
    res.innerHTML = ''
    if (number.value.length == 0) {
        window.alert('[ERRO] Informe Dados Válidos')

    } else {
        while (cont <= 10){
        var tab = number * cont
        res.innerHTML += `${number} x ${cont} = ${tab} <br>` 
        
        cont++
        }
    }
}