let nome = prompt('Digite seu nome')
let CPF = parseFloat(prompt('Digite seu CPF'))
let valorEmConta = 1400
let loop = true
do{
    let valorUsuario = parseFloat(prompt('Digite o valor desejado'))
    let opcao = prompt('Saque ou Deposito S/D')
    if(opcao == 'S' && valorUsuario <= valorEmConta){
        valorEmConta -=valorUsuario
    }else if (opcao == 'D' ){
        valorEmConta += valorUsuario
    }
    let escolhaFinal = prompt('Deseja continuar 1 para Sim e 2 para não')
    if(escolhaFinal === '1'){
        loop = true
    }else{
        loop = false
    }
    console.log('Valor final em conta '+valorEmConta)
    console.log('Valor inserido'+valorUsuario)


}while(loop)