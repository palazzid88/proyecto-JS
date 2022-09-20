
// Variables:
let user = "a";
let pass = 1;
let validacion;
let userIngresado;
let passIngresado;
let userVerificacion;

// Arrays :

// llama al localStorage y trae lo que tiene almacenado en la key carrito, la cual fue asignada en la fx renderizar carrito 
let carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || []; 


// Llamadas al HTML:

let contenedor = document.getElementById("main_container");
let alCarrito = document.getElementById("carrito");
let Total = document.getElementById("total");




// Función para renderizar cardsen DOM
function renderizarCards () {
    
    // creo un div con cada uno de los objetos del array
    stockProductos.forEach(item => { 
    let div = document.createElement('div');
    div.className = 'div_container';

// Creo código de JS dentro del div

let {img, nombre, descripcion, precio, id} = item;

    div.innerHTML = `<card class="card_container">
                        <picture class="card__picture">
                            <img class="img" src="${img}" alt="">
                        </picture>
                        <div class="info_card">
                            <h2 class="title__card">${nombre}</h2>
                            <p class="parraph__card">${descripcion}</p>
                            <p class="parraph__card">$${precio}</p>
                            <span id="pedirContraseña${id}"><span>
                            <input type="number" id="cantidad${id}" class="cantidad_input" value=1>Kgs
                            <button id="btnAñadir${id}" class="button_card" type="button">añadir al carrito</botton>
                        </div>
                    </card>`

// Añado el código al cotenedor 
contenedor.appendChild(div);
})
añadirFuncionBtn (); 
}

//llamo a la funcion click en btn
function añadirFuncionBtn () {
    stockProductos.forEach(item=> {
        document.getElementById(`btnAñadir${item.id}`).addEventListener(`click`, ()=> {
            agregarAlCarrito (item);
        })
    })
}

// agregaral carrito, se fija en el array si el producto existe 
function agregarAlCarrito (item) {
            let existe = carritoDeCompras.some(prod => prod.id === item.id);
            console.log(existe);
            if (existe === false) {
            let cantidad = document.getElementById(`cantidad${item.id}`);
                item.cantidad = cantidad.value;
                carritoDeCompras.push(item);
            }
            else{
                let incrCant = carritoDeCompras.find(prod => prod.id === item.id);
                incrCant.cantidad++;
            }
console.log(carritoDeCompras);
renderizarCarrito ();
}

// Funcion renderizar carrito de compras
function renderizarCarrito () {
    
    alCarrito.innerHTML =""
    carritoDeCompras.forEach(item=>{
        let valorSuma = `${item.precio * item.cantidad}`

        let {img, nombre, cantidad, id, precio} = item;

        let div = document.createElement('div');
        div.className = 'div_carrito'
        div.innerHTML = `<div class="carrito_flex">
        <div class="carrito_info">
            <picture class="carrito__picture">
                <img class="img_carrito" src="${img}" alt="">
            </picture>
            <h2 class="nombre__carrito">${nombre}</h2>
            </div>
            <div class="carrito_cantidad">
            <p calss="cantidad__carrito">Cantidad: ${cantidad} Kg</p>
            <button id="btnSumar${id}" class="button_card" type="button"> (+) </button>
            </div>
            <div class="carrito_precio">
            <p class="precio_carrito">precio-Kg: $${precio}</p>
            <p class="precio_total">total: $${valorSuma}</p>
        </div>
        <button id="btnEliminar${item.id}" class="button_card" type="button">eliminar carrito </button>
    </div>`

    alCarrito.appendChild(div);
})

// Se carga el carrito en el localStorage:
localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

sumarProducto ();
borrarProducto ();
mostrarTotal ();
}

function sumarProducto () {
    carritoDeCompras.forEach(item=> {
        document.getElementById(`btnSumar${item.id}`).addEventListener('click', ()=>{
            console.log("pulso");
            agregarAlCarrito (item);
        })})}
        
        


// Función para borrar producto del carrito
function borrarProducto() {
    carritoDeCompras.forEach(item=> {
        document.getElementById(`btnEliminar${item.id}`).addEventListener("click", ()=>{
            let indice = carritoDeCompras.findIndex(el=> el.id === item.id);
            carritoDeCompras.splice(indice,1);
            renderizarCarrito();
        })
    })
}

// Función Mostrar el Total 
function mostrarTotal() {
    
    Total.innerHTML= "";
    let precioTotal = carritoDeCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    console.log(precioTotal);
    let div = document.createElement('div');
    div.className = 'div_total';
    div.innerHTML = `<h3 class="total_carrito">Total carrito: $${precioTotal}</h3>
                     <button id="" class="button_card" type="button">Finalizar compra </button>`;
    Total.appendChild(div);

}
    
// llamado al render de carrito
renderizarCarrito();

// llamado al render Cards
renderizarCards();
