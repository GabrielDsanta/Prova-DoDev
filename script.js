

let value = prompt("Digite um valor inteiro e positivo")
if(value < 0){
    alert("Esse valor não é valido")
}

console.log(RetornarValue(value))

function RetornarValue(value){
    if(value % 2 == 0){
        return true
    }

    else{
        return false
    }
}