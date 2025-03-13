const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////

function addNumbers() {
    let num1= Number(prompt("Numero 1:"));
    let num2= Number(prompt("Numero 2:"));
    let suma=  num1+num2
    return "EL resultado" + suma 
}

console.log(addNumbers());

///////////////////////////////////////////////////////

function areaOfRectangle() {
let largo= Number(prompt("largo:"));
let ancho= Number(prompt("ancho:"));
let areaRec= largo*ancho 
return "EL resultado del area del rectangulo" + areaRec
}

console.log((areaOfRectangle()));

///////////////////////////////////////////////////////

function perimetroOfRectangle() {
    let largo= Number(prompt("largo:"));
    let ancho= Number(prompt("ancho:"));
    let perimetro= (largo+ancho)*2
    return "El perimetro" + perimetro 
    
}
console.log(perimetroOfRectangle());

///////////////////////////////////////////////////////

function volumenDeRectPrism() {
let largo= 10
let ancho= 2
let alto= 3
let volumen= largo*ancho*alto

return "El volumen del prisma" + volumen 

}

console.log(volumenDeRectPrism());


///////////////////////////////////////////////////////

function areaOfCircle() {
let pi= Math.PI
let radio= Number(prompt());
let area= pi*radio*radio
return area + "area del circulo"
}

console.log(areaOfCircle());

////////////////////////////////////////////////////////