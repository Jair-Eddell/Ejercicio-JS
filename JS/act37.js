function agregarElemento() {
    const lista = document.getElementById('miLista');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerText = 'Elemento';
    lista.appendChild(nuevoElemento);
}
