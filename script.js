

let Array1 = []
let Array2 = []
let Array3 = []

for(let index = 0; index < 10; index ++){
    Array1[index] = prompt(`Digite o valor de numero ${index}`)
}

let LimiteInferior = prompt(`Defina um limite inferior`)
let LimiteSuperior = prompt(`Defina um limite superior`)

console.log(Exibir(LimiteInferior, LimiteSuperior))

function Exibir(LimiteInferior, LimiteSuperior){
    let contador = 0
    for(let index2 = 0; index2 < Array1.length; index2++){
        if(Array1[index2] >= LimiteInferior && Array1[index2] <= LimiteSuperior){
            Array2[contador] = Array1[index2]
            contador++
        }
    }
    return Array2
}