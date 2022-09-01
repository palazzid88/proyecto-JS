// variables:

const productos = [];
const carrito = [];
const totalPrecio = [];
let user = "a";
let pass = "1";

let productoFiltrado;
let productoElegido;
let productoCarrito;
let precioProducto;
let kilogramo;
let totalPrecioKg = 0;



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

let banana = new producto (1000, "banana", 180, "1000", "kg", "anual", "fruta");
let manzana = new producto (1000, "manzana", 190, "1000", "kg", "anual", "fruta");
let naranja = new producto (1000, "naranja", 200, "1000", "kg", "anual", "fruta");
let frutilla = new producto (1000, "frutilla", 320, "1000", "kg", "anual", "fruta");
let kiwi = new producto (1000, "kiwi", 310, "1000", "kg", "anual", "fruta");
let pera = new producto (1000, "pera", 160, "1000", "kg", "anual", "fruta");


productos.push (banana, manzana, naranja, frutilla, kiwi, pera);
console.log(productos);



// Login

ingreso ();
if (validacion) {
    pedirProducto ();
    while (validacion) {
    productoIngresado ()
    }
    sumarCarrito ();
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
    productoElegido = prompt("Que producto desea comprar: \n Manzana \n banana \n pera \n frutilla \n kiwi \n naranja \n o presiones n para salir");
    console.log(productoElegido);
    if (productoElegido === "n") {
        validacion = false
    }
    else {
        validacion = true
    }
}

function productoIngresado () {
    productoFiltrado = productos.find (item => item.nombre === productoElegido);
    console.log(productoFiltrado);
    kilogramo = prompt("ingrese cuantos kilogramos desea");
    totalPrecioKg = productoFiltrado.precio * kilogramo;
    console.log(totalPrecioKg);
    alert(`El producto seleccionado es ${productoFiltrado.nombre} el precio por kg $${productoFiltrado.precio} usted a solicitado ${kilogramo} kg, el total es de $${totalPrecioKg}`);
    carrito.push(productoFiltrado);
    console.log(`carrito`, carrito);
    totalPrecio.push(totalPrecioKg);
    console.log(totalPrecio);
    pedirProducto ();
}

function sumarCarrito () {
    precioProducto = totalPrecio.reduce((total, producto) => total + producto, 0)
    console.log(precioProducto);
    alert(`El costo total en base a su compra es de $${precioProducto}`)


}

