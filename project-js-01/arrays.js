/* crear un array

let edades = [24, 35, 18, 49, 7];
let nombres = ["Juan", "Pedro", "Maria"];
let booleanos = [true, false, false, true];
let combinados = [14, "Hola", true];

// acceder a un elemento especifico de un array

console.log(booleanos[0]);

// recorrer un array

for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]);
}

let numeros = [10, 20, 30, 40, 50];
// modificar cada uno de sus elementos a un array e imprimirlos

/* for (let i = 0; i < numeros.length; i++) {
  numeros[i] = i + 1;
}

numeros[1] = 44;
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
} 

// Agregar elementos a un array
let notas = [8, 4, 10, 6];

notas[notas.length] = 7;

for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}

// Extraer elementos de un array a una variable

let nombres = ["Pedro", "Adriana", "Fabian"];
let nombreSeleccionado = nombres[1];
console.log(nombreSeleccionado); 

// Extraer todos los elementos para algo espefifico

let numeros = [10, 20, 30, 40, 50];
let acc = 0;

for (let i = 0; i < numeros.length; i++) {
  acc = acc + numeros[i];
  // acc += numeros[i]
}
let promedio = acc / numeros.length;

console.log(promedio); */

// Encontrar el mayor y menor

let numeros = [10, 48, 7, 52, 19];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}
console.log(menor);
