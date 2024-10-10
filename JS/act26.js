function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * factorial(numero - 1);
}

function calcularFactorial() {
    let numero = parseInt(document.getElementById("numero").value);
    if (numero < 0) {
        document.getElementById("resultado").innerText = "Por favor, introduce un número no negativo.";
    } else {
        let resultado = factorial(numero);
        document.getElementById("resultado").innerText = `El factorial de ${numero} es: ${resultado}`;
    }
}
