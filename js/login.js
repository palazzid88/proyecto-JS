// Funcion Login

//variables
let user = "a@mail.com";
let pass = "a";
let validacion;
let userIngresado;
let passIngresado;
let btn_log;

ingreso();

function ingreso () {
    // for (i=0; i<3; i++) {
    btn_log = document.getElementById('btn_login').addEventListener('click', ()=> {
        userIngresado = document.getElementById('user_log').value;
        passIngresado = document.getElementById('pass_log').value;
        console.log(userIngresado);
        console.log(passIngresado);
        
        if (userIngresado == user && pass == passIngresado) {
            console.log("Ingreso exitoso")
            validacion = true;

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Acceso validado'
              })

            // mostrarLogin ()
            // break;
        }
        else {
            validacion = false;
            console.log(validacion);
            console.log("usuario invalido");
            // mostrarLogin ();

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Login incorrecto'
            })
        }
})}
       
// if (validacion) {
// console.log("superó el límite de intentos")
// }


// Muestra Resultado de login correcto o incorrecto
function mostrarLogin () {
    userVerificacion = document.getElementById('userValidacion')
    if(validacion) {
        userVerificacion.innerText = "Login Correcto!"
    }
    else{
    alert("incorrecto")
    // userVerificacion.innerText = 
    // `Datos invalidos
    //  Ingrese nuevamente`;
    // console.log("usuario incorrecto");
    }
}
