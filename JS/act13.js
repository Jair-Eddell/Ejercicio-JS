function verificarNumero() {
    let numero = document.getElementById("numero").value;
    let mensaje = numero % 2 === 0 ? "El número es par." : "El número es impar.";
    document.getElementById("resultado").innerText = mensaje;
}
