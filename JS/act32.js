const multiplicarPorDos = (numeros) => numeros.map(num => num * 2);

const mostrarResultado = () => {
    const input = document.getElementById('numeros').value;
    const numeros = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    const resultado = multiplicarPorDos(numeros);
    document.getElementById('resultado').innerText = `Resultado: [${resultado}]`;
};
