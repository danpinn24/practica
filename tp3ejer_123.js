/*

3) Realiza un script que muestre por pantalla los valores pares que se encuentran entre los 
números 500 y 1000*/


import promptSync from 'prompt-sync';
const prompt = promptSync();

function numer() {
let num
    do {
        console.log ("Por favor ingrese un número para continuar")
        num = Number(prompt("Número:"));


} while (num !== 0)
    return "SALIENDO";
    
}

console.log(numer());


function string() {
    let palabra
    let palabritas = []
    do {
    console.log ("Por favor ingrese una palabra para continuar")
    palabra = (prompt("palabra:"))
    if (palabra!== "cancelar") {
        
        palabritas.push(palabra)
        }

} while (palabra !== "cancelar")
    return "SALIENDO" + palabritas.join("-");
}
console.log(string());


function pares() {
let par=[]
    for (let i = 500; i < 1000; i++) {
        if (i % 2 === 0)
par.push(i)
        
    }
    return(par);
    
}

console.log(pares());
