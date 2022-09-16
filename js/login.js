// Funcion Login

function ingreso () {
    let btn_log = document.getElementById('btn_log');
    btn_log.addEventListener('click', ()=> {
    userIngresado = document.getElementById('user_log').value;
    passIngresado = document.getElementById('pass_log').value;
    

    for (i=0; i<3; i++) {
        if (userIngresado == user && pass == passIngresado) {
            console.log("Ingreso exitoso")
            alert("ingreso exitoso");
            validacion = true;
            mostrarLogin ()
            break;
        }
        else {
            validacion = false;
            console.log(validacion);
            console.log("usuario invalido");
            mostrarLogin ();
            }
}
})
}       
if (validacion) {
console.log("superó el límite de intentos")
}

// Muestra Resultado de login correcto o incorrecto
function mostrarLogin () {
    userVerificacion = document.getElementById('userValidacion')
    if(validacion) {
        userVerificacion.innerText = "Login Correcto!"
    }
    else{
    userVerificacion.innerText = 
    `Datos invalidos
     Ingrese nuevamente`;
    console.log("usuario incorrecto");
    }
}
