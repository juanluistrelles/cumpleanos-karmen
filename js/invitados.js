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
    { id: "alisson", nombre: "Alisson", audio: "audios/invitados/Alisson.ogg" },
    { id: "belen", nombre: "Belén", audio: "audios/invitados/Belén.ogg" },
    { id: "carolina", nombre: "Carolina", audio: "audios/invitados/Carolina.ogg" },
    { id: "fran", nombre: "Fran", audio: "audios/invitados/Fran.ogg" },
    { id: "juanlu", nombre: "Juanlu", audio: "audios/invitados/Juanlu.ogg" },
    { id: "marga", nombre: "Marga", audio: "audios/invitados/Marga.ogg" },
    { id: "marta-y-lucia", nombre: "Marta y Lucía", audio: "audios/invitados/Marta y Lucia.ogg" },
    { id: "moya", nombre: "Moya", audio: "audios/invitados/Moya.ogg" },
    { id: "nati", nombre: "Nati", audio: "audios/invitados/Nati.ogg" }
];
