const prompt = require("prompt-sync")({ sigint: true });

// gestor de tareas
// Array para almacenar tareas

let tareas = [];

let categoriasNombres = [
  "Trabajo",
  "Personal",
  // Agregar mas categorias segun sea necesario
];

// Funcion para listar todas las categorias

function mostrarTodasLasCategorias() {
  console.log("Categorias existentes: ");
  categoriasNombres.forEach(function (categoria, indice) {
    console.log(indice + ":" + categoria);
  });
}

// Funcion que sirve para cargar nuevas categorias por el usuario

function agregarNuevaCategoriaPorElUsuario(nombreCategoria) {
  categoriasNombres.push(nombreCategoria);
  console.log("Categoria " + nombreCategoria + " agregada correctamente!");
}

// funcion par agregar una nueva tarea al array

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
  mostrarTodasLasCategorias();
  let numeroCategoria = parseInt(
    prompt("Ingrese el numero de la categoria para la nueva tarea: ")
  );

  if (numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length) {
    tareas.push({
      nombre: nombreRecibido,
      completada: false,
      fechaLimite: fechaLimiteRecibida,
      categoria: numeroCategoria,
    });
    console.log("Tarea agregada con exito!");
  } else {
    console.log("Numero de categoria incorrecto ");
  }
}

// eliminar una tarea

function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log("tarea eliminada correctamente");
  } else {
    console.log("Indice de tarea no encontrado");
  }
}

// marcar tarea como completada

function completarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true;
    console.log("Tarea completada correctamente");
  } else {
    console.log("Indice de tarea invalido");
  }
}

// funcion para modificar una tarea especifica

function modificarTarea(
  indice,
  nuevoNombre,
  nuevaFechaLimite = null,
  nuevoNumeroDeCategoria
) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].nombre =
      nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;

    tareas[indice].fechaLimite =
      nuevaFechaLimite !== undefined
        ? nuevaFechaLimite
        : tareas[indice].fechaLimite;

    tareas[indice].categoria =
      nuevoNumeroDeCategoria !== undefined
        ? nuevoNumeroDeCategoria
        : tareas[indice].categoria;

    console.log("Modificacion correcta!");
  } else {
    console.log("Indice de tarea invalido");
  }
}

// Funcion que filtra tareas por categorias

function filtrarTareasPorCategoria(numeroCategoria) {
  let tareasFiltradas = tareas.filter(function (tarea) {
    return tarea.categoria === numeroCategoria;
  });
  return tareasFiltradas;
}

// funcion que muestra cant de tareas completadas

function contarTareasCompletadasPorCategoria(numeroCategoria) {
  let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);

  let tareasCompletadas = tareasCategoria.reduce(function (contador, tarea) {
    return tarea.completada ? contador + 1 : contador;
  }, 0);

  let tareasEnTotal = tareasCategoria.length;

  console.log(
    "Tareas completadas de la categoria " +
      numeroCategoria +
      ": " +
      tareasCompletadas +
      " de " +
      tareasEnTotal +
      " tareas."
  );
}

// Funcion que muestra todas las tareas no completadas

function mostrarTareasNoCompletadas() {
  console.log("Tareas no completadas: ");
  tareas.forEach(function (tarea) {
    if (!tarea.completada) {
      console.log(
        "- Nombre: " +
          tarea.nombre +
          ", Categoria: " +
          nombreCategoria[tarea.categoria]
      );
    }
  });
}

// Funcion para ordenar tareas por la propiedad 'nombre' utilizando BubbleSort]

function ordenarTareasPorNombre() {
  let total = tareas.length;

  for (let j = 0; j < total; j++) {
    for (let i = 0; i < total; i++) {
      if (tareas[i].nombre > tareas[i + 1].nombre) {
        let temporal = tareas[i];
        tareas[i] = tareas[i + 1];
        tareas[i + 1] = temporal;
      }
    }
  }
}

// Funcion para ordenar tareas por la propiedad 'fechaLimite' utilizando BubbleSort]

function ordenarTareasPorFechaLimite() {
  let total = tareas.length;

  for (let j = 0; j < total; j++) {
    for (let i = 0; i < total; i++) {
      if (tareas[i].fechaLimite > tareas[i + 1].fechaLimite) {
        let temporal = tareas[i];
        tareas[i] = tareas[i + 1];
        tareas[i + 1] = temporal;
      }
    }
  }
}

// Funcion que busca una tarea por nombre y retorna su posicion

function buscarTareaPorNombre(nombreTarea) {
  let inicio = 0;
  let fin = tareas.length - 1;

  while (inicio <= fin) {
    let posElementoMedio = Math.round((inicio + fin) / 2);
    if (tareas[posElementoMedio].nombre === nombreTarea) {
      return posElementoMedio;
    } else if (tareas[posElementoMedio].nombre < nombreTarea) {
      inicio = posElementoMedio + 1;
    } else {
      fin = posElementoMedio - 1;
    }
  }
  return -1;
}

