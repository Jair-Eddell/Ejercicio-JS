function buscarValor() {
    let array = ["manzana", "banana", "naranja", "kiwi", "fresa"];
    let valor = document.getElementById("valor").value;
    let posicion = array.indexOf(valor);
    let resultado = posicion !== -1 ? `El valor se encuentra en la posición: ${posicion}` : "El valor no se encuentra en el array.";
    document.getElementById("resultado").innerText = resultado;
}
