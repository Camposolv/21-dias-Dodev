let num1 = parseInt(prompt('Digite o Primeiro Número'));
let num2 = parseInt(prompt('Digite o Segundo Número'));
let operacao = parseInt(prompt('Esta é sua Calculadora, deseja somar, multiplicar ou subtrair ? Digite 1,2 ou 3 respectivamente'));
//Iniciando o Switch case para a calculadora 
//Criando variavel resultado no escopo global para melhor utilização da mesma dentro do switch case 
let resultado
switch(operacao){
    case 1 :
        resultado = num1+ num2
        console.log('O resultado da soma de '+num1+' + '+num2+' é '+resultado);
        break;
    case 2 :
         resultado = num1 * num2
         console.log('O resultado da multiplicação de '+num1+' x '+num2+' é '+resultado);
        break;
    case 3:
        resultado = num1 - num2
        console.log('O resultado da subtração de '+num1+'-'+num2+' é '+resultado);
        break;
    default:
        console.log('Default') 
        break;
}  