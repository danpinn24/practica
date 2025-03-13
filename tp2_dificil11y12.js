//const prompt = require('prompt-sync')();//
import promptSync from 'prompt-sync';
const prompt = promptSync();


function IMC() {
let peso =Number(prompt("Su peso en kilogramos:"))
let altura =Number(prompt("Su altura en metros:"))   

if (peso<=0 && altura<0){
    console.log("Los numeros ingresados no son validos");
}

let bmi= peso/(altura*altura)
if (bmi<18.5) {
    console.log("Bajo peso");        
} 
else if (bmi>18.5 && bmi<24.9) {
    console.log("peso normal");
}
else if (bmi>25 && bmi<29.9) {
    console.log("sobrepeso");

}
else{
    return "Obeso";
}
}
//console.log(IMC());

/////////////////////////////////////////////////////////////////////

function checkSeason(){
    
let mes=prompt("Ingrese un mes:").toLowerCase()  
let verano = ["enero", "febrero", "marzo"];
let primavera = ["octubre", "noviembre", "diciembre"];
let otono = ["junio", "abril", "mayo"];
let invierno = ["septiembre", "julio", "agosto"];

if(verano.includes(mes)){
    return "verano"  
}else if (primavera.includes(mes)){
    return "primavera" 
}else if (otono.includes(mes)){    
    return "otono"
}else if (invierno.includes(mes)){
    return "invierno"
} else {
    return "Mes invalido"
}
}

//console.log(checkSeason());

////////////////////////////////////////////////////////////////////////

function categorias() {
let palabra=prompt("Ingrese una palabra:").toLowerCase()  
let animales = ["perro","gato","delfin","raton","loro"];
let ropa = ["remera","pantalon","gorra","camisa","zapatillas"];
let utiles = ["lapicera","cuaderno","lapiz","goma"];

if (animales.includes(palabra)) {
    return "La palabra es un animal"
} else if (ropa.includes(palabra)) {
    return "La palabra es ropa"
} else if (utiles.includes(palabra)) {
    return "La palabra es util"
} else {
    return "palabra INVÁLIDa"
}
}

console.log(categorias());


export {categorias}