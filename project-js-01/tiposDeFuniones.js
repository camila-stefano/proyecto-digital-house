// Funciones declaradas
console.log(suma(2, 2));
function suma(num1, num2) {
  return num1 + num2;
}

// Funciones expresadas

let resta = function (num3, num4) {
  return num3 - num4;
};
console.log(resta(10, 5));

// Arrow Functions

let multiplicacion = (num5, num6) => {
  return num5 * num6;
};
console.log(multiplicacion(4, 3));

let objeto = {
  valor: 10,
  doble: function () {
    return this.valor * 2;
  },
};

console.log(objeto.doble());

let objeto2 = {
  valor: 20,
  doble: () => {
    return this.valor * 2;
  },
};

console.log(objeto2.doble());
