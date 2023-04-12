var agora = new Date()
var diaSem = agora.getDay()

/* Dias da semana para o JS
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/



switch(diaSem) {
    case 0:
        console.log('Hoje é domingo, aproveite o dia com a família')
        break
    case 1:
        console.log('Hoje é segunda, dia de estudar')
        break
    case 2:
        console.log('Hoje é terça, dia de estudar')
        break
    case 3:
        console.log('Hoje é quarta, dia de estudar')
        break
    case 4:
        console.log('Hoje é quinta, dia de estudar')
        break
    case 5:
        console.log('Sextou! pode jogar um pouco, mas depois volta a estudar')  
        break
    case 6:
        console.log('Hoje é sábado, dia de curtir')       
        break
    default:
        console.log('[Erro] Acho que você inventou um dia na semana')
        break                   

}