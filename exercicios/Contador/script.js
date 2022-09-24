function somador() {
    let cont_i = document.getElementById('txtini')
    let cont_pas = document.getElementById('txtp')
    let cont_f = document.getElementById('txtf')
    let res = document.querySelector('div#res')

    if (cont_i.value.length == 0 || cont_f.value.length == 0 || cont_pas.value.    length == 0){

        window.alert('[ERRO] Dados Inválidos')

    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(cont_i.value)
        var f = Number(cont_f.value)
        var p = Number(cont_pas.value) 
        
        if(i < f) {
            //Contagem Crescente
            for(let c = i;  c <= f ; c += p) {
            res.innerHTML += ` ${c} \u{27A1}` 
            }

        } else {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{27A1}`
            }

        }   
    }

    

    


    
} 