function exemplo (palavra){

    for(letra of palavra){
        console.log(letra);
    }
}

function exemplo2 (nums){

    for(num of nums){
        console.log(num)
    }
}
const palavra = 'Abaxaqui';
const nums = [10, 20, 30, 'fim']

exemplo(palavra)
exemplo2(nums)

//do while

function exDoWhile(){
    let num = 66

    do{
        console.log(num)
        num++
    }while (num <= 5)
}

exDoWhile()