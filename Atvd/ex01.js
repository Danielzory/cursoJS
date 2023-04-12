const aluno = [
    {
        nome: 'Dan',
        nota: 8,
        turma: '1b'
    },
    {
        nome: 'Katy',
        nota: 9,
        turma: '2b'
    },
    {
        nome: 'Philip',
        nota: 5,
        turma: '1c'
    },
]


function checaAluno (arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i]            //utilizando object destructing (era arr[i].nota e arr[i].nome)
    if (nota >= media){
        aprovados.push(nome)
    }
  }

  return aprovados
} 

console.log(checaAluno(aluno, 6))