const pessoa = {
    nome: 'Paulo',
}
const arma = {
    nome: 'espada de pal',
}

function getSomething(){
    console.log(this.nome)
}

getSomething.call(pessoa)
getSomething.call(arma)

//Quando a função pede parametros

const valConst = {
    num1: 1,
    num2: 5,
};

function soma(a, b){
    console.log(this.num1 * this.num2 + a + b)
}

soma.call(valConst, 2, 8);

//Apply funciona igual ao Call a unica diferença é...

soma.apply(valConst, [2, 2]);
