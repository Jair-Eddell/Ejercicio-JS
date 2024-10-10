/* Crea un programa que verifique si un número es positivo,
negativo o cero, e imprima el resultado. */



function env(){
    let num =  parseFloat(document.getElementById("num1").value);

    if (num == 0) {
        console.log("es cero")
    }else if(num <= -1){
        console.log("Es negativo")
    }else{
        console.log("Es positivo")
    }
    
    
}

