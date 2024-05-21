// Validador de contrasenas

let contrasena = "123456";

function validarContrasena(contraRecibida) {
  contraRecibida === contrasena
    ? console.log("es correcta")
    : console.log("incorrecta");
}
validarContrasena("123456");

// Calculadora IMC

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log("Bajo Peso");
  } else if (imc < 24.9) {
    console.log("Sobre peso");
  } else {
    console.log("Obesidad");
  }
}
calcularIMC(70, 1.59);

// Convertor de monedas

function convertirMoneda(cantidad, tipoCambio) {
  let resultado = cantidad * tipoCambio;
  return resultado;
}

let cantidad = convertirMoneda(100, 0.85);
console.log(`Cantidad en euros ${cantidad}`);

// Convertor de monedas con limitacion de moneda

function convertirMoneda2(cantidad2, moneda) {
  let tipoDeCambio;

  switch (moneda) {
    case "Dolar":
      tipoDeCambio = 1000;
      break;

    case "Real":
      tipoDeCambio = 300;
      break;
    case "Euro":
      tipoDeCambio = 1100;
      break;

    default:
      console.log("Moneda no encontrada");
      return -1;
      break;
  }

  let resultado2 = cantidad2 * tipoDeCambio;
  console.log(`Cantidad convertida a ${moneda}" ${resultado2}`);
}
convertirMoneda2(100, "Dolar");

// Evaluador de Rango de Edad: Nino, adolescente, adulto joven, adulto

function evaluarEdad(edad) {
  if (edad < 12) {
    console.log("Nino");
  } else if (edad < 18) {
    console.log("adolescente");
  } else if (edad < 30) {
    console.log("adulto joven");
  } else {
    console.log("adulto");
  }
}
evaluarEdad(25);

// Generador de Mensajes Personalizados:

function mensajePersonalizado(nombre, momentoDelDia) {
  let saludo = momentoDelDia === "Manana" ? "Buenos dias" : "Buenas tardes";
  console.log(`${saludo}, ${nombre}!`);
}
mensajePersonalizado("Lautaro", "Manana");
