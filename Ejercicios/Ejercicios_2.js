// Desafíos
// Crea una lista vacía llamada "listaGenerica".
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// Crea una función que calcule el promedio de los elementos en una lista de números.
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// Crea una función que devuelva la suma de todos los elementos en una lista.
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let listaGenerica = [],
    lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python", "Java", "Ruby", "GoLang"];
let listaSuma = [],
    listaCuadrados = [];

let mostrarElementos = () => console.log(lenguagesDeProgramacion);
let mostrarElementosInverso = () => console.log(lenguagesDeProgramacion.reverse());
let promedio = () => console.log(lenguagesDeProgramacion.reduce((a, b) => a + b) / lenguagesDeProgramacion.length);
let minMax = () => console.log(`El numero mas grande es ${Math.max(...lenguagesDeProgramacion)} y el mas pequeno es ${Math.min(...lenguagesDeProgramacion)}`);
let sumarElementos = () => console.log(lenguagesDeProgramacion.reduce((a, b) => a + b));
let posicionElemento = (elemento) => console.log(lenguagesDeProgramacion.indexOf(elemento));
let sumarListas = (lista1, lista2) => console.log([...lista1, ...lista2]);
let calcularCuadrados = (lista) => console.log([...lista].map((elemento) => Math.pow(elemento, 2)));

mostrarElementos();
mostrarElementosInverso();
promedio();
minMax();
sumarElementos();
posicionElemento(3);
sumarListas([1, 2], [3, 4]);
calcularCuadrados([1, 2, 3, 4]);
