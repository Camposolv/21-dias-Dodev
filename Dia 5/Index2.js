let escolha = parseInt(prompt('Deseja abastecer com gasolina,alcool ou calibrar os pneus ? Digite um 2 ou 3 respectivamente'));
//Variáveis em escopo global (litros e quantidade), praticando escopo
let  litros
let quantidade
switch(escolha){
    case 1 : 
        console.log('Preço por litro da Gasolina: 5 R$')
        quantidade = parseInt(prompt('Qual valor deseja abastecer ?'))
        litros = (quantidade/5)
        console.log('Quantidade em litros abastecida foi : '+litros+' litros abastecidos')
        break;
    case 2 :
        console.log('Preço por litro do Alcool: 3 R$');
        quantidade = parseInt(prompt('Qual valor deseja abastecer ?'))
        litros = (quantidade/3)
        console.log('Quantidade em litros abastecida foi : '+litros+' litros abastecidos')
        break;
    case 3 :
        console.log('Pneus calibrados com sucesso')
        break;
    default : 
        console.log('Opção Inexistente')
        break;
}
