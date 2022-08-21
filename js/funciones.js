// declaración de variables:

let user = "Gustavo Cerati";
let pass = "1234";
let validacion;
let producto;
let carrito;

// Login 

ingreso ();


if (validacion == true) {
    pedirProducto ();
    productoIngresado ();
}


// funciones:

function ingreso () {
    for (i=0; i<3; i++) {
    
        let userIngresado = prompt("ingrese su nombre de usuario:");
        let passIngresado = prompt("Ingrese su contraseña")
    
        if (userIngresado == user && pass == passIngresado) {
            console.log("Ingreso exitoso")
            alert("ingreso exitoso");
            validacion = true;
            break;
        }
        else {
            validacion = false
            console.log(validacion)
            if (userIngresado !== user && passIngresado == pass) {
                console.log("usuario invalido");
                alert("usuario inválido");
                validacion = false;
            }
            else {
                if (userIngresado == user && passIngresado !== pass) {
                    console.log("contraseña inválida");
                    alert("contraseña inválido")
                    validacion = false;
                }
                else {
                    console.log("Usuario y contraseña inválidas")
                    alert("usuario y contraseña inválidas")
                    validacion = false;
                }
            }
        } 
    }
    if (validacion == false) {
    console.log("superó el límite de intentos")
    alert("superó el limite de intentos")
}
}

function pedirProducto () {
    producto = prompt("Que producto desea comprar: \n Manzana \n banana \n pera \n frutilla \n kiwi \n naranja \n o presiones n para salir");
}

function productoIngresado () {
    do {
        switch (producto) {
            case "banana":
                carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $190");
                console.log(carrito);
                alert(carrito)
                break;
            case "manzana":
                carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $250");
                console.log(carrito);
                alert(carrito);
                break;
            case "pera":
                carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $160");
                console.log(carrito);
                alert(carrito);
                break;
            case "naranja":
                carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $120");
                console.log(carrito);
                alert(carrito);
                break;
            case "frutilla":
                carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $310");
                console.log(carrito);
                alert(carrito);
                break;
            case "kiwi":
                carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $320");
                console.log(carrito);
                alert(carrito);
                break;
            case "n":
                producto = "n"
                console.log(producto);
                break;        
            default:
                console.log("Ingresaste un producto inexistente");
                alert("ingresaste un producto inexistente")
                producto = prompt("Reingrese el producto o presione N. \n Manzana \n Banana \n Pera \n frutilla \n kiwi \n Naranja")
                continue;
        }
        if (producto != "n"){
            pedirProducto ()
        }
        }

    while (producto !== "n") {
}
    saludo ();
}

function saludo () {
    console.log("graias por utilizar nuestra tienda on line")
    alert("gracias por utilizar nuestra tienda on line")
}