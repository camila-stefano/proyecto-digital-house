"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let saludo = "Hola mundo ts";
let nombre = "Juan";
let edad = 23;
let esMayor = true;
let colores = ["rojo", "verde", "azul"];
let colores2 = ["rojo", "verde", "azul"];
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
let hoy = DiasSemana.Lunes;
// Funciones con tipos y parametros de retorno
function saludar(nombre) {
    return `Hola como estas ${nombre}`;
}
console.log(saludar("Cami"));
function saludar2(nombre) {
    console.log(`Hola saludo 2 ${nombre}`);
}
saludar2("Cami");
// Clases con propiedades y metodos tipeados:
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}`);
    }
}
let colors = "rojo";
// Uso de tipos genericos
function duplicar(valor) {
    return valor;
}
const numeroDuplicado = duplicar(5);
const textoDuplicado = duplicar("Hola");
const persona = {
    nombre: "Camila",
    edad: 29,
    domicilio: {
        calle: "San Juan",
        numero: 1234,
    },
};
const Tortuga = {
    nombre: "Manuelita",
    tipo: "Terrestre",
};
const Tucan = {
    nombre: "Tuki",
    tipo: "Ave",
    colorPlumaje: "Negro",
};
