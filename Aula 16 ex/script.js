var number = []
let res = document.getElementById('res')
function add() {
    
    let txtne = document.getElementById('txtn')
    let list = document.getElementById('list')
    let n = Number (txtne.value)
    let check = number.indexOf(n)
    
    if (n < 1 || n > 100){
        window.alert('Informe um número dentro do intervalo solicitado')
    }else if (check >= 0) {
        window.alert('Este número já foi inserido')
    }else{
        number.push(n)
        let e = document.createElement('option')
        e.text = `Número ${n} inserido`
        list.appendChild(e)
        res.innerHTML = ''
        
    }
    txtn.value = ""
    txtn.focus()
}

function info() {
    if (number.length == 0){
        window.alert('Adcione valores antes de finalizar')
    }else{
        let max = number[0]
        let min = number[0]
        let soma = 0
        let media = 0
        for (let pos in number){
            soma += number[pos]
            if (number[pos] > max){
                max = number[pos]
            }
            if(number[pos] < min){
                min = number[pos]
            }
            media = number[pos] / number.length
        }


        res.innerHTML = `Sua lista tem ${number.length} números`
        res.innerHTML += `<p>O maior número da sua lista é ${max}</p>`
        res.innerHTML += `<p>O menor número da sua lista é ${min}</p>`
        res.innerHTML += `<p>A soma dos números da sua lista é  igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos números de sua lista é igual a ${media}</p>`
    }



    
    
    


    
    
   

}
