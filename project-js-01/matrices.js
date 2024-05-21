//Crear una matriz

// opcion 1
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// opcion 2
let arrayMatriz = [];

let fila1 = ["x0", "x1", "x2"];
let fila2 = ["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;

// Visualizar una matriz

console.table(matriz);

// Acceder a un elemento especifico

//console.log(matriz[1][1]); // primero fila y luego columna

// Modificar un elemento especifico
matriz[0][1] = 15;

console.table(matriz);
// Recorrer una columna especifica

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][0]);
}

// Recorrer una fila especifica

for (let i = 0; i < matriz[0].length; i++) {
  console.log(matriz[0][i]);
}

// Recorrer la totalidad de datos de la matriz

let matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz2);

for (let i = 0; i < matriz2.length; i++) {
  // for para recorrer las FILAS
  for (let j = 0; j < matriz2.length; j++) {
    console.log(matriz2[i][j]);
    // For para recorrer las COLUMNAS
  }
}

// Filtrar dentro de matrices cuadradas

let matriz3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz3);

for (let i = 0; i < matriz3.length; i++) {
  for (let j = 0; j < matriz3.length; j++) {
    if (matriz3[i][j] % 2 === 0) {
      console.log(matriz3[i][j]);
    }
  }
}

// filtrar dentro de matrices

let matriz4 = [
  [1, 2, 3],
  [4, 5, 6],
];

console.table(matriz4);

for (let i = 0; i < matriz4.length; i++) {
  // i = 1
  for (let j = 0; j < matriz4[i].length; j++) {
    // j = 0
    if (matriz4[i][j] % 2 === 0) {
      console.log(matriz4[i][j]);
    }
  }
}
