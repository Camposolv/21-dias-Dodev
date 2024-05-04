let idadeUsuario
let nomeUsuario
let salarioUsuario
let continuar
do{
    idadeUsuario = Number(prompt('Digite sua idade'))
    nomeUsuario  = prompt('Digite seu nome')
    salarioUsuario = Number(prompt('Digite seu salário'))
   let correcao = prompt('digite S/N para confirmar as informações '+nomeUsuario +' '+idadeUsuario+' '+salarioUsuario)
   if(correcao == 'N'){
    continuar = true
   }else if(correcao == 'S'){
    continuar = false
   }
}while(continuar)
let aumento1 = 0.015
for(let ano = 1; ano<=10; ano ++  ){
    salarioUsuario += salarioUsuario * aumento1
    aumento1 *= 2
    console.log(('2024 '+ano)+ ' = R$ '+salarioUsuario)
}
