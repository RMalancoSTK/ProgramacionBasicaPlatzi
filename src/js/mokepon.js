// Variables de mokepon
let seleccionarMascotaJugador = document.getElementById("seleccionar");
let mascotas = document.getElementById("mascotas");
let mascotaJugador = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let mascotaEnemigo = 0;

let seleccionarAtaque = document.getElementById("seleccionar-ataque");
let ataques = document.getElementById("ataques");

// Funcion para iniciar juego
function iniciarJuego() {
  alert("Bienvenido a Mokepon");
}

window.addEventListener("load", iniciarJuego);

// Funcion para seleccionar mascota
function NombreMascotaJugador(mascota) {
  //   alert(`Seleccionaste a ${mascota}`);
  document.getElementById("nombre-mascota").innerHTML = mascota;
}

function mostrarVidas() {
  document.getElementById("vidas-mascota-span").innerHTML = vidasJugador;
  document.getElementById("vidas-mascota-enemiga-span").innerHTML =
    vidasEnemigo;
}

// Evento para seleccionar mascota
seleccionarMascotaJugador.addEventListener("click", () => {
  let mascota =
    mascotas.value == 1
      ? "Hipoge 🌊"
      : mascotas.value == 2
      ? "Capipepo 🌳"
      : mascotas.value == 3
      ? "Ratigueya 🔥"
      : mascotas.value == 4
      ? "Langostelvis 🔥 y 🌊"
      : mascotas.value == 5
      ? "Tucapalma 🌊 y 🌳"
      : mascotas.value == 6
      ? "Pydos 🌳 y 🔥"
      : "No seleccionaste una mascota";

  mascotaJugador = mascotas.value;
  mostrarVidas();
  NombreMascotaJugador(mascota);
  seleccionarMascotaEnemiga();
});

// Funcion aleatoria para seleccionar mascota enemiga
function seleccionarMascotaEnemiga() {
  mascotaEnemigo = Math.floor(Math.random() * 6) + 1;
  if (mascotaEnemigo == mascotaJugador) {
    seleccionarMascotaEnemiga();
  } else {
    let mascota =
      mascotaEnemigo == 1
        ? "Hipoge 🌊"
        : mascotaEnemigo == 2
        ? "Capipepo 🌳"
        : mascotaEnemigo == 3
        ? "Ratigueya 🔥"
        : mascotaEnemigo == 4
        ? "Langostelvis 🔥 y 🌊"
        : mascotaEnemigo == 5
        ? "Tucapalma 🌊 y 🌳"
        : mascotaEnemigo == 6
        ? "Pydos 🌳 y 🔥"
        : "No seleccionaste una mascota";
    document.getElementById("nombre-mascota-enemiga").innerHTML = mascota;
  }
}

seleccionarAtaque.addEventListener("click", () => {
  let ataque =
    ataques.value == 1
      ? "Ataque de agua"
      : ataques.value == 2
      ? "Ataque de fuego"
      : ataques.value == 3
      ? "Ataque de tierra"
      : "No seleccionaste un ataque";

  let ataqueEnemigo = Math.floor(Math.random() * 3) + 1;

  if (ataques.value == 1 && ataqueEnemigo == 2) {
    vidasEnemigo--;
  } else if (ataques.value == 2 && ataqueEnemigo == 3) {
    vidasEnemigo--;
  } else if (ataques.value == 3 && ataqueEnemigo == 1) {
    vidasEnemigo--;
  } else if (ataques.value == 1 && ataqueEnemigo == 3) {
    vidasJugador--;
  } else if (ataques.value == 2 && ataqueEnemigo == 1) {
    vidasJugador--;
  } else if (ataques.value == 3 && ataqueEnemigo == 2) {
    vidasJugador--;
  }

  mostrarVidas();
});
