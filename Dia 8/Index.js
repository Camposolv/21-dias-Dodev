
function calculadora(num1, num2, operador){
    let results
    num1 = parseInt(prompt('digite o primeiro numero'))
    num2 = parseInt(prompt('Digite o segundo numero'))
    operador = prompt('Qual operação deseja realizar')
    if(operador == '/'){
       results = (num1/num2)
       console.log(results)
       return results
    }else if (operador == '*'){
        results = (num1*num2)
        console.log(results)
        return results
    }else if(operador == '+'){
        results = (num1+num2)
        alert(results)
        return results
    }else if(operador == 'e' ){ 
        for(let i = 0; i < num2; i++){
            results = num1 
           results = results * num1
        }
        console.log (results)
        return results

    }
}
 calculadora()