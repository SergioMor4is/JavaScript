let num = [2, 4, 6, 8, 5]

num.push(1)
num.sort()

console.log (`O Vetor possui os elementos [${num}].`)
console.log (`Com ${num.length} elementos.`)
console.log (`O primeiro elemento é ${num[0]}.`)

/*for(let pos=0; pos < num.length; pos++){
    console.log(num[pos])
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}