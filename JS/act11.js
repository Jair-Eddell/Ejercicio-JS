function saludar() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = "Hola, " + nombre + "!";
    document.getElementById("saludo").innerText = mensaje;
}
