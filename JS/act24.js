function sumar(a, b) {
    return a + b;
}

function calcularSuma() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = sumar(numero1, numero2);
    document.getElementById("resultado").innerText = "La suma es: " + resultado;
}
