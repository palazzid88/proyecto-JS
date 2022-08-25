// Declaración de variable

let user = "Gustavo Cerati";
let pass = "1234";
let validacion;
let producto;
let carrito;
let kilogramos = 0;
let costoParcial = 0;
let costoTotal = 0;

const banana = 180;
const naranja = 190;
const manzana = 220;
const pera = 160;
const frutilla = 300;
const kiwi = 330;

// Login

ingreso ();



// carrito

if (validacion == true) {
    pedirProducto ();
    productoIngresado ();
    // valorFruta ();
    valorTotal();
    alert(`El total de su compra es de $${costoTotal} `)
    saludo ();
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
    while (validacion) {
        switch (producto) {
            case "banana":
                    console.log(`tu producto elegido es ${producto} El valor del Kg es de $${banana}`);
                    alert(`tu producto elegido es ${producto} El valor del Kg es de $${banana}`);
                    kilogramos = prompt(`Cúantos kg de ${producto} desea?`)
                    carrito = banana;
                    valorFruta ();
                    console.log(costoParcial);
                break;
            case "manzana":
                    console.log(`tu producto elegido es ${producto} El valor del Kg es de $${manzana}`);
                    alert(`tu producto elegido es ${producto} El valor del Kg es de $${manzana}`);
                    kilogramos = prompt(`Cúantos kg de ${producto} desea?`)
                    carrito = manzana;
                    valorFruta ();
                    console.log(costoParcial);
                break;
            case "naranja":
                    console.log(`tu producto elegido es ${producto} El valor del Kg es de $${naranja}`);
                    alert(`tu producto elegido es ${producto} El valor del Kg es de $${naranja}`);
                    kilogramos = prompt(`Cúantos kg de ${producto} desea?`)
                    carrito = naranja;
                    valorFruta ();
                    console.log(costoParcial);
                break;
            case "frutilla":
                    console.log(`tu producto elegido es ${producto} El valor del Kg es de $${frutilla}`);
                    alert(`tu producto elegido es ${producto} El valor del Kg es de $${frutilla}`);
                    kilogramos = prompt(`Cúantos kg de ${producto} desea?`)
                    carrito = frutilla;
                    valorFruta ();
                    console.log(costoParcial);
                break;
            case "kiwi":
                    console.log(`tu producto elegido es ${producto} El valor del Kg es de $${kiwi}`);
                    alert(`tu producto elegido es ${producto} El valor del Kg es de $${kiwi}`);
                    kilogramos = prompt(`Cúantos kg de ${producto} desea?`)
                    carrito = kiwi; valorFruta ();
                    console.log(costoParcial);
                break;
            case "pera":
                    console.log(`tu producto elegido es ${producto} El valor del Kg es de $${pera}`);
                    alert(`tu producto elegido es ${producto} El valor del Kg es de $${pera}`);
                    kilogramos = prompt(`Cúantos kg de ${producto} desea?`)
                    carrito = pera; 
                    valorFruta ();
                    console.log(costoParcial);
                break;
            
            case "n":
                validacion = false
                console.log(validacion);
                break;        
            default:
                console.log("Ingresaste un producto inexistente");
                alert("ingresaste un producto inexistente")
                producto = prompt("Reingrese el producto o presione N. \n Manzana \n Banana \n Pera \n frutilla \n kiwi \n Naranja")
                continue;
        }
        if (validacion) {
            pedirProducto ()
        }
        }
}

function valorFruta () {
    costoParcial =costoParcial + (carrito * kilogramos);
    console.log(costoParcial);
    return(costoParcial);
}

function valorTotal () {
    costoTotal = costoTotal + costoParcial;
    console.log(costoTotal);
    return(costoTotal);
}

function saludo () {
    alert("gracias por utilizar nuestra tienda on line!")
}