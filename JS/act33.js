class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

const persona1 = new Persona('Jair', 30);
persona1.saludar(); 