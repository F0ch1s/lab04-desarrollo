function generarContrasenaSegura(longitud, incluirMayusculas = true, incluirMinusculas = true, incluirNumeros = true, incluirSimbolos = true) {
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteresDisponibles = '';

    if (incluirMayusculas) caracteresDisponibles += letrasMayusculas;
    if (incluirMinusculas) caracteresDisponibles += letrasMinusculas;
    if (incluirNumeros) caracteresDisponibles += numeros;
    if (incluirSimbolos) caracteresDisponibles += simbolos;

    if (caracteresDisponibles.length === 0) {
        throw new Error('Debes incluir al menos un tipo de carácter para generar la contraseña.');
    }

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
        contrasena += caracteresDisponibles[indiceAleatorio];
    }

    return contrasena;
}

function generarYMostrarContrasena() {
    const longitud = document.getElementById('longitud').value;
    const incluirMayusculas = document.getElementById('mayusculas').checked;
    const incluirMinusculas = document.getElementById('minusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirSimbolos = document.getElementById('simbolos').checked;

    try {
        const contrasena = generarContrasenaSegura(
            parseInt(longitud),
            incluirMayusculas,
            incluirMinusculas,
            incluirNumeros,
            incluirSimbolos
        );
        document.getElementById('resultado').textContent = contrasena;
    } catch (error) {
        document.getElementById('resultado').textContent = error.message;
    }
}
