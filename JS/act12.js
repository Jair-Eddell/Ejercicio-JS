function verificarEdad() {
    let edad = document.getElementById("edad").value;
    let mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    document.getElementById("resultado").innerText = mensaje;
}
