let array = ["manzana", "banana", "naranja"];

function agregarElemento() {
    let nuevoElemento = document.getElementById("elemento").value;
    array.push(nuevoElemento);
    mostrarResultado();
}

function eliminarElemento() {
    array.pop();
    mostrarResultado();
}

function mostrarResultado() {
    document.getElementById("resultado").innerText = "Array actual: " + array.join(', ');
}