// funcion para mostrar el menu de opciones

function mostrarMenu() {
  console.log(" --- Menu ---");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Modificar tarea");
  console.log("5. Mostrar todas las tareas");
  console.log("6. Ver todas las categorias");
  console.log("7. Agregar una nueva categoria");
  console.log("8. Filtrar tareas por categoria");
  console.log("9. Visualizar cantidad de tareas completadas por categoria");
  console.log("10. Visualizar todas las tareas no completadas");
  console.log("11. Ordenar las tareas alfabeticamente");
  console.log("12. Ordenar tareas por fecha limite");
  console.log("13. Buscar tarea por su nombre");
  console.log("0. Salir");
}

// funcion para interactuar con el user

function interactuar() {
  let opcion = -1;

  while (opcion != 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese la opcion deseada: "));

    switch (opcion) {
      case 1:
        let nombreTareaNueva = prompt(
          "Ingrese el nombre de la tarea a cargar: "
        );
        agregarTarea(nombreTareaNueva);

        break;
      case 2:
        let indiceAeliminar = parseInt(
          prompt("Ingrese el indice de la tarea a eliminar: ")
        );
        eliminarTarea(indiceAeliminar);

        break;

      case 3:
        let indiceAcompletar = parseInt(
          prompt("Ingrese el indice de la tarea a completar: ")
        );
        completarTarea(indiceAcompletar);

        break;

      case 4:
        let indice = parseInt(prompt("Ingrese el indice a modificar: "));
        if (indice >= 0 && indice < tareas.length) {
          let opcion = parseInt(
            prompt(
              "Que propiedad desea modificar? 1. Nombre, 2. Fecha Limite, 3. Numero categoria "
            )
          );
          switch (opcion) {
            case 1:
              let nuevoNombre = prompt("Ingrese el nuevo nombre de su tarea: ");
              modificarTarea(indice, nuevoNombre);
              break;
            case 2:
              let nuevaFechaLimite = prompt(
                "Ingrese el nuevo nombre de su tarea: "
              );
              modificarTarea(indice, undefined, nuevaFechaLimite);
              break;

            case 3:
              let nuevoNumeroDeCategoria = parseInt(
                prompt("Ingrese el nuevo numero de categoria: ")
              );
              if (
                nuevoNumeroDeCategoria >= 0 &&
                nuevoNumeroDeCategoria < categoriasNombres.length
              ) {
                modificarTarea(
                  indice,
                  undefined,
                  undefined,
                  nuevoNumeroDeCategoria
                );
              }
              break;

            default:
              console.log("Opcion invalida");
              break;
          }
        } else {
          console.log("Indice de tarea incorrecto ");
        }

        modificarTarea(indice, nuevoNombre);

        break;

      case 5:
        console.log(" -- Lista de tareas -- ");
        console.log(tareas);

        break;

      case 6:
        mostrarTodasLasCategorias();

        break;
      case 7:
        let nuevaCategoria = prompt(
          "Ingrese el nombre de la nueva categoria a agregar: "
        );
        agregarNuevaCategoriaPorElUsuario(nuevaCategoria);

        break;
      case 8:
        mostrarTodasLasCategorias();
        let categoriaAFiltrar = parseInt(
          prompt("Ingrese el numero de la categoria a filtrar: ")
        );
        let tareasCategoria = filtrarTareasPorCategoria(categoriaAFiltrar);

        console.log("Tareas de la categoria seleccionada: ");
        console.log(tareasCategoria);

        break;
      case 9:
        mostrarTodasLasCategorias();
        let numeroCategoria = parseInt(
          prompt("Ingrese el numero de la categoria a visualizar: ")
        );
        contarTareasCompletadasPorCategoria(numeroCategoria);
        break;

      case 10:
        mostrarTareasNoCompletadas();
        break;

      case 11:
        ordenarTareasPorNombre();
        console.log("Tareas por nombre: ");
        console.log(tareas);
        break;

      case 12:
        ordenarTareasPorFechaLimite();
        console.log("Tareas por fecha: ");
        console.log(tareas);
        break;

      case 13:
        ordenarTareasPorNombre();

        let nombreAbuscar = prompt("Ingrese nombre de la tarea a buscar: ");
        let indiceTarea = buscarTareaPorNombre(nombreAbuscar);

        if (indiceTarea !== -1) {
          console.log("Tarea encontrada en el indice: " + indiceTarea);
        } else {
          console.log("Tarea no encontrada");
        }

        break;

      default:
        console.log("Opcion invalida");
        break;
    }
  }
}
interactuar();
