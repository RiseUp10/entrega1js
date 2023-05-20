let producto = prompt("Decime qué producto querés comprar");
while (producto == "" || producto == " ") {
  alert("Producto invalido");
  producto = prompt("Decime qué producto querés comprar");
}

let descuento = prompt(
  "Contame como vas el/la "+producto+
    "\n1 - Tarjeta de crédito (-15%).\n2 - Billetera electrónica (-10%).\n3 - Cupón de descuento (-20%)."
);

while (descuento == '1' || descuento == '2' || descuento == '3') {
 
    let precioProductoSinParsear = prompt('Cuál es el precio del/la '+producto);
        while (precioProductoSinParsear == "") {
        alert("Precio invalido");
        precioProductoSinParsear = prompt("Cuál es el precio del/la "+producto);
    }
    
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
  
  descuento = prompt(
    "Contame como vas a pagar los $"+precioProducto+" del/la "+producto+
      "\n1 - Tarjeta de crédito (-15%).\n2 - Billetera electrónica (-10%).\n3 - Cupón de descuento (-20%)."
  );
}



function calcularDescuentoTC(parseInt(precioProductoSinParsear)) {
    precioConDescuento = precioProducto * 0.85;  
}

function calcularDescuentoWallet(parseInt(precioProductoSinParsear))  {
    precioConDescuento = precioProducto * 0.90;
}

function calcularDescuentoCupon(parseInt(precioProductoSinParsear)) {
    precioConDescuento = precioProducto * 0.80;
}

alert('El precio con descuento del/la '+producto+' es de $'+precioConDescuento);
