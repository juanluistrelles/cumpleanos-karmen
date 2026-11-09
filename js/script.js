/*
 * Lógica del juego. Los nombres y las rutas de los audios se leen desde
 * invitados.js, por lo que Juanlu solo tendrá que actualizar aquel archivo
 * cuando lleguen las felicitaciones reales.
 */

const bienvenida = document.getElementById("bienvenida");
const empezar = document.getElementById("empezar");
const juego = document.getElementById("juego");
const tituloJuego = document.getElementById("titulo-juego");
const subtituloJuego = document.getElementById("subtitulo-juego");
const progreso = document.getElementById("progreso");
const reproductor = document.getElementById("reproductor");
const formularioRespuesta = document.getElementById("formulario-respuesta");
const grupoOpciones = document.getElementById("grupo-opciones");
const opciones = document.getElementById("opciones");
const confirmar = document.getElementById("confirmar");
const siguiente = document.getElementById("siguiente");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");

let indiceActual = 0;
let aciertos = 0;

function crearOpciones() {
    const fragmento = document.createDocumentFragment();

    invitados.forEach((invitado) => {
        const etiqueta = document.createElement("label");
        etiqueta.className = "opcion-invitado";

        const opcion = document.createElement("input");
        opcion.type = "radio";
        opcion.name = "respuesta";
        opcion.value = invitado.id;

        const texto = document.createElement("span");
        texto.textContent = invitado.nombre;

        etiqueta.append(opcion, texto);
        fragmento.append(etiqueta);
    });

    opciones.replaceChildren(fragmento);
}

function cargarAudioActual() {
    const invitadoActual = invitados[indiceActual];

    progreso.textContent = "Audio " + (indiceActual + 1) + " de " + invitados.length;
    reproductor.src = invitadoActual.audio;
    reproductor.load();

    formularioRespuesta.reset();
    grupoOpciones.disabled = false;
    confirmar.disabled = true;
    siguiente.hidden = true;
    resultado.textContent = "";
    resultado.className = "resultado";
}

function comprobarRespuesta(evento) {
    evento.preventDefault();

    const respuesta = new FormData(formularioRespuesta).get("respuesta");
    const invitadoActual = invitados[indiceActual];
    const esCorrecta = respuesta === invitadoActual.id;

    if (esCorrecta) {
        aciertos += 1;
        resultado.textContent = "¡Correcto! 🎉";
        resultado.className = "resultado correcto";
    } else {
        const invitadoElegido = invitados.find((invitado) => invitado.id === respuesta);
        resultado.textContent = "No era " + invitadoElegido.nombre + ". La respuesta era " + invitadoActual.nombre + ".";
        resultado.className = "resultado incorrecto";
    }

    grupoOpciones.disabled = true;
    confirmar.disabled = true;
    siguiente.hidden = false;
    siguiente.textContent = indiceActual === invitados.length - 1
        ? "Ver resultado final"
        : "Siguiente audio";
}

function terminarJuego() {
    reproductor.pause();
    reproductor.removeAttribute("src");
    reproductor.load();
    grupoOpciones.hidden = true;
    formularioRespuesta.hidden = true;
    progreso.hidden = true;
    tituloJuego.textContent = "¡Juego terminado!";
    subtituloJuego.textContent = "Has acertado " + aciertos + " de " + invitados.length + " audios. ¡Gracias por jugar!";
    reiniciar.hidden = false;
}

function avanzar() {
    if (indiceActual === invitados.length - 1) {
        terminarJuego();
        return;
    }

    indiceActual += 1;
    cargarAudioActual();
}

function iniciarJuego() {
    indiceActual = 0;
    aciertos = 0;
    bienvenida.hidden = true;
    juego.hidden = false;
    grupoOpciones.hidden = false;
    formularioRespuesta.hidden = false;
    progreso.hidden = false;
    reiniciar.hidden = true;
    tituloJuego.textContent = "¿De quién es esta voz?";
    subtituloJuego.textContent = "Escucha el audio y elige a la persona que crees que habla.";
    crearOpciones();
    cargarAudioActual();
}

empezar.addEventListener("click", iniciarJuego);

formularioRespuesta.addEventListener("change", () => {
    confirmar.disabled = false;
});

formularioRespuesta.addEventListener("submit", comprobarRespuesta);
siguiente.addEventListener("click", avanzar);
reiniciar.addEventListener("click", iniciarJuego);
