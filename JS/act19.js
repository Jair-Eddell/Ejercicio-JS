function filtrarPares() {
    let numeros = document.getElementById("numeros").value.split(',').map(Number);
    let pares = numeros.filter(num => num % 2 === 0);
    document.getElementById("resultado").innerText = "Números pares: " + pares.join(', ');
}
