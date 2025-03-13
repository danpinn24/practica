
import promptSync from 'prompt-sync';
const prompt = promptSync();

function regresiva() {
 let num 
 num = Number(prompt("Número:"));
for (let i = num; i >=0; i--) {
    console.log(i);
    
}
    
}
//console.log(regresiva());

function fizzbuzz() {

    for (let i = 1; i <= 50; i++) {
        if (i%3===0) {
            console.log("fizz"+i);
            
        }
        else if (i%5===0) {
            console.log("buzz"+i);
            
        }
            
    else {
        console.log("fizzbuzz"+i);
        
    }
    
}
}

//console.log(fizzbuzz())

function quini() {

    for (let i = 0; i <= 500; i++) {
       // console.log(i);//
        if (i%4===0) {
            console.log(`Multi4 ${i}`);
            
            
        } else {
          console.log(`Multi9 ${i}`);
          
        }
        
        if (i % 5 === 0) {
            console.log("------------------------------");
    }
    
}
}
console.log(quini());
