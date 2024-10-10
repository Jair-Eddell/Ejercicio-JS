function calcularPromedio(array) {
    if (array.length === 0) return 0; 
    let suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
}

function calcularPromedio() {
    let input = document.getElementById("numeros").value;
    let numerosArray = input.split(',').map(num => {
        let parsedNum = parseFloat(num.trim());
        return isNaN(parsedNum) ? null : parsedNum;
    }).filter(num => num !== null);
    
    if (numerosArray.length === 0) {
        document.getElementById("resultado").innerText = "Por favor, ingresa al menos un número válido.";
    } else {
        let resultado = calcularPromedio(numerosArray);
        document.getElementById("resultado").innerText = `El promedio es: ${resultado}`;
    }
}
