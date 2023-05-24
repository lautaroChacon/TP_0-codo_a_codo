document.addEventListener("DOMContentLoaded", function() {
  // Obtener los elementos de radio de intereses
  var cafeButton = document.getElementById("cafeButton");
  var restauranteButton = document.getElementById("restauranteButton");
  var pubButton = document.getElementById("pubButton");

  // Obtener el elemento select de turnos
  var turnoSelect = document.getElementById("turno");

  // Agregar eventos de cambio a los elementos de radio de intereses
  cafeButton.addEventListener("change", mostrarOpciones);
  restauranteButton.addEventListener("change", mostrarOpciones);
  pubButton.addEventListener("change", mostrarOpciones);

  // Función para mostrar las opciones de turno correspondientes al interés seleccionado
  function mostrarOpciones() {
    // Obtener el valor del interés seleccionado
    var interesSeleccionado = this.value;

    // Recorrer todas las opciones de turno
    for (var i = 0; i < turnoSelect.options.length; i++) {
      var opcion = turnoSelect.options[i];

      // Verificar si la opción pertenece al interés seleccionado
      if (opcion.classList.contains(interesSeleccionado)) {
        opcion.style.display = "block"; // Mostrar la opción
        opcion.disabled = false; // Habilitar la opción
      } else {
        opcion.style.display = "none"; // Ocultar la opción
        opcion.disabled = true; // Deshabilitar la opción
      }
    }
  }
});
