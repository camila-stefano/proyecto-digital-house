// Funcion que recorre array y ejecuta un callback

function procesarArray(array, callbacks) {
  for (let i = 0; i < array.length; i++) {
    callbacks(array[i]);
  }
}

// funcion de callbacks que muestre los elementos del array

function mostrarElemento(elemento) {
  console.log(elemento);
}

function multiplicarPorDos(elemento) {
  console.log(elemento * 2);
}

function calcularCuadrado(elemento) {
  console.log(elemento * elemento);
}

// Crear nuestro array

miArray = [1, 2, 3, 4, 5];

// Llamada a la funcion procesarArray
console.log("Recorrido de array: ");
procesarArray(miArray, mostrarElemento);

console.log("Multiplicacion por dos: ");
procesarArray(miArray, multiplicarPorDos);

console.log("Cuadrado de cada elemento: ");
procesarArray(miArray, calcularCuadrado);
