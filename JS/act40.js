document.getElementById('miFormulario').addEventListener('submit', function(event) {
    const campos = this.elements;
    let valido = true;

    for (let i = 0; i < campos.length; i++) {
        if (campos[i].type !== 'submit' && campos[i].value === '') {
            valido = false;
            break;
        }
    }

    if (!valido) {
        event.preventDefault();
        alert('Por favor, completa todos los campos.');
    }
});
