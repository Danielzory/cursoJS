let values = [5,9,2,7,4]

for (let i in values) {
    console.log(`A posição ${i} Tem valor ${values[i]}`)
}

//buscando valores dentro do array
let pos = values.indexOf(7)
console.log(`Esta na posição ${pos}`)
//caso o valor não exista vai retornar -1
let fail = values.indexOf(0)
console.log(`Esta na posição ${fail}`)

//é possível usar um if/else para fazer esta busca.