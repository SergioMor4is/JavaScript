var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são ${hora} horas e ${min} minutos`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
} 

