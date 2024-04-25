//Recebendo informações do usuário através das variáveis
let nome = prompt('Digite Seu nome');
let idade = parseInt(prompt('Digite sua idade'));
let altura = parseFloat(prompt('Digite sua altura '));
let peso = parseFloat(prompt('Digite seu peso'));
//calculando ano de nascimento e Imc do usuário
idade = (2024-idade);
let Imc = peso/(altura * altura)
parseInt(Imc)
// exibindo no console a idade e peso do usuário
console.log('Olá '+nome+' sua idade é '+idade+' sua altura é '+ altura+ ' seu imc é '+Imc);