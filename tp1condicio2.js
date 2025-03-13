const prompt = require('prompt-sync')();


function operaciones() {

    console.log("Ingrese los numeros:");
    let num1 = Number(prompt("Numero 1:"));
    let num2 = Number(prompt("Numero 2:"));
    let num3 = Number(prompt("Numero 3:"));
    let num4 = Number(prompt("Numero 4:"));

    let suma = num1+num2+num3+num4

    let multi= num1*num2*num3*num4

    if (suma>30 && multi<400) {
        return "Los numeros ingresados son correctos"
    } else { return "Los numeros ingresados son INCORRECTOS"
        
    }
}

console.log(operaciones());


/////////////////////////////////////////////////

function operacionesNue() {

    console.log("Ingrese los numeros:");
    let num1 = Number(prompt("Numero 1:"));
    let num2 = Number(prompt("Numero 2:"));
    let num3 = Number(prompt("Numero 3:"));
    let num4 = Number(prompt("Numero 4:"));

    let suma = num1+num2+num3+num4

    let multi= num1*num2*num3*num4

    if (suma>30) {
        return "La suma se cumple"
    } else {    "La suma no se cumple"
    }
    if (multi<400) {
        return "La multiplicacion se cumple" 
    } else { "La multiplicacion no se cumple"
    }
    if (suma>30 && multi<400) {
        return "Los numeros ingresados son correctos"
    } else { return "Los numeros ingresados son INCORRECTOS"
        
    }
}

console.log(operacionesNue());

function operacionesNuevo() {
    console.log("Ingrese los numeros:");
    let num1 = Number(prompt("Numero 1:"));
    let num2 = Number(prompt("Numero 2:"));
    let num3 = Number(prompt("Numero 3:"));
    let num4 = Number(prompt("Numero 4:"));

    let suma = num1 + num2 + num3 + num4;
    let multi = num1 * num2 * num3 * num4;

    let mensajeSuma = suma > 30 ? "La suma se cumple" : "La suma no se cumple";
    let mensajeMulti = multi < 400 ? "La multiplicación se cumple" : "La multiplicación no se cumple";

    if (suma > 30 && multi < 400) {
        return "Los números ingresados son correctos";
    } else if (suma <= 30 && multi >= 400) {
        return "Ninguna de las dos condiciones se cumplen: " + mensajeSuma + " y " + mensajeMulti;
    } else if (suma <= 30) {
        return mensajeSuma;
    } else {
        return mensajeMulti;
    }
}

console.log(operacionesNuevo());

