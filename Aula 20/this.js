const pessoa = {
    firstName: 'José',
    lastName: 'Dacota',
    id: 12,
    idade: 22,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }

}

console.log(pessoa.fullName())

console.log(pessoa.getId())
 
//this só

console.log(this)

// this em evento repete na tela o código do elemento onde esta inserido 
//Aplicando call
function niver (){
    return this.idade += 1
}

  niver.call(pessoa);
console.log(pessoa.idade)

