const pessoas = [
    {
        nome:'Diego',
        idade: 15
    },
    {
        nome: 'Maria',
        idade: 20
    },
    {
        nome: 'Pedro',
        idade: 10
    }
]

function calcIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá 
    ${this.idade + anos}
     anos de idade.`
}

console.log(calcIdade.call(pessoas[1], 5))