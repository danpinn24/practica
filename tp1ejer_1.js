const prompt = require('prompt-sync')();


function datos1() {
    console.log("Ingrese su nombre y apellido para continuar");
    let nombre = prompt("Nombre:")
    let apellido = prompt ("apellido:")
    return "Ha ingresado sus datos de manera exitosa" + " " + nombre + " " + apellido;
    
}

console.log(datos1());
/////////////////////////////////////////////////////////

function datos2() {
    console.log("Ingrese su nombre y edad para continuar");
    let nombre = prompt("Nombre:");
    let edad = prompt("Edad:")
    return "Ha ingresado los datos correctamente. Nombre:" + nombre + "Edad:" + edad;
    
}
console.log(datos2());
/////////////////////////////////////////////////////////
    function sumas() {
    let continuar=1;
        while (continuar === 1){
        console.log("Ingrese los numeros que desea sumar");
        let num1 = parseInt(prompt("Num1:"));
        let num2 = parseInt(prompt ("Num2:"));
     let suma = num1 + num2
    
    console.log("Resultado" + suma );
     
     continuar = parseInt(prompt("¿Desea continuar? Ingrese 1 para sí o 0 para salir: "));
    }
  return("SALIENDO....");
 
    }    
console.log(sumas())


/////////////////////////////////////////////////////////

function calculadora(num1,num2) {
   let suma = num1 + num2
   let resta= num1 - num2
   let multi= num1 * num2
   let div= num1/num2

   return "Resultados:\n" +
   "Suma: " + suma + "\n" +
   "Resta: " + resta + "\n" +
   "Multiplicación: " + multi + "\n" +
   "División: " + div;
}

console.log(calculadora(31,5));


/////////////////////////////////////////////////////////


