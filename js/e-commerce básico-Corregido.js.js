// Simulación de un e-commerce básico
let carrito = [];
let productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Teléfono", precio: 800 },
  { id: 3, nombre: "Tablet", precio: 500 }
];
// Función para agregar productos al carrito
function agregarAlCarrito(productoId, cantidad) {
  let producto = productos.find(p => p.id == productoId);
  if (producto) {
    carrito.push({ ...producto, cantidad });
    console.log(`Producto agregado: ${producto.nombre}`);
  } else {
    console.log("Producto no encontrado.");
  }
}

// Función para calcular el total del carrito
function calcularTotal() {
  let total = 0;
  carrito.forEach(item => {
    total += item.precio * item.cantidad; // Se multiplicó el precio por la cantidad de productos agregados para obtener el total correcto.
  });
  return total;
}

// Función para aplicar un descuento
function aplicarDescuento(total, descuento) {
  if (descuento > 50 || descuento <= 0) {
    // Se agregó la validación para que el descuento no sea negativo o igual a 0.
    console.log("Descuento no válido. El descuento debe estar entre 1% y 50%.");
    return total;
  }
  return total - total * descuento / 100;
}

// Función para finalizar la compra
function finalizarCompra() {
  let total = calcularTotal();
  console.log(`Total a pagar: $${total}`);
  if (total > 1000) {
    total = aplicarDescuento(total, 20); // Se mantuvo el descuento fijo del 20%, pero se puede hacer más flexible según los requisitos.
    console.log(`Total con descuento: $${total}`);
  }
  carrito = []; // Se vacía el carrito después de aplicar el descuento y mostrar el total.
}

// Ejemplo de uso
agregarAlCarrito(1, 2); // Agregar 2 laptops
agregarAlCarrito(2, 1); // Agregar 1 teléfono
console.log("Carrito:", carrito);
finalizarCompra();
