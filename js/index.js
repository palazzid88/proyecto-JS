//Verdulería "De la huerta a tu casa"


//declaración de variables:

let producto;
let carrito;


producto = prompt("que producto desea comprar? \n Manzana \n Banana \n Pera \n frutilla \n kiwi \n Naranja");

do {
    switch (producto) {
        case "banana":
            carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $190");
            console.log(carrito);
            alert(carrito)
            break;
        case "manzana":
            carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $250");
            console.log(carrito);
            alert(carrito);
            break;
        case "Pera":
            carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $160");
            console.log(carrito);
            alert(carrito);
            break;
        case "naranja":
            carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $120");
            console.log(carrito);
            alert(carrito);
            break;
        case "frutilla":
            carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $310");
            console.log(carrito);
            alert(carrito);
            break;
        case "kiwi":
            carrito = ("tu producto elegido es " + producto + " El valor del Kg es de $320");
            console.log(carrito);
            alert(carrito);
            break;            
        default:
            console.log("Ingresaste un producto inexistente");
            alert("Reingrese un producto, o escriba escape")
            producto = prompt("que producto desea comprar? \n Manzana \n Banana \n Pera \n frutilla \n kiwi \n Naranja")
            continue;
    }
    producto = prompt("ingrese otro producto, si desea salir presione N")
}
while (producto != "n")
console.log("Gracias por utilizar nuestra tienda oline!");
alert("Gracias por utilizar nuestra tienda oline!")