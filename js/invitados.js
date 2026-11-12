/*
 * Invitados y sus felicitaciones de audio
 *
 * Cada objeto representa una de las personas que se mostrarán en el juego.
 * `nombre` es el texto de la opción y `audio` indica el archivo que corresponde
 * a esa persona, siempre con una ruta relativa a index.html.
 *
 * Los archivos se guardan en audios/invitados/. Si se sustituye uno de ellos,
 * actualiza también su ruta aquí cuando cambie el nombre o la extensión.
 */
const invitados = [
    { id: "carolina", nombre: "Carolina", audio: "audios/invitados/Carolina.ogg" },
    { id: "marta-y-lucia", nombre: "Marta y Lucía", audio: "audios/invitados/Marta y Lucia.ogg" }
];
