let exercicios = parseInt(prompt('Digite qual exercicio Realizar'))
let numeros = []
let contadorArray = 0
let InvertidoArray = []
let contadorArrayInvertido = 4
switch(exercicios){
    case 1 :
         let continuar = Boolean
        while(continuar){//Exibindo Array com seus respectivos numeros em seus indices 
            let NumeroUsuario = parseInt(prompt(('Digite o Número para popular o Array')))
            numeros[contadorArray] = NumeroUsuario
            contadorArray++
            if(contadorArray == 10){
                continuar = false
            }
        }
        console.log(numeros)
        break;
    case 2 :
        let continuar2 = Boolean
        while (continuar2){//Lógica para popular um array e em seguida exibir os numeros em sequencia invertida
            let NumeroUsuario2 = parseInt(prompt('Digite seu número para popular o array'))
            numeros [contadorArray] = NumeroUsuario2 
            InvertidoArray[contadorArrayInvertido]= NumeroUsuario2
            contadorArrayInvertido--
            contadorArray++
            if(contadorArrayInvertido == -1){
                continuar2 = false
            }

        }
        console.log (numeros)
        console.log(InvertidoArray) 
        break;

    case 3:
        let continuar3 = Boolean
        let tamanhoArray = parseInt((prompt('Type the array length')))
        while(continuar3){//Exibindo O array de forma invertida, mas dessa vez o Usuario decide quando vai parar
            let NumeroUsuario3 = parseInt(prompt('Type the Numbers to fil the Array'))
            numeros[contadorArray] = NumeroUsuario3
            InvertidoArray[contadorArrayInvertido]= NumeroUsuario3 
            contadorArray++
            contadorArrayInvertido--
            if(contadorArray == tamanhoArray ){
                continuar3 = false
            }
        }
        console.log (numeros)
        console.log(InvertidoArray) 
        break;
    
        default:
            alert('Wrong option, please recharge the page')
} 
