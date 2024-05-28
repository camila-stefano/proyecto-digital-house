// BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.

let numeros = [8, 4, 2, 9, 5, 4, 7, 85, 1, 4, 3, 4, 4];

function ordenarElementos(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temporal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporal;
      }
    }
  }
  return array;
}

// let nuevoArray = ordenarElementos(numeros);
//console.log(nuevoArray);

// Indicar ordenamiento: Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.

function indicarSiEstaOrdenado(array) {
  let ordenado = true;

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        ordenado = false;
      }
    }
  }

  return ordenado;
}

//ordenarElementos(numeros);
//let retorno = indicarSiEstaOrdenado(numeros);
//console.log(retorno);

//Contar la cantidad de veces que aparece un número en un array: Crea una función que reciba por parámetro un número y un array de números, y devuelva la cantidad de veces que aparece ese número en el array utilizando búsqueda lineal.

function contarCoincidencias(array, num) {
  let cantidad = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      cantidad++;
    }
  }
  return cantidad;
}
//let cant = contarCoincidencias(numeros, 4);

//console.log("Cantidad de coincidencias: " + cant);

// Obtener votos: Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares —lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5 temas y una cantidad de votos para cada uno. Los votos obtenidos deben estar desordenados. Una vez creado el array, se deberá escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando:

let temas = [
  {
    nombre: "Arrasando",
    cantidadDeVotoa: 230,
  },
  {
    nombre: "Azul",
    cantidadDeVotoa: 1230,
  },
  {
    nombre: "Puesto",
    cantidadDeVotoa: 248,
  },
  {
    nombre: "Quedate",
    cantidadDeVotoa: 5230,
  },
  {
    nombre: "Bienvenito",
    cantidadDeVotoa: 30,
  },
];
//Resolverlo aplicando búsqueda lineal.

function busquedaLineal(array, tema) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].nombre === tema) {
      return array[i].cantidadDeVotoa;
    }
  }
  return "El tema no se encuentra dentro del array";
}
//let votos = busquedaLineal(temas, "Quedateeee");
//console.log(votos);

//Resolverlo aplicando búsqueda binaria.

function busquedaBinaria(array, temas) {
  let inicio = 0;
  let fin = array.length - 1;
  while (inicio <= fin) {
    let posMedio = Math.round(inicio + fin / 2);
    let elementoDelMedio = array[posMedio];

    if (elementoDelMedio.nombre === temas) {
      return elementoDelMedio.cantidadDeVotoa;
    }

    if (elementoDelMedio.nombre > temas) {
      fin = elementoDelMedio - 1;
    } else {
      inicio = posMedio + 1;
    }
  }
}
