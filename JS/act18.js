function sumarArray() {
    let numeros = document.getElementById("numeros").value.split(',').map(Number);
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    document.getElementById("resultado").innerText = "Suma total: " + suma;
}
