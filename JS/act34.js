class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    imprimirGrado() {
        console.log(`Estudio en el grado: ${this.grado}.`);
    }
}

const estudiante1 = new Estudiante('Ana', 20, 'Segundo año');
estudiante1.saludar();
estudiante1.imprimirGrado(); 
