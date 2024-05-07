let nome  = []
let notas = []
let contadorArray = 0
let continuar = Boolean
let nomeAluno 
let notaAluno
let soma = 0
do{
    nomeAluno = (prompt('Digite o Nome do Aluno'))
    notaAluno = parseInt(prompt('Digite a Nota do aluno'))
    notas[contadorArray] = notaAluno
    soma += notaAluno
    nome[contadorArray] = nomeAluno
    contadorArray++
    let escolhaUsuario = parseFloat (prompt('Digite 1 para continuar e 2 para parar'))
    if(escolhaUsuario == 2){
        continuar = false
    }
}while(continuar)
    console.log(nome)
    console.log(notas)
    let media = soma/notas.length
    console.log(media)

