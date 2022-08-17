//Verdulería "De la huerta a tu casa"


//declaración de variables:

let producto;


producto = prompt("que producto desea comprar? \n Manzana \n Banana \n Pera \n frutilla \n kiwi \n Naranja ");

while (producto == "esc") {
    switch (producto) {
        case "banana":
            console.log("tu producto elegido es " + producto + " El valor del Kg es de $190");
            break;
        case "manzana":
            console.log("tu producto elegido es " + producto + " El valor del Kg es de $250");
            break;
        case "Pera":
            console.log("tu producto elegido es " + producto + " El valor del Kg es de $160");
            break;
        case "naranja":
            console.log("tu producto elegido es " + producto + " El valor del Kg es de $120");
            break;
        case "frutilla":
            console.log("tu producto elegido es " + producto + " El valor del Kg es de $310");
            break;
        case "kiwi":
            console.log("tu producto elegido es " + producto + " El valor del Kg es de $320");
            break;            
        default:
            console.log("Ingresaste un producto inexistente")
            break;
    }
    producto = "esc"
}