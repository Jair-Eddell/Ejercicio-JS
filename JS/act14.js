function convertir() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerText = `${celsius} °C es igual a ${fahrenheit} °F.`;
}
