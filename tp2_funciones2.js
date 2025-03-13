const prompt = require('prompt-sync')();

function circumOfCircle() {

let pi= Math.PI
let radio= Number(prompt("radio:"))
let circunsferencia= 2*radio*pi 
    return circunsferencia + "circunsferencia circulo"

}

console.log(circumOfCircle());




/*
7. La densidad de una sustancia se calcula de la siguiente manera: densidad = masa/volumen. 
Escribe una función que calcule la densidad.
8. La velocidad se calcula dividiendo la distancia total recorrida por un objeto en movimiento 
entre el tiempo total empleado. Escribe una función que calcule la velocidad de un objeto 
en movimiento.
9. El peso de una sustancia se calcula de la siguiente manera: peso = masa x gravedad. Escribe 
una función que calcule el peso.
10. La temperatura en oC se puede convertir a oF usando esta fórmula: oF = (oC x 9/5) + 32. 
Escriba una función que convierta oC a oF convertCelsiusToFahrenheit.*/