let nome 
let idade
let peso
let altura 
let profissao
let IMC
let anoNasc
nome = prompt('Digite seu nome ')
idade = prompt ('Digite sua idade')
peso = parseFloat(prompt('Digite seu peso '))
altura = parseFloat(prompt('Digite sua altura, EX: 1.1.89'))
profissao = prompt('Digite sua profissão')
console.log('Olá '+nome+' você tem '+idade+' anos '+' é '+profissao+', tem '+altura+'m de altura e pesa'+peso)
if(idade < 18){
    console.log('Está liberado para umas geladas')
}else{
    console.log('Sem gelada para você')
}
console.log('Sua idade em meses é '+(idade*12)+'sua idade em semanas é '+(idade*52)+'sua idade em dias é'+(idade*365))
console.log('Se você tem '+idade+' então você nasceu em '+(2024-idade))
IMC  = peso/(altura*altura)
if(IMC < 18.5){
    console.log('Magreza')
    console.log('Seu imc é'+IMC)
}else if(18.5 >= IMC <= 25.9){
    console.log('Normal')
    console.log('Seu imc é'+IMC)
}else if(24.9 >= IMC <=30){
    console.log('Sobrepeso')
    console.log('Seu imc é'+IMC)
}else if(IMC > 30){
    console.log('Obesidade')
}
anoNasc = 2024-idade
let anosVividos = anoNasc
let idadeAtual = 0

for(let anosVividos = anoNasc; anosVividos <= 2024; anosVividos++){
    console.log(anosVividos+' - '+idadeAtual+' anos de idade')
    idadeAtual++
}
