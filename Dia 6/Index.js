let EscolhaUsuario = parseInt(prompt('Digite de 1 a 3 para escolher qual programa executar'))
switch(EscolhaUsuario){
   case 1: 
     let programa1 = parseInt('Digite o numero desejado');
      for(let contador = 0;contador <= programa1; contador ++ ){
         console.log('Exibindo contagem de 0 até o Número recebido')
         console.log(contador)
      }
   break;
   case 2:
      let numero5em5 = 50
         for(let contador = 0;contador <= numero5em5; contador += 5 ){
            console.log('Exibindo contagem de 0 a 50 de 5 em 5');
      }
   break;
   case 3: 
   let numero5em5Invertido = 0
      for(let contador = 50; contador == numero5em5Invertido; contador-=5){
         console.log('Exibindo contagem Invertida de 50 a 0 de 5 em 5')
         console.log(contador)
      }
   break;
}