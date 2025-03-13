
import promptSync from 'prompt-sync';
const prompt = promptSync();


function edad() {
    console.log ("Por favor ingrese su edad para continuar")
    let edad= parseInt(prompt("edad:"));
    if (edad>=18) {
        return"ingreso exitoso";
        
    } else {
        return "No puede continuar";
    }
}
console.log(edad());

//////////////////////////////////////////////////

function ordenNum() {
    console.log("Ingrese los numeros que desea comparar");
    let num1 = Number(prompt("num1:"));
    let num2 = Number(prompt("num2:"));
    
    

    if (num1>num2) {
    return "Num1 es el mayor" + num1 + "\n" +
     "Num2 es el menor" + num2 
            
}
    else {  return  "Num1 es el menor" + num1 + "\n" +
                    "Num2 es el mayor" + num2 ;
    

    }
}

console.log(ordenNum());

//////////////////////////////////////////////////

function compararNumeros(num1, num2, num3) {
    let mayor, medio, menor;
    
    if (num1 > num2) {  
        if (num1 > num3) {
            mayor = num1;
            if (num2 > num3) {
                medio = num2;
                menor = num3;
            } else {
                medio = num3;
                menor = num2;
            }
        } else {
            mayor = num3;
            medio = num1;
            menor = num2;
        }
    } else {  
        if (num2 > num3) {
            mayor = num2;
            if (num1 > num3) {
                medio = num1;
                menor = num3;
            } else {
                medio = num3;
                menor = num1;
            }
        } else {
            mayor = num3;
            medio = num2;
            menor = num1;
        }
    }

    console.log("Mayor:", mayor);
    console.log("Medio:", medio);
    console.log("Menor:", menor);
}

console.log(compararNumeros(2,88,10));


export{ordenNum}