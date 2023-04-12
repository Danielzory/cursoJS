/*
5! = 5x4x3x2x1
 ou
5! = 5x4!
*/

function fatorial(n) {
    if (n == 1){
        return 1
    }else{
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(3))

//Função recursiva é quando chamamos uma funcção dentro dela mesma