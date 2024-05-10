// Definimos los usuarios
var usuarios = [
    {correo: "soytecnico@gmail.com", contraseña: "hola1234"},
    {correo: "soyusuario@gmail.com", contraseña: "hola1234"},
    {correo: "soyadministrador@gmail.com", contraseña: "hola1234"}
];

// Función para verificar si el correo y la contraseña son correctos
function verificarCredenciales(correo, contraseña) {
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === correo && usuarios[i].contraseña === contraseña) {
            return true;
        }
    }
    return false;
}

// Función para cambiar el correo
function cambiarCorreo() {
    var correoActual = document.getElementById('correoActual').value;
    var correoNuevo = document.getElementById('correoNuevo').value;
    var contraseña = document.getElementById('contraseñaCorreo').value;

    if (!correoActual || !correoNuevo || !contraseña) {
        alert("Introduce correo actual, correo nuevo y contraseña");
        return;
    }
    if (!verificarCredenciales(correoActual, contraseña)) {
        alert("Este usuario no está registrado o la contraseña introducida no es correcta");
        return;
    }
    // Aquí puedes agregar el código para cambiar el correo
}

// Función para reestablecer la contraseña
function reestablecerContraseña() {
    var contraseñaActual = document.getElementById('contraseñaActual').value;
    var contraseñaNueva = document.getElementById('contraseñaNueva').value;

    if (!contraseñaActual || !contraseñaNueva) {
        alert("Introduce contraseña actual y contraseña nueva");
        return;
    }
    if (contraseñaActual !== "hola1234") {
        alert("La contraseña introducida no es correcta");
        return;
    }
    if (contraseñaNueva.length < 8) {
        alert("La contraseña debe tener como mínimo 8 caracteres");
        return;
    }
    // Aquí puedes agregar el código para reestablecer la contraseña
}

// Función para eliminar la cuenta
function eliminarCuenta() {
    var contraseña = document.getElementById('contraseñaEliminar').value;

    if (!contraseña) {
        alert("Introduce contraseña");
        return;
    }
    if (contraseña !== "hola1234") {
        alert("La contraseña introducida no es correcta");
        return;
    }
    alert("Cuenta eliminada correctamente");
    // Aquí puedes agregar el código para eliminar la cuenta
}

// Añadimos los manejadores de eventos a los botones
document.getElementById('botonCorreo').addEventListener('click', cambiarCorreo);
document.getElementById('botonContraseña').addEventListener('click', reestablecerContraseña);
document.getElementById('botonEliminar').addEventListener('click', eliminarCuenta);
