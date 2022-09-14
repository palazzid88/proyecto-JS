
// Variables:
let user = "a";
let pass = 1;
let validacion;
let userIngresado;
let passIngresado;
let userVerificacion;
let calculo;

// Arrays :
let carritoDeCompras = [];


// Llamadas al HTML:

let contenedor = document.getElementById("main_container");
let alCarrito = document.getElementById("carrito");





// Creo elementos desde JS a DOM-HTML.
// llamo al array stockProduuctos desde stock.js, y lo itero.

// Validación Login:
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
    

// llamada a la funcion Login
ingreso ();


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



// Crear stock en HTML
stockProductos.forEach(item => { 

// creo un div con cada uno de los objetos delarray
    let div = document.createElement('div')
    div.className = 'div_container'

// Creo código de JS dentro del div
    div.innerHTML = `<card class="card_container">
                        <picture class="card__picture">
                            <img class="img" src="${item.img}" alt="">
                        </picture>
                        <div class="info_card">
                            <h2 class="title__card">${item.nombre}</h2>
                            <p class="parraph__card">${item.descripcion}</p>
                            <p class="parraph__card">$${item.precio}</p>
                            <span id="pedirContraseña${item.id}"><span>
                            <div class="input">
                                <input type="number" id="cantidad${item.id}" placeholder="ingrese cantidad de kg">
                            </div>
                            <button id="btnAñadir${item.id}" class="button_card" type="button">añadir al carrito</botton>
                        </div>
                    </card>`

// Añado el código al cotenedor 
contenedor.appendChild(div);

// Si el login es True = puedo añadir al carrito - sino pide logearse
let btnAñadir = document.getElementById(`btnAñadir${item.id}`);
let totalKg = document.getElementById(`cantidad${item.id}`);
btnAñadir.addEventListener('click', ()=> {
calculo = item.precio*totalKg.value
console.log(calculo);
// console.log(calculo);
    if (validacion) {
        agregarAlCarrito(item.id);
    }
    else{
        let pedirContraseña = document.getElementById(`btnAñadir${item.id}`);
        pedirContraseña.innerText = "Ingrese nombre de usuario y contraseña para realizar la compra"

    }
}
)
}
)


function agregarAlCarrito (id) {

// Ingreso a la función y busco coincidencia con id
    let productoAñadido = stockProductos.find(item=> item.id == id);

// Realizo push del producto encontrado en array de objetos y lo pusheo al carritDeCompras
    carritoDeCompras.push(productoAñadido);

// llamo a la función mostrarCarrito
    mostrarCarrito(productoAñadido)
}


// función mostrarCarrito
function mostrarCarrito (productoAñadido) {
// creo un div por cada producto seleccionado en JS
    let div = document.createElement('div')
    div.className = 'carrito'
    div.innerHTML = `<h3 id="text__carrito">${productoAñadido.nombre}</h3>
                     <h4 id="precio_kg">Precio por Kg: $${productoAñadido.precio}</h4>
                     <h3 id="precio_total">Precio total: $${calculo}<h3>
                     <button class="btn_eliminar">Eliminar carrito</button>`
    totalCarritoPrecio ();
                     
// envío el div al HTML
    alCarrito.appendChild(div)
}

function totalCarritoPrecio () {
    let mostrarTotal = carritoDeCompras.reduce((acc, item) => acc + item.precio, 0)
    console.log("total", mostrarTotal);
}
