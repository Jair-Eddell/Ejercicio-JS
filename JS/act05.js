/* 
Crea un programa que verifique si un número es positivo,
negativo o cero, e imprima el resultado. */

function env(){
    let num1 =  parseFloat(document.getElementById("num1").value);

    let num2 =  parseFloat(document.getElementById("num2").value);

    if (num1 == num2){
        console.log("Es igual")
    }else if (num1 > num2 && num2 < num1){
        console.log("El numero 1 es mayor")
    }else if(num1 < num2 && num2 > num1){
        console.log("El numero 2 es mayor")
    }

}