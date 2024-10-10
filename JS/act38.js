function eliminarUltimoElemento() {
    const lista = document.getElementById('miLista');
    const elementos = lista.getElementsByTagName('li');
    if (elementos.length > 0) {
        lista.removeChild(elementos[elementos.length - 1]);
    }
}
