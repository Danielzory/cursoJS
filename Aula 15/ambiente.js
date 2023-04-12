let num = [5,8,2,9,3]

console.log(`Nosso vetor é o ${num}`)

//acrecentando um valor ao array

num[5] = 6

//adiciona elemento no final do array

num.push(7) 

console.log(`Nosso vetor atualizado é ${num}`)

// mostrando comprimento do array

console.log(`Nosso vetor tem ${num.length} elementos`)

//Organizando itens do array em ordem crescente

console.log(`Nosso Vetor em ordem crescente é ${num.sort()}`)

//Usando um array junto com loop

for(let i = 0; i < num.length; i++){
    console.log (`A posição ${i} tem valor ${num[i]}`)
}
