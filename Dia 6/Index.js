let escolha = Number(prompt('Digite 1 para o exercicio 1, 2 para o exercicio 2 e 3 para o exercicio 3'));
//Utilizando o Switch Case para o usuário navegar entre os exercicios
switch(escolha){
    case 1 :
        let numero1 = parseInt(prompt('Digite seu número'));
        for(contadorCase1=0; contadorCase1 <= numero1; contadorCase1++){
            console.log('Exibindo contagem de 0 até o Número desejado');
            console.log(contadorCase1); 
        }
        break;
    case 2 :
        for (contadorCase2 = 0; contadorCase2<55;contadorCase2+=5){
            console.log(contadorCase2);  
        }
        break;
    case 3 :
        for (contadorCase3 = 50;contadorCase3 >=0 ;contadorCase3-=5){
            console.log(contadorCase3)
        }
        break;
    case 4:
        let numero2 = parseInt(prompt('Digite um número'))
        for(let i = numero2;i<= numero2 + 2;i++){//ENQUANTO I FOR MENOR QUE O NUMERO DO USUARIO + 2, INCREMENTA + 1 Á VARIAVEL I
            console.log('Tabuada do número: '+i)
            for (let contadorCase4 = 0;contadorCase4<=10;contadorCase4++){//ENQUANTO O CONTADOR CASE 4 FOR MENOR QUE 10, INCREMENTA 1 A VARIAVEL
                console.log(i+ ' X '+ contadorCase4+' = '+(i*contadorCase4)) //I X CONTADOR CASE 4 = I *CONTADOR CASE 4
            }
        }
        break;
    default :
        console.log('Digite um Número de 1 a 4')
        break;
}
