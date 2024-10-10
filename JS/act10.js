let array = ["Ana", "Luis", "Carlos", "María", "Pedro"];

        function modificarArray() {
            // Obtener el valor del campo de entrada
            let nuevoNombre = document.getElementById("nuevoNombre").value;

            // Modificar el tercer valor del array
            array[2] = nuevoNombre;

            // Mostrar el array completo modificado
            console.log(array)
        }