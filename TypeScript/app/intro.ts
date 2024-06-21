let saludo = "Hola mundo ts";

let nombre: string = "Juan";

let edad: number = 23;

let esMayor: boolean = true;

let colores: string[] = ["rojo", "verde", "azul"];

let colores2: Array<string> = ["rojo", "verde", "azul"];

enum DiasSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo,
}

let hoy: DiasSemana = DiasSemana.Lunes;

// Funciones con tipos y parametros de retorno

function saludar(nombre: string): string {
  return `Hola como estas ${nombre}`;
}

console.log(saludar("Cami"));

function saludar2(nombre: string): void {
  console.log(`Hola saludo 2 ${nombre}`);
}

saludar2("Cami");

// Clases con propiedades y metodos tipeados:

class Producto {
  constructor(public nombre: string, public precio: number) {}
  mostrarDetalles(): void {
    console.log(`Producto: ${this.nombre}`);
  }
}

type Color = "rojo" | "verde" | "amarillo";

let colors: Color = "rojo";

// Uso de tipos genericos

function duplicar<T>(valor: T) {
  return valor;
}

const numeroDuplicado: number = duplicar(5);

const textoDuplicado: string = duplicar("Hola");
