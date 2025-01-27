// Atributos
let numeroSecretos = 0,
    intentos = 0,
    listaNumerosSorteados = [],
    numeroMaximo = 10;

// Asigna texto a un elemento
function asginarTextoElemento(elemento, texto) { 
    document.querySelector(elemento).textContent = texto;
}

// Verifica si el intento del usuario es correcto
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario === numeroSecretos) {
      asginarTextoElemento("p", `Acertaste el número en ${intentos}${intentos === 1 ? " vez" : " veces"} `);   
      document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else { 
        if (numeroUsuario < numeroSecretos) {
            asginarTextoElemento("p", "El numero es mayor");
        } else {
            asginarTextoElemento("p", "El numero es menor");
        }
        intentos++;
        limpiarCaja();
    }
}

// Limpia la caja de texto
function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}

// Genera un número secreto único
function generarNumeroScretos(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todo los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asginarTextoElemento("p","Ya se han sorteados todos los numeros");
    }else{
    // Si el número generado está incluido en la lista, vuelve a generar uno nuevo
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroScretos();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    
    }}
}

// Inicializa el juego
function condicionesIniciales(){
    asginarTextoElemento("h1", "Adivina el numero");
    asginarTextoElemento("p", `El numero se encuentra entre 1 y ${numeroMaximo}`);
    numeroSecretos = generarNumeroScretos();  // Llama a la función que valida números únicos
    console.log(numeroSecretos);  // Solo para depuración
}

// Reinicia el juego
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}   

// Inicializa el juego al cargar
condicionesIniciales();
