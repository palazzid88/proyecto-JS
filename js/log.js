

let email = document.getElementById('inputEmail4');
let nombre = document.getElementById('inputFirstName');
let apellido = document.getElementById('inputSecondName');
let celular = document.getElementById('inputCellphone');
let direccion = document.getElementById('inputAddress');
let altura = document.getElementById('inputAddresNumber');
let dia = document.getElementById('autoSizingSelectDay');
let hora = document.getElementById('autoSizingSelectHora'); 
let total = document.getElementById('total-a-pagar');

// import { valorSuma } from './app.js'
// console.log(valorSuma);

// function totalAPagar () {
//   total.innerText = `${valorSuma}`; 
// }
function pedir () {
  let pedido = document.getElementById('btn_pedido').addEventListener('click', ()=> {
    console.log(email.value, nombre.value ,apellido.value, celular.value, direccion.value, altura.value, dia.value, hora.value) 
    renderizarPedido ();
  })

}

pedir();

function renderizarPedido () {
  let final = document.getElementById('final')
  let div = document.createElement('div');
  div.className = 'div_container'
  final.innerHTML ="";

  div.innerHTML = `<card class="card_container">
                    <h4>Gracias por su compra</h4>
                    <h5>Usted recibirá un mail d econfirmación con su compra efectuada a su e-mail:</h5>
                    <p>${email.value}</p>
                    <h4>se reserva fue tomada a nombre de:</h4>
                    <p>${nombre.value} ${apellido.value}</p>
                    <h4>Con direción en:</h4>
                    <p>${direccion.value} ${altura.value}</p>
                  </card>`
  final.appendChild(div);
                                    

  // let {}
}
