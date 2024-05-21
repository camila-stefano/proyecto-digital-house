const prompt = require("prompt-sync")({ sigint: true });
/*
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 10); */

/*let i = 15;

while (i <= 10) {
  console.log(i);
  i++;
}

let j = 15;

do {
  console.log(j);
  j++;
} while (j <= 10);

let numeroAadivinar = 4;
let intento = 0;
let numero;

do {
  numero = parseInt(prompt("Ingrese un numero del 1 al 10: "));

  if (numero < numeroAadivinar) {
    console.log("Muy bajo, intenta nuevamente: ");
  } else if (numero > numeroAadivinar) {
    console.log("Muy alto, ingrese nuevamente: ");
  } else {
    console.log("Numero correcto! ");
  }

  intento++;
} while (numero != numeroAadivinar);

console.log("Adivinaste el numero en " + intento + " intentos"); */

for (let i = 0; i <= 10; i += 2) {
  console.log("Iteracion nro: " + i);
}
