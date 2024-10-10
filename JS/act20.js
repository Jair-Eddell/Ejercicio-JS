function mostrarCoche() {
    let coche = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020
    };

    let resultado = `Marca: ${coche.marca}, Modelo: ${coche.modelo}, Año: ${coche.año}`;
    document.getElementById("resultado").innerText = resultado;
}
