import { Color, Persona } from "../interface/persona";

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

let colors: Color = "rojo";

// Uso de tipos genericos

function duplicar<T>(valor: T) {
  return valor;
}

const numeroDuplicado: number = duplicar(5);

const textoDuplicado: string = duplicar("Hola");

interface Domicilio {
  calle: string;
  numero: number;
}

const persona: Persona = {
  nombre: "Camila",
  edad: 29,
  domicilio: {
    calle: "San Juan",
    numero: 1234,
  },
};

interface Animal {
  nombre: string;
  tipo: string;
}

interface Pajaro extends Animal {
  colorPlumaje: string;
}

const Tortuga: Animal = {
  nombre: "Manuelita",
  tipo: "Terrestre",
};

const Tucan: Pajaro = {
  nombre: "Tuki",
  tipo: "Ave",
  colorPlumaje: "Negro",
};
