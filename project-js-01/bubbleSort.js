/*
let array = [5, 4, 1, 6, 3, 2];

for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}
//console.log(array);
*/

let numeros = [
  { nombre: "Lautaro", edad: 25 },
  { nombre: "Morena", edad: 17 },
  { nombre: "Daniela", edad: 50 },
];

for (let j = 0; j < numeros.length; j++) {
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i].nombre > numeros[i + 1].nombre) {
      let temporal = numeros[i];
      numeros[i] = numeros[i + 1];
      numeros[i + 1] = temporal;
    }
  }
}
console.log(numeros);
