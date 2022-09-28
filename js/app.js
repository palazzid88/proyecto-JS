
// Variables:

let userVerificacion;
let productoFiltrado=[];

// Arrays :
// llama al localStorage y trae lo que tiene almacenado en la key carrito, la cual fue asignada en la fx renderizar carrito 
let carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || []; 


// Llamadas al HTML:

let alCarrito = document.getElementById("carrito");
let Total = document.getElementById("total");
let contadorCarrito = document.getElementById('contador');
let contenedor = document.getElementById("main_container");
let filtrar = document.getElementById("btn_buscador")





// Función para renderizar cards en DOM
function renderizarCards (prod) {
    contenedor.innerHTML = "";
    prod.forEach(item => { 
    let div = document.createElement('div');
    div.className = 'div_container';

// Creo código de JS dentro del div

let {img, nombre, descripcion, precio, id, unidad} = item;

    div.innerHTML = `<card class="card_container">
                        <picture class="card__picture">
                            <img class="img" src="${img}" alt="">
                        </picture>
                        <div class="info_card">
                            <h2 class="title__card">${nombre}</h2>
                            <p class="parraph__card">${descripcion}</p>
                            <p class="parraph__card">$${precio}</p>
                            <span id="pedirContraseña${id}"><span>
                            <input type="number" id="cantidad${id}" class="cantidad_input" value=1>${unidad}
                            <button id="btnAñadir${id}" class="button_card" type="button">añadir al carrito</botton>
                        </div>
                    </card>`

// Añado el código al cotenedor 
contenedor.appendChild(div);
})
añadirFuncionBtn (prod); 
}

//llamo a la funcion click en "añadir al carrito"
function añadirFuncionBtn (prod) {
    prod.forEach(item=> {
        document.getElementById(`btnAñadir${item.id}`).addEventListener(`click`, ()=> {
            agregarAlCarrito (item);

//Llamado a notificación Toastify
            Toastify({
                text: "Producto añadido al carrito",
                duration: 2000,
                // destination: "https://github.com/apvarun/toastify-js",
                // newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #ff4400, #80bb0f, #00d4ff)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        })
    })
}

// funcion de buscador de navbar
function buscadorPorInput () {
    filtrar.addEventListener(`click`, ()=> {
        let productoInput = document.getElementById("ingreso_buscador").value;
        productoFiltrado = stockProductos.filter(prod => prod.nombre.includes(productoInput))
        renderizarCards(productoFiltrado);
    })
}


filtroProductos ();
// función renderizar productos desde navbar - *TODOS LOS PRODUCTOS*
function filtroProductos() {
    let seleccion = document.getElementById('render_cards').addEventListener('click', ()=> {
        renderizarCards(stockProductos);
    })
}

// función renderizar filtro productos desde navbar frutas
fitrarPorFruta ();

function fitrarPorFruta () {
    let seleccion = document.getElementById('filtro_frutas').addEventListener('click', ()=> {
        filtroTipo = stockProductos.filter(prod => prod.tipo === "fruta");
        renderizarCards(filtroTipo);
    })
}

fitrarPorVerdura ();
// función renderizar filtro productos desde navbar verduras
function fitrarPorVerdura () {
    let seleccion = document.getElementById('filtro_verduras').addEventListener('click', ()=> {
        filtroTipo = stockProductos.filter(prod => prod.tipo === "verdura");
        renderizarCards(filtroTipo);
    })
}

fitrarPorEspecias ();
// función renderizar filtro productos desde navbar Especias
function fitrarPorEspecias () {
    let seleccion = document.getElementById('filtro_especias').addEventListener('click', ()=> {
        filtroTipo = stockProductos.filter(prod => prod.tipo === "especias");
        renderizarCards(filtroTipo);
    })
}


buscadorPorInput ();

// agregar al carrito, se fija en el array si el producto existe 
function agregarAlCarrito (item) {
            let existe = carritoDeCompras.some(prod => prod.id === item.id);
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
            <h4 class="nombre__carrito">${nombre}</h4>
            </div>
            <div class="carrito_cantidad">
                <p calss="cantidad__carrito">${cantidad} Kg</p>
                <button id="btnSumar${id}" class="button_cardSumar" type="button"> (+) </button>
            </div>
            <div class="carrito_precio">
                <p class="precio_total">total: $${valorSuma}</p>
                <button id="btnEliminar${item.id}" class="button_cardEliminar" type="button">X</button>
            </div>
    </div>`

    
    alCarrito.appendChild(div);

})

// indice contador de carrito
contadorCarrito.innerText = carritoDeCompras.length

// Se carga el carrito en el localStorage:
localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));


sumarProducto ();
borrarProducto ();
mostrarTotal ();
vaciarCarrito();

}

function sumarProducto () {
    carritoDeCompras.forEach(item=> {
        document.getElementById(`btnSumar${item.id}`).addEventListener('click', ()=>{
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
    let div = document.createElement('div');
    div.className = 'div_total';
    div.innerHTML = `<h3 class="total_carrito">Total carrito: $${precioTotal}</h3>
                     <button id="finalizar_compra" class="button_card" type="button">
                        <a href="../pages/login.html" class="button_card">Finalizar compra!<a>
                     </button>
                     <button id="btn_vaciar" class="button_card" type="button">Vaciar Carrito </button>`;
                     
    Total.appendChild(div);

}





// funcion con boton para vaciar la totalidad del contenido del array carrito.
function vaciarCarrito () {
    let vaciar = document.getElementById("btn_vaciar").addEventListener("click", ()=> {
        Swal.fire({
            title: 'Seguro?',
            text: "Está seguro que desea eliminar su compra!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: 'cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                let indice = carritoDeCompras.length
                carritoDeCompras.splice(0,indice);
                renderizarCarrito();        
              Swal.fire(
                'vacío!',
                'Su carrito se a vaciado!.',
                'Guardado'
              )
            }
          })
    })
}


// llamado al render de carrito
renderizarCarrito();


// llamado al render Cards
renderizarCards(stockProductos);




