document.addEventListener('keydown', function(event) {
    const output = document.getElementById('output');
    output.textContent = 'Tecla presionada: ' + event.key;
});
