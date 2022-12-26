let jugador = prompt(
  "Elige una opción: 1 = Piedra 🥌, 2 = Papel 📰, 3 = Tijera ✂️"
);

let triunfos = 0;
let derrotas = 0;
let empates = 0;

function Aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eleccion(jugada) {
  let resultado =
    jugada == 1 ? "Piedra 🥌" : jugada == 2 ? "Papel 📰" : "Tijera ✂️";
  return resultado;
}

function jugarvsmaquina(jugador, maquina) {
  let resultado =
    jugador == maquina
      ? "Empate"
      : jugador == 1 && maquina == 2
      ? "Perdiste"
      : jugador == 1 && maquina == 3
      ? "Ganaste"
      : jugador == 2 && maquina == 1
      ? "Ganaste"
      : jugador == 2 && maquina == 3
      ? "Perdiste"
      : jugador == 3 && maquina == 1
      ? "Perdiste"
      : jugador == 3 && maquina == 2
      ? "Ganaste"
      : "No es una opción válida";
  return resultado;
}

function contadorTriunfosDerrotas(jugador, maquina) {
  let resultado =
    jugador == maquina
      ? empates++
      : jugador == 1 && maquina == 2
      ? derrotas++
      : jugador == 1 && maquina == 3
      ? triunfos++
      : jugador == 2 && maquina == 1
      ? triunfos++
      : jugador == 2 && maquina == 3
      ? derrotas++
      : jugador == 3 && maquina == 1
      ? derrotas++
      : jugador == 3 && maquina == 2
      ? triunfos++
      : "No es una opción válida";
  return resultado;
}

function juegoPiedraPapelTijera(jugador) {
  while (triunfos < 3 && derrotas < 3) {
    let maquina = Aleatorio(1, 3);
    let resultado = jugarvsmaquina(jugador, maquina);
    contadorTriunfosDerrotas(jugador, maquina);
    alert(
      `Tu jugada fue: ${eleccion(
        jugador
      )}\nLa jugada de la máquina fue: ${eleccion(
        maquina
      )}\n${resultado}\n\nTriunfos: ${triunfos}\nDerrotas: ${derrotas}\nEmpates: ${empates}`
    );
    jugador = prompt(
      "Elige una opción: 1 = Piedra 🥌, 2 = Papel 📰, 3 = Tijera ✂️"
    );
  }
}
