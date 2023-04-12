var now = new Date()
var hora = now.getHours()
console.log (`agora são exatamente ${hora} horas.`)
if (hora <= 12){
    console.log('Bom dia, flor do dia')
}
else if(hora > 12 && hora <18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
} 