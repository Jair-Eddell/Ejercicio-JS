function findMinMax() {
    const input = document.getElementById('numberArray').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        document.getElementById('result').innerText = 'Por favor, introduce un array válido de números.';
        return;
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    document.getElementById('result').innerText = `El valor más pequeño es: ${min}, y el más grande es: ${max}`;
}
