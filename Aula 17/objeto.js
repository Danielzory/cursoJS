let amigo = {nome:'José',
Sexo:'M',
Peso:'85.2',
engordar(p=0){
    console.log('Engordou')
    this.Peso += p
}}
console.log(typeof amigo)
//let arrayamigo = []
//console.log(typeof arrayamigo)
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.Peso} Kg`)