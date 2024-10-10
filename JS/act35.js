const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        
        return a / b;
    }
};

console.log(calculadora.sumar(5, 3)); 
console.log(calculadora.restar(5, 3)); 
console.log(calculadora.multiplicar(5, 3)); 
console.log(calculadora.dividir(6, 2)); 
