// Atributos
let altura = 1.73, peso = 54;  // Altura en metros y peso en kilogramos

// Métodos
function calcularIMC(altura, peso){
    return peso / (altura * altura);   
}

function calcularFactorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i; // Multiplica el resultado por i
    }
    return resultado; // Devuelve el resultado correcto
}

// Función para convertir dólares a reales (cotización del dólar 4.80)
function convertirADolares(dolares){
    const cotizacion = 4.80;
    return dolares * cotizacion;
}

// Función para mostrar el área y perímetro de una sala rectangular
function salaRectangular(altura, anchura){
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}

// Función para mostrar el área y perímetro de una sala circular
function salaCircular(radio){
    const area = 3.14 * radio * radio;
    const perimetro = 2 * 3.14 * radio;
    console.log(`Área: ${area}, Perímetro: ${perimetro}`);
}

// Función para mostrar la tabla de multiplicar de un número
function tablaMultiplicar(numero){
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Función para mostrar los resultados
function mensajes(){
    console.log("IMC: " + calcularIMC(altura, peso));  // Pasando los parámetros
    console.log("Factorial de 5: " + calcularFactorial(5)); // Ejemplo de 5
    salaRectangular(5, 10);  // Ejemplo de altura 5 y anchura 10 para sala rectangular
    salaCircular(7);  // Ejemplo de radio 7 para sala circular
    tablaMultiplicar(3);  // Tabla de multiplicar del 3
}

mensajes();
