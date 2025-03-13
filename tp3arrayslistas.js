/*.




16) Realiza un script que indique si dos listas contienen los mismos datos en las mismas 
ubicaciones, es decir si son idénticas.
17) Realiza un script que indique si dos listas contienen los mismos datos pero en ubicaciones 
distintas*/

import promptSync from 'prompt-sync';
const prompt = promptSync();


function palabritas() {
    let palabras=[]
    let palabrita
    console.log("Ingrese palabras hasta escribir salir");
    do {
        palabrita = (prompt("Palabra:"))
        if (palabrita!= "salir") {
            palabras.push(palabrita)
            
        }
        
        
    } while (palabrita!=="salir");
    return palabras
}

console.log(palabritas());



/*Realiza un script que solicite números al usuario correspondientes a notas de alumnos y los 
cargue en una lista. Luego debe calcular el promedio de las notas mayores a 7 y el promedio 
total.*/
/*
function promedio() {
    let notitas;
    let notas = [];
    let sumaTotal = 0;

    console.log("Ingrese las notas hasta escribir 'salir'");
    do {
        notitas = prompt("Nota (escribe 'salir' para terminar):");

        // Verificar si la entrada es "salir" antes de convertir a número
        if (notitas.toLowerCase() === "salir") {
            break; // Sale del bucle si el usuario escribe 'salir'
        }

        // Convertir la entrada a número y verificar si es un número válido
        if (isFinite(Number(notitas))) {
            notitas = parseFloat(notitas); // Convertir la entrada a número flotante
            notas.push(notitas);  // Agregar la nota válida a la lista
            sumaTotal += notitas; // Sumar la nota al total
        } else {
            console.log("Por favor ingrese un número válido.");
        }

    } while (true); // El bucle continuará hasta que se ingrese "salir"

    // Verificar si hay notas válidas ingresadas
    if (notas.length > 0) {
        let promedioTot = sumaTotal / notas.length; // Calcular el promedio
        return promedioTot.toFixed(2); // Devolver el promedio con dos decimales
    } else {
        return "No se ingresaron notas válidas.";
    }
}

console.log(promedio());*/




//11) Realiza un script que invierta los datos de un arreglo.//

/*function Invertidos() {

    let invert = [10,"casa",55,"perro",100,"tero"]
    let invertido=[]
    for (let i = invert.length -1; i >= 0;i--)
       invertido.push(invert[i])
        return invertido
    }
    
console.log(Invertidos());*/

//12) Realiza un script que dado una lista de números. Solicite un otro número al usuario e indique si 
//el número se encuentra en la lista.//


/*13) Como modificarías el ejercicio anterior para que devuelva la ubicación donde se encontraba el 
dato dentro de la lista?. En caso de no encontrarse indicarlo también.*/
function lista() {
    let num=[12,1,5,7,8,45,2]
    let numerito = (Number(prompt("Escriba el numero que esta en la lista:")));
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        if (element === numerito) {
           console.log("EL numero esta en la lista"+ "posicion" + [i]);
            
        } else {console.log(  "El  numero no esta en la lista"+"Posicion" + [i]);
      
        }
    }
}

console.log(lista());



/*14) Realiza un script que dada una lista de números devuelva el mayor y el menor de esa lista y 
donde se encuentra cada uno.*/

function mayorMenor() {
    let numeros = [100, 2, 5, 78, 65];
    let mayor = numeros[0];
    let menor = numeros[0];
    let posicionMayor = 0;
    let posicionMenor = 0;

    for (let i = 1; i < numeros.length; i++) {
        let num = numeros[i];

        if (num > mayor) {
            mayor = num;
            posicionMayor = i;
        }
        if (num < menor) {
            menor = num;
            posicionMenor = i;
        }
    }

    console.log("El número mayor es " + mayor + " y se encuentra en la posición " + posicionMayor);
    console.log("El número menor es " + menor + " y se encuentra en la posición " + posicionMenor);
}

mayorMenor();




/*15) Realiza un script que dada una lista de caracteres devuelva si la misma es un palindromo o no.*/


function palindromo() {
    let palin = ["r", "a", "d", "a", "r"];

    // Primer bucle recorre el arreglo desde el inicio hasta la mitad
    for (let i = 0; i < palin.length / 2; i++) {
        // Segundo bucle recorre el arreglo desde el final hacia el principio
        for (let j = palin.length - 1 - i; j < palin.length; j++) {
            if (palin[i] !== palin[j]) {
                console.log("No es un palíndromo");
                return; // Termina la función si no es un palíndromo
            }
            break;  // Salimos del segundo bucle después de una comparación
        }
    }
    console.log("Es un palíndromo");
}

palindromo();  // Llamada a la función para comprobar


