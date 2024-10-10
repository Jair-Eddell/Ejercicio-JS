function invertirArray() {
    let elementos = document.getElementById("elementos").value.split(',');
    let arrayInvertido = elementos.reverse();
    document.getElementById("resultado").innerText = "Array invertido: " + arrayInvertido.join(', ');
}
