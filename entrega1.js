let producto = prompt("Decime qué producto querés comprar");
while (producto == "" || producto == " ") {
  alert("Producto invalido");
  producto = prompt("Decime qué producto querés comprar");
}

let precioProductoSinParsear = prompt('Cuál es el precio del/la '+producto);
while (precioProductoSinParsear == "" || precioProductoSinParsear == " ") {
  alert("Precio invalido");
  precioProductoSinParsear = prompt("Cuál es el precio del/la "+producto);
}

precioProducto = parseInt(precioProductoSinParsear);

let precioConDescuento = 0;

let descuento = prompt(
  "Contame como vas a pagar los $"+precioProducto+" del/la "+producto+
    "\n1 - Tarjeta de crédito (-15%).\n2 - Billetera electrónica (-10%).\n3 - Cupón de descuento (-20%)."
);

   switch(descuento){
    case '1':
      calcularDescuentoTC(precioProducto);
      break;

    case '2':
      calcularDescuentoWallet(precioProducto); 
      break;

    case '3':
      calcularDescuentoCupon(precioProducto);
      break;

    default:
      alert('Ingresaste un número equivocado');
  }

function calcularDescuentoTC(precioProducto) {
    precioConDescuento = precioProducto * 0.85;  
}

function calcularDescuentoWallet(precioProducto)  {
    precioConDescuento = precioProducto * 0.90;
}

function calcularDescuentoCupon(precioProducto) {
    precioConDescuento = precioProducto * 0.80;
}

alert('El precio con descuento del/la '+producto+' es de $'+precioConDescuento);
