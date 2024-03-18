//Armazenando informações nas variáveis
let fome =  parseInt(prompt('Está com fome ?, digite 1 para sim e 2 para não '));
let dinheiro = parseInt(prompt('Vc tem dinheiro ? digite 1 pra sim e 2 para não'));
let restaurante = parseInt(prompt('O restaurante está aberto ?digite 1 para sim e 2 para não'));
// Comparando os dados das variáveis para decidir onde o usuário irá comer.
 if(fome == 2 ||dinheiro == 2){
    console.log('Hoje a janta é em casa HAHA!')
 }else if(fome == 1 && dinheiro == 1 && restaurante == 2){
    console.log('Peça um delivery');
 }else{
    console.log('Hoje a janta é no seu restaurante preferido !')
 }
