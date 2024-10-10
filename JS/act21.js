function cambiarNombre() {
    let persona = {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid"
    };

    persona.nombre = "Carlos";

    let resultado = `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`;
    document.getElementById("resultado").innerText = resultado;
}
