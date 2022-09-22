function tabuada(){
    var number = document.getElementById('number').value
    var res = document.querySelector('div#res')
    var cont = 0

    while (cont <= 10){
        var tab = number * cont
        res.innerHTML += `${number} x ${cont} = ${tab} <br>` 
        
        cont++
    }
}