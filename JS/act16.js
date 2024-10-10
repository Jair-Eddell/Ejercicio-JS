function verificarPalindromo() {
    let palabra = document.getElementById("palabra").value;
    let palabraReversa = palabra.split('').reverse().join('');
    let resultado = palabra === palabraReversa ? "La palabra es un palíndromo." : "La palabra no es un palíndromo.";
    document.getElementById("resultado").innerText = resultado;
}
