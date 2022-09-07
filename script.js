

let A = prompt("Digite o primeiro valor")
let B = prompt("Digite o segundo valor")

console.log(retornarValue(A, B))

function retornarValue(a, b){
    if(a % 2 == 0 && b > 5){
        return true
    }

    else{
        return false
    }
}