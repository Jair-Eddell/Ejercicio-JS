function esPar(numero) {
    return numero % 2 === 0;
}

function verificarPar() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = esPar(numero);
    document.getElementById("resultado").innerText = resultado ? "El número es par." : "El número es impar.";
}
