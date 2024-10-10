function verificarNumero() {
    let numero = document.getElementById("numero").value;
    let resultado = isNaN(numero) ? "Error: No es un número." : "El número es válido.";
    document.getElementById("resultado").innerText = resultado;
}
