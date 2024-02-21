let students = [
    {
        name: 'Romeu',
        n1: 10,
        n2: 10
    },

    {
        name: 'Eloisa',
        n1: 10,
        n2: 9
    },

    {
        name: 'Debóra',
        n1: 8,
        n2: 7
    },

    {
        name: 'João',
        n1: 7,
        n2: 6
    }
]

for(let student of students){
    let media = average(student.n1, student.n2)
    let result = media >= 7

    if(result){
        alert(`A média do(a) aluno(a) ${student.name} foi de: ${media}. \nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else{
        alert(`A média do(a) aluno(a) ${student.name} foi de: ${media} \nNão foi dessa vez, ${student.name}. Tente novamente da próxima vez.`)
    }
}

function average(nota1, nota2){
    let media = (nota1 + nota2) / 2
    return media
}