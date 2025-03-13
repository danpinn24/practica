
import promptSync from 'prompt-sync';
const prompt = promptSync();

function script() {
let palabras
let palabritas=[]
    do {
     palabras=prompt("Ingrese una palabra:").toLowerCase();
     if (palabras!== "fin")
     palabritas.push(palabras)
    
    } while (palabras !== "fin");
    return (`Las palabras son ${palabritas} y la cantidad son ${palabritas.length}`)
}

console.log(script());



/*8) Crea script para generar pirámide siguiente con los números del 1 al número que indique el 
usuario (no mayor de 50)
Ejemplo:
1
12
123
1234
12345
123456*/

function generarPiramide() {
    let numero = Number(prompt("Ingrese un número (no mayor de 50): "));


    for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
    }
}
console.log(generarPiramide());
