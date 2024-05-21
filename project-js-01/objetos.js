// Crear un objeto
let persona = {
  nombre: "Ezequiel",
  apellido: "Diaz",
  edad: 30,
  coloresFavoritos: ["Azul", "Rosa"],
  saludar: function () {
    return "Hola, como estas? Soy " + this.nombre;
  },
};

persona.nombre = "Lautaro";
/*
// acceder a las propiedades de un objeto
console.log(persona.nombre);
// acceder a un metodo de un objeto
console.log(persona.coloresFavoritos[0]);

// cargar una nueva propiedad
persona.deporteFavorito = "Futbol";

//editar una propiedad
persona.edad = 31;

console.log(persona);

// eliminar una propiedad

delete persona.deporteFavorito;
console.log(persona);
*/

let saludo = persona.saludar();
console.log(saludo);

// this
