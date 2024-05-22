let array = [14, 3, 51, 7, 92, 110, 5, 17, 13, 48];
let elementoBuscado = 311;

function busquedaLineal(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i;
    }
  }
  return -1;
}

let indiceEncontrado = busquedaLineal(array, elementoBuscado);
if (indiceEncontrado == -1) {
  console.log("El elemento a buscar no se encuentra");
} else {
  console.log(
    "El elemento a buscar se encuentra en la posicion: " + indiceEncontrado
  );
}
