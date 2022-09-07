

let Array1 = []

Array1[0] = parseInt(prompt("Digite um valor"))
Array1[1] = parseInt(prompt("Digite um valor"))
Array1[2] = parseInt(prompt("Digite um valor"))

let A = Array1[0]
let B = Array1[1]
let C = Array1[2]

console.log(retornarArray(A, B, C))

function retornarArray(a, b, c){
            if(a > b){
                if(c > a){
                    if(c > b){
                        Array1[0] = b
                        Array1[1] = a
                        Array1[2] = c
                    }
                }
                
                else if(c < a){
                    if(c > b){
                        Array1[0] = b
                        Array1[1] = c
                        Array1[2] = a
                    }
        
                }
            }

            if(b > c){
                if(a > c){
                    if(b > a){
                        Array1[0] = c
                        Array1[1] = a
                        Array1[2] = b
                    }
                }
                
                else if(a < c){
                    if(b > a){
                        Array1[0] = a
                        Array1[1] = c
                        Array1[2] = b
                    }
        
                }
            }

            if(c > a){
                if(c > b){
                    if(b > a){
                        Array1[0] = a
                        Array1[1] = b
                        Array1[2] = c
                    }
                }
                
                else if(c < b){
                    if(b > a){
                        Array1[0] = a
                        Array1[1] = c
                        Array1[2] = b
                    }
        
                }
            }
            
    return Array1
}