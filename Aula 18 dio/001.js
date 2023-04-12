//Função Anonima
const soma = function (a,b){
    return a + b
}

console.log (soma(3,1)) //passar dois números como parametros 

//Função auto invocável
const soma2 = (
    function (a,b){
        
        return a + b;
    }
)(1,2)
console.log(soma2)

//Callback

const calc = function (op, num1, num2){
    return op(num1,num2)
}
const soma3 = function (num1, num2){
    return num1 + num2
}
const sub = function (num1, num2){
    return num1 - num2
}

const resSoma = calc (soma3, 1, 2)
const resSub = calc (sub, 1, 2)

console.log (resSoma)
console.log(resSub)
