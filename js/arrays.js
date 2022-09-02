// variables:

// Arrays :
const productos = [];
const carrito = [];
const totalPrecio = [];

// Variables de Login
let user = "a";
let pass = "1";

// Variables de proceso:
let productoFiltrado;
let productoElegido;
let productoCarrito;
let precioProducto;
let kilogramo;
let totalPrecioKg = 0;
let userIngresado;
let passIngresado;


// Constructor de objetos
class producto {
    constructor (id, nombre, precio, stock, unidad, estacion, tipo) { 
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.unidad = unidad;
    this.estacion = estacion;
    this.tipo = tipo;
}
} 

// Objetos construidos:
let banana = new producto (1000, "banana", 180, "1000", "kg", "anual", "fruta");
let manzana = new producto (1000, "manzana", 190, "1000", "kg", "anual", "fruta");
let naranja = new producto (1000, "naranja", 200, "1000", "kg", "anual", "fruta");
let frutilla = new producto (1000, "frutilla", 320, "1000", "kg", "anual", "fruta");
let kiwi = new producto (1000, "kiwi", 310, "1000", "kg", "anual", "fruta");
let pera = new producto (1000, "pera", 160, "1000", "kg", "anual", "fruta");


// Objetos pusheados al Array de productos
productos.push (banana, manzana, naranja, frutilla, kiwi, pera);
console.log(productos);





// Login - acceso

ingreso ();
if (validacion) { //EL pedir producto se dá si la validación del user es True
    pedirProducto ();
    while (validacion) {
    productoIngresado ()
}
sumarCarrito ();
}





// funciones:

// Funcion Login 
function ingreso () {
        for (i=0; i<3; i++) {
        
            userIngresado = prompt("ingrese su nombre de usuario:");
            passIngresado = prompt("Ingrese su contraseña")
        
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

// funcion Ingresar producto por el cliente
function pedirProducto () {
    productoElegido = prompt("Que producto desea comprar: \n Manzana \n banana \n pera \n frutilla \n kiwi \n naranja \n o presione n para salir");
    console.log(productoElegido);
    if (productoElegido === "n") {
        validacion = false
        console.log(`${userIngresado} Gracias por utilizar nuestra cartilla on line!`)
    }
    else {
        validacion = true
    }
}

// 
function productoIngresado () {
    productoFiltrado = productos.find (item => item.nombre === productoElegido);
    console.log(productoFiltrado);

    kilogramo = prompt("ingrese cuantos kilogramos desea");
    totalPrecioKg = productoFiltrado.precio * kilogramo;
    console.log(totalPrecioKg);

    alert(`El producto seleccionado es ${productoFiltrado.nombre} 
    el precio por kg $${productoFiltrado.precio} 
    usted a solicitado ${kilogramo} 
    kg, el total es de $${totalPrecioKg}`);

    carrito.push(productoFiltrado); //Array carrito de compras
    console.log(`carrito`, carrito);

    totalPrecio.push(totalPrecioKg); //Array subtotal de precios
    console.log(totalPrecio);

    pedirProducto ();
}

function sumarCarrito () {
    precioProducto = totalPrecio.reduce((total, producto) => total + producto, 0)
    console.log(precioProducto);
    alert(`El costo total en base a su compra es de $${precioProducto}`)


}

