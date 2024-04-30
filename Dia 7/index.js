//Tive Dificuldade para Fazer, preciso revisar  lógica ausada
let mediaGeral = 0
let qtdHomem = 0
let mulheresAcimade7 = 0
let maiorNotaHomens = 0
let contador = 1
let nota 
let sexo
//nota e sexo
while (contador <= 10){
    nota = parseFloat(prompt('Digite a nota do '+contador+' aluno'))
    sexo = prompt('Digite o sexo do aluno')
   if( sexo == 'M'){
    if(nota > maiorNotaHomens){
        maiorNotaHomens = nota 
    }
    qtdHomem++
   }
   if(sexo == 'f'&& nota > 7){
    mulheresAcimade7++
   }

mediaGeral += nota
contador++
} 
mediaGeral = mediaGeral / 10
console.log('A media geral dos alunos foram '+mediaGeral)
console.log('A quantidade de Homens cadastrados foram '+qtdHomem)
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: '+mulheresAcimade7)
console.log('A maior nota entre os homens foi: '+ maiorNotaHomens)

