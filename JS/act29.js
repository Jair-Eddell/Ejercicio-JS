function contarVocales() {
    const palabra = document.getElementById('texto').value;
    const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ'; 
    let contador = 0;

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    document.getElementById('resultado').innerText = `La palabra "${palabra}" tiene ${contador} vocales.`;
}
