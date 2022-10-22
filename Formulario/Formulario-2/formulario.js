function traerDatos(){
    let inputNombre = document.getElementById("nombre");
    let inputApellido = document.getElementById("apellido");
    let inputEmail = document.getElementById("email");
    let inputContraseña = document.getElementById("contrasena");

    let informaciones = {
        "Nombre": inputNombre.value,
        "Apellido": inputApellido.value,
        "Email": inputEmail.value,
        "Contraseña": inputContraseña.value
    }

    mostrar(informaciones);
}

function mostrar(information){
    let seccion = document.getElementById("mostrar")
    seccion.innerHTML = information.inputNombre + " " + information.inputApellido + " " + information.inputEmail + " " + information.inputContraseña
}

let boton = document.getElementById("Registrar");
boton.onclick = traerDatos;
