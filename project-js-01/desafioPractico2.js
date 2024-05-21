//Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()

function unirArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
let numeros = [4, 5, 6];
let nuevosNumeros = [7, 8, 9];
let resultadoDeNumeros = unirArrays(numeros, nuevosNumeros);
console.log(resultadoDeNumeros);

// Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. La función debe devolver el elemento eliminado.

function eliminarPrimerElemento(array) {
  let primerElemento = array.shift();
  return primerElemento;
}

let arrayNuevo = [1, 2, 3];
let nombreEliminado = eliminarPrimerElemento(arrayNuevo);
console.log(arrayNuevo);
console.log(nombreEliminado);

//Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()

function convertirTexto(texto) {
  let textoMayus = texto.toUpperCase();
  let textoMinus = texto.toLowerCase();
  console.log("Texto en mayusculas: " + textoMayus);
  console.log("Texto en minusculas: " + textoMinus);
}
convertirTexto("Hola Mundo");

//Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: texto, edad y ocupación. Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.

let persona = {
  nombre: "Pedro",
  edad: 30,
  ocupacion: "Empleado",
};

function verObjeto(objeto) {
  console.log(objeto.nombre);
  console.log(objeto.edad);
  console.log(objeto.ocupacion);
}
verObjeto(persona);

persona.ocupacion = "Programador";
persona.habilidad = "Ingles";
console.log(persona.ocupacion);
console.log(persona.habilidad);

// Objetos anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto. */

persona.ubicacion = {
  codigoPostal: "7600",
  ciudad: "Mar del Plata",
  calle: "Calle principal",
  numero: 223,
};

function eliminarPropiedad(objeto, propiedad) {
  switch (propiedad) {
    case "nombre":
      delete objeto.nombre;

      break;
    case "edad":
      delete objeto.edad;

      break;
    case "habilidad":
      delete objeto.habilidad;

      break;
    case "ubicacion":
      delete objeto.ubicacion;

      break;

    default:
      console.log("Dicha propiedad no existe");
      break;
  }
}
eliminarPropiedad(persona, "nombre");
console.log(persona);
