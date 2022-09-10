
// Arrays :
let carritoDeCompras = [];


// Llamadas al HTML:

let contenedor = document.getElementById("main_container");
let alCarrito = document.getElementById("carrito");





// Creo elementos desde JS a DOM-HTML.
// llamo al array stockProduuctos desde stock.js, y lo itero.

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
                            <div class="input">
                                <input type="number" id="cantidad" placeholder="ingrese cantidad de kg">
                            </div>
                            <button id="btnAñadir${item.id}" class="button_card" type="button">añadir al carrito</botton>
                        </div>
                    </card>`

// Añado el código al cotenedor 
contenedor.appendChild(div);

// Creo Evento Click para botón de producto
    let btnAñadir = document.getElementById(`btnAñadir${item.id}`);
    btnAñadir.addEventListener('click', ()=> {

// Invoco a la función agregarCarrito
    agregarAlCarrito(item.id);
    })

});




// Creo función para añadir el producto filtrado al array carritoDeCompras
function agregarAlCarrito (id) {

// Ingreso a la función y busco coincidencia con id
    let productoAñadido = stockProductos.find(item=> item.id == id);

// Realizo Push del producto encontrado en array de objetos y lo pusheo al carritDeCompras
    carritoDeCompras.push(productoAñadido);

// llamo a la función mostrarCarrito
    mostrarCarrito(productoAñadido)
}


// función mostrarCarrito
function mostrarCarrito (productoAñadido) {

// creo un div por cada producto seleccionado en JS
    let div = document.createElement('div');
    div.className = 'carrito';
    div.innerHTML = `<h3 id="text__carrito">${productoAñadido.nombre}</h3>
                     <h4 id="total">Precio por Kg: $${productoAñadido.precio}</h4>
                     <button class="btn_eliminar">Eliminar carrito</button>`
                     
// envío el div al HTML
    alCarrito.appendChild(div)
}
    

