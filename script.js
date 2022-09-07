

let value = prompt("Digite um valor inteiro e positivo")
if(value < 0){
    alert("Esse valor não é valido")
}

console.log(SumOfValues(value))

function SumOfValues(value){
    let total = 1
    for(let index = 1; index < value; index++){
        total = total + (index + 1)
    }
    return total
}