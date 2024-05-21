/* .slice() nos devuelve una copia superficial de un array existente

Sintaxis: let newArray = arrayOriginal.slice(inicio, fin);


let frutas = ["Manzana", "Naranja", "Platano", "Fresa", "Kiwi"];

let primerasTres = frutas.slice(0, 3);
console.log(primerasTres);

let desdeNaranja = frutas.slice(1);
console.log(desdeNaranja);

let ultimasDos = frutas.slice(-2);
console.log(ultimasDos);

let entreDosIndices = frutas.slice(-3, 4);
console.log(entreDosIndices); */

/* .splice() elimina o reemplaza elimentos existentes y/o agrega nuevos elementos en su lugar. 
Sintaxis: arrayOriginal.splice(inicio, cantidadAeliminar, elemento1, elemento2, ...);
*/

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//meses.splice(1, 2, "NuevoMes1", "NuevoMes2");

// console.log(meses);

meses.splice(2, 0, "nuevoMes3");
console.log(meses);

/* .sort() ordenar los elementos, retorando el array ordenado
arrayOriginal.sort()
*/

let numeros = [5, 4, 8, 1, 6, 9];

numeros.sort();
console.log(numeros);

let palabras = ["perro", "gato", "auto", "zorro"];
palabras.sort();
console.log(palabras);

/* .find() Devuelve el primer elemento que cumple con una condicion dada en una funcion de prueba
Sintaxis: let resultado = arrayOriginal.find(funcionDePrueba(elemento));
*/

let edades = [25, 18, 30, 15, 22];

let mayorDeEdad = edades.find((edad) => edad >= 18);
console.log(mayorDeEdad);

let primeraEdadMayor = edades.find((edad) => edad > 30);
console.log(primeraEdadMayor);

/* 
.map() Recorre el arreglo y nos devuelve un nuevo arreglo con las modifciaciones que le pasemos como callback
*/

let numeros2 = [2, 4, 6];

let numerosMultiplicados = numeros2.map(function (num) {
  return num * 2;
});
//console.log(numerosMultiplicados);

/* 
.filter() recibe una funcion por parametro. Recorre la totalidad del arry y filtra elementos segun la condicion que le pasemos mediante el callback
*/

let edades4 = [22, 8, 17, 14, 30];

let mayores4 = edades4.filter(function (edad4) {
  return edad4 > 18;
});
console.log(mayores4);

/* 
.reduce() recorre la totalidad de los elementos, pero nos devolvera un valor unico
*/

let nums = [5, 7, 16];
let suma = [
  nums.reduce(function (acum, numero) {
    return acum + numero;
  }),
];
console.log(suma);

/* 
.forEach() itera sobre un array pero no retorna nada
*/
let paises = ["Argentina", " Colombia", " Brasil"];

paises.forEach(function (pais) {
  console.log(pais);
});
