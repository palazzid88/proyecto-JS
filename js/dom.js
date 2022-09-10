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
    constructor (id, nombre, precio, stock, unidad, estacion, tipo, img) { 
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.unidad = unidad;
    this.estacion = estacion;
    this.tipo = tipo;
    this.img = img;
}
} 

// Objetos construidos:
let banana = new producto (1000, "banana", 180, "1000", "kg", "anual", "fruta", "./img/banana.jpg");
let manzana = new producto (1000, "manzana", 190, "1000", "kg", "anual", "fruta", "./img/manzana.jpg");
let naranja = new producto (1000, "naranja", 200, "1000", "kg", "anual", "fruta", "./img/naranja.jpg");
let frutilla = new producto (1000, "frutilla", 320, "1000", "kg", "anual", "fruta", "./img/frutilla.jpg");
let kiwi = new producto (1000, "kiwi", 310, "1000", "kg", "anual", "fruta", "./img/kiwi.jpg");
let pera = new producto (1000, "pera", 160, "1000", "kg", "anual", "fruta", "./img/pera.jpg");


// Objetos pusheados al Array de productos
productos.push (banana, manzana, naranja, frutilla, kiwi, pera);
console.log(productos);

//Crear elementos desde JS a DOM-HTML

// let card = document.getElementById("main_container");
// let arrayProductos = [banana, manzana, naranja, frutilla, kiwi, pera];
//     for (const producto of arrayProductos) {
//         let  = document.createElement ("li");
//         console.log(producto);
//         li.innerHTML = producto;
//         cards.appendChild (li);
        
//     }
for (const producto of productos) {
    let contenedor = document.createElement ("card");
    contenedor.innerHTML = 
`<card class="card_container">
<picture class="card__picture">
    <img class="img" src="./img/naranja.jpg" alt="">
</picture>
<div class="info_card">
    <h2 class="title__card">${producto.nombre}</h2>
    <p class="parraph__card">Para jugo exprimido</p>
    <button class="button_card" type="button">añadir al carrito</botton>
</div>
</card>`
document.body.appendChild(contenedor);
}
let cards = document.getElementById("main_container");
cards.innerHTML =         
`<card class="card_container">
    <picture class="card__picture">
        <img class="img" src="./img/naranja.jpg" alt="">
    </picture>
    <div class="info_card">
        <h2 class="title__card">${producto.nombre}</h2>
        <p class="parraph__card">Para jugo exprimido</p>
        <button class="button_card" type="button">añadir al carrito</botton>
    </div>
</card>`


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



// Interacción con el HTML-DOM-JS


let carritoPush = document.getElementById ("text__carrito");
let precioTotal = document.getElementById ("total")

//si precioProducto != "", quiere decir que tiene cargado un producto del array carrito
if (precioProducto != "") { 
    console.log(carritoPush.innerText);
    carritoPush.innerHTML = `Total de su carrito:`;
    console.log(carritoPush);
    console.log(precioTotal.innerText);
    precioTotal.innerHTML = `$ ${precioProducto}`
    console.log(precioTotal);
}

//Eventos:
let boton = document.getElementById ("button__manzana");

boton.addEventListener("click", agregarAlCarrito);

function agregarAlCarrito () {
    console.log("producto agregado");
}
