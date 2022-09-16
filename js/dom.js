
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
let Total = document.getElementById("total");




// Función para renderizar cardsen DOM
function renderizarCards () {
    
    // creo un div con cada uno de los objetos del array
    stockProductos.forEach(item => { 
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
})
añadirFuncionBtn (); 
}

//llamo a la funcion click en btn
function añadirFuncionBtn () {
    stockProductos.forEach(item=> {
        document.getElementById(`btnAñadir${item.id}`).addEventListener(`click`, ()=> {
            agregarAlCarrito (item)
        })
    })
}

// agregaral carrito, se fija en el array si el producto existe 
function agregarAlCarrito (item) {
            let existe = carritoDeCompras.some(prod => prod.id === item.id);
            console.log(existe);
            if (existe === false) {
                item.cantidad = 1;
                carritoDeCompras.push(item)
            }
            else{
                let incrCant = carritoDeCompras.find(prod => prod.id === item.id)
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
        let div = document.createElement('div');
        div.className = 'div_carrito'
        div.innerHTML = `<div class="carrito">
        <h2 class="nombre_carrito">${item.nombre}</h2>
        <p class="precio__carrito">precio por Kg: $${item.precio}</p>
        <p calss="cantidad__carrito>Cantidad: ${item.cantidad}<p>
        <p class="precio_total">Precio total: $${valorSuma}<p>
        <button id="btnEliminar${item.id}" class="button_card" type="button">eliminar carrito </botton>
    </div>`

    alCarrito.appendChild(div);
})
borrarProducto ();
mostrarTotal ();
}

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
    div.innerHTML = `<h3 class="total_carrito">Total carrito: $${precioTotal}<h3>`;
    Total.appendChild(div);

}
    


renderizarCards();

