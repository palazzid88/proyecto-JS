

let email = document.getElementById('inputEmail4');
let nombre = document.getElementById('inputFirstName');
let apellido = document.getElementById('inputSecondName');
let celular = document.getElementById('inputCellphone');
let direccion = document.getElementById('inputAddress');
let altura = document.getElementById('inputAddresNumber');
let dia = document.getElementById('autoSizingSelectDay');
let hora = document.getElementById('autoSizingSelectHora'); 
let total = document.getElementById('total');
let pedido;
let carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || []; 
let alCarrito = document.getElementById('carrito_pago')


// }
function pedir () {
  pedido = document.getElementById('btn_pedido').addEventListener('click', ()=> {
if((email.value && nombre.value && apellido.value && celular.value && direccion.value && altura.value && dia.value && hora.value) != "" ) {
  console.log("sisis")


  Swal.fire({
    title: '¿Desea confirmar la compra?',
    text: "Click para confirmar la compra",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Confirmar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        timer: 8000,
        title: 'Gracias por su compra!',
        text: 'Compra confirmada.',
        icon: 'success'},
        localStorage.removeItem("carrito"),
        window.location = "../index.html"
        )
    }
    else{
      swal.fire(
        'Esperamos su compra',
        'vualva pronto',
        'warning'
      )
    }
  })





  renderizarPedido ();
}else{

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Por favor, complete los campos',
  })
  console.log("campos incompletos");
}
    // console.log(email.value, nombre.value ,apellido.value, celular.value, direccion.value, altura.value, dia.value, hora.value) 
  })

}

pedir();

function renderizarPedido () {
  let final = document.getElementById('final')
  let div = document.createElement('div');
  div.className = 'div_container'
  final.innerHTML ="";

  div.innerHTML = `<card class="card_container card_compra">
                    <p clas="p_compra">${nombre.value} ${apellido.value}</p>
                    <h4 class="h4_compra">Gracias por su compra</h4>
                    <h5 class="h5_compra">Usted recibirá un mail d econfirmación con su compra efectuada a su e-mail:</h5>
                    <p class="p_compra">${email.value}</p>
                    <h4 class="h4_compra">se reserva fue tomada a nombre de:</h4>
                    <h4 class="h4_compra">Con direción en:</h4>
                    <p class="p_compra">${direccion.value} ${altura.value}</p>
                  </card>`
  final.appendChild(div);
}


// Funcion renderizar carrito de compras
function renderizarCarrito () {
    
  alCarrito.innerHTML =""
  carritoDeCompras.forEach(item=>{
  valorSuma = `${item.precio * item.cantidad}`

      let {img, nombre, cantidad, id, precio, unidad} = item;

      let div = document.createElement('div');
      div.className = 'div_carrito'
      div.innerHTML = `<div class="carrito_flex">
                        <div class="carrito_info">
                        <picture class="carrito__picture">
                          <img class="img_carrito" src=".${img}" alt="">
                        </picture>
                          <h4 class="nombre__carrito">${nombre}</h4>
                        </div>
                        <div class="carrito_cantidad">
                          <p calss="cantidad__carrito">${cantidad} ${unidad}</p>
                        </div>
                        <div class="carrito_precio">
                          <p class="precio_total">total: $${valorSuma}</p>
                        </div>
                      </div>`

  alCarrito.appendChild(div);

})}

function mostrarTotal() {
    
  total.innerHTML= "";
  let precioTotal = carritoDeCompras.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  let div = document.createElement('div');
  div.className = 'div_total';
  div.innerHTML = `<h3 class="total_carrito">Total carrito: $${precioTotal}</h3>`;
                   
  total.appendChild(div);

}

renderizarCarrito ();
mostrarTotal ();
