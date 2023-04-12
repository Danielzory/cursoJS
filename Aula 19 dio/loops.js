//Exemplo usando constantes para determinadas condições
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo){
        return "Negativo"
    }else if (!ehNegativo && maiorQueDez){
        return "Maior que 10"
    }
    return "Positivo"
}

console.log(numeroPositivo(2))
// exemplo for
function multPorDois(arr) {
    let multiplicador = []

    for(let i = 0; i < arr.length; i++) {
        multiplicador.push(arr[i] * 2);
    }
    return multiplicador;
}
 const meusNumeros = [2, 22, 55, 100]
 console.log(multPorDois(meusNumeros))

 // for in

 function exemplo (obj) {
    for (prop in obj){
        console.log(prop)
    }
 }
 function exemplo2 (obj) {
    for (prop in obj){
        console.log(obj[prop])
    }

 }
 const meuObjeto = {
    nome: 'Daniel',
    idade: '27',
    Cidade: 'Norte'
 }

 exemplo(meuObjeto)
 exemplo2(meuObjeto)