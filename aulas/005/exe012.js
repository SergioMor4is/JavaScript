var idade = 62
if(idade > 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}

if(idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 60){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

