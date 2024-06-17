/**
 * Nombre de usuario
 * @type {string}
 */

let userName = "Cami";

/**
 * Edad del usuario
 * @type {number}
 */

let userAge = 45;

/** 
Lista de edades de usuarios
* @type {Array<Number>}
*/

const userAge = [21, 23, 24, 27, 33];

/**
 * Lista de valores
 * @type {Array<Number | String | Boolean>}
 */

const mixedArray = [42, "Hola", true];

/**
 * Usuario
 * @type {{id: Number, name: String, age: Number, isActive: Boolean}}
 */

const user = {
  id: 1,
  name: "Cami",
  age: 29,
  isActive: true,
};

/**
 * @typedef {object} User
 * @property {number} id
 * @property {String} name
 * @property {number} age
 * @property {Boolean} isActive
 */

const user2 = {
  id: 1,
  name: "Cami",
  age: 29,
  isActive: true,
};

/**
 * @type {User}
 */

const user3 = {
  id: 1,
  name: "Cami",
  age: 29,
  isActive: true,
};

/**
 * Imprime por consola un saludo con el nombre del user
 * @param {User} user
 * @returns {void}
 * @example
 */

function sayHello(user) {
  console.log(`Hola ${user.name}`);
}
