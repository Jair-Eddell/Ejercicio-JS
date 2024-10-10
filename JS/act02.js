/* Crea un programa que sume, reste, multiplique y
divida dos números y muestre el resultado en la consola. */


function env(){
    
    let num1 =  parseFloat(document.getElementById("num1").value);

    let num2 =  parseFloat(document.getElementById("num2").value);
    console.log('----',num2)
//let num2 = parseInt(document.getElementById("num2"))
    let resultadoS = num1 + num2
    let resultadoR = num1 - num2
    let resultadoM = num1 * num2
    let resultadoD = num1 / num2

    console.log("los resultados son: La suma es :" + resultadoS + "La resta es: " + resultadoR + "La multiplicacion es : " + resultadoM + "La divicion es: " + resultadoD  )
    console.log(typeof num2)
}