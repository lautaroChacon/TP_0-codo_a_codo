const cafeButton = document.getElementById("cafeButton");
const restauranteButton = document.getElementById("restauranteButton");
const pubButton = document.getElementById("pubButton");
const opciones = document.querySelectorAll("#turno option:not([value='vacío'])");

cafeButton.addEventListener("change", () => {
  opciones.forEach(opcion => {
    opcion.hidden = !opcion.classList.contains("cafe");
  });
});

restauranteButton.addEventListener("change", () => {
  opciones.forEach(opcion => {
    opcion.hidden = !opcion.classList.contains("restaurante");
  });
});

pubButton.addEventListener("change", () => {
  opciones.forEach(opcion => {
    opcion.hidden = !opcion.classList.contains("pub");
  });
});
