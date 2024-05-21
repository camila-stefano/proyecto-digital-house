//Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.

// 1) Gastos de toda la semana: Crear una función que nos sirva para obtener el total de gastos de una semana específica. Recordemos que cada fila representa una semana. El número de semana deberá recibirse por parámetro.

let gastos = [
  [10, 20, 30, 40, 50, 60, 70], // Semana 1
  [5, 15, 25, 35, 45, 55, 65], // Semana 2
  [8, 18, 28, 38, 48, 58, 68], // Semana 3
  [12, 22, 32, 42, 52, 62, 72], // Semana 4
];

function gastosDeUnaSemanaEspecifica(matriz, numSemana) {
  sumaDeGastos = 0;

  for (let i = 0; i < matriz[numSemana].length; i++) {
    sumaDeGastos += matriz[numSemana - 1][i];
  }
  return sumaDeGastos;
}

let sumaDeGastosSemanales = gastosDeUnaSemanaEspecifica(gastos, 2);
//console.log("Gastos de la semana 2 fueros: " + sumaDeGastosSemanales);

//2) Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos de un día específico de la semana. Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. El número correspondiente al día deberá recibirse por parámetro. Recuerda que el número de día es determinado por las columnas.

function gastosDeUnDiaDeLaSemana(matriz, numDeDia) {
  let gastosDeUnDia = 0;
  for (let i = 0; i < matriz.length; i++) {
    gastosDeUnDia += matriz[i][numDeDia - 1];
  }
  return gastosDeUnDia;
}

let gastosTotales = gastosDeUnDiaDeLaSemana(gastos, 1);

//console.log("Los gastos de todos los lunes fueron: " + gastosTotales);

// 3) Gasto total: Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. La función deberá retornar dicho valor.

function gastosDeTodoElMes(matriz) {
  let gastoMensual = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      gastoMensual += matriz[i][j];
    }
  }
  return gastoMensual;
}

let gastosMensuales = gastosDeTodoElMes(gastos);
//console.log("Los gastos de todo el mes fueron: " + gastosMensuales);

/* 4) Gastos por semana:
Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales. En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. Será obligatorio el uso de callbacks para esta función. */

function calcularTotalDeGastosPorSemana(matriz, callback) {
  let totalGastosPorSemana = [];
  let gastosSemanales = 0;

  matriz.forEach(function (semana) {
    gastosSemanales = semana.reduce(function (total, dia) {
      return total + dia;
    });
    totalGastosPorSemana.push(gastosSemanales);
  }, 0);

  callback(totalGastosPorSemana);
}

// otra funcion
function mostrarResultados(resultados) {
  console.log("Total de gastos por semana: " + resultados);
}
calcularTotalDeGastosPorSemana(gastos, mostrarResultados);
