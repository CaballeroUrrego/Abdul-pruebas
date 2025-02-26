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
 console.log(`Producto agregado: ${producto.nombre}`);  } else { 
 console.log("Producto no encontrado."); 
 } 
} 
// Función para calcular el total del carrito 
function calcularTotal() { 
 let total = 0; 
 carrito.forEach(item => { 
 total += item.precio; // Error: No se está multiplicando el precio por la cantidad de productos agregados, lo que hará que el total sea incorrecto.
 return total; 
} 
// Función para aplicar un descuento 
function aplicarDescuento(total, descuento) { 
 if (descuento > 50) { 
 console.log("Descuento no válido. El máximo es 50%.");  return total; 
 } 
 return total - (total * descuento / 100); 
} 
// Función para finalizar la compra 
function finalizarCompra() { 
 let total = calcularTotal();
 console.log(`Total a pagar: $${total}`); 
 if (total > 1000) { 
 total = aplicarDescuento(total, 20);  // Descuento fijo del 20%, esto puede no ser deseado en todos los casos y debería ser más flexible o configurable.
 console.log(`Total con descuento: $${total}`); 
 carrito = []; // Error: El carrito se vacía sin verificar si la compra fue exitosa o sin confirmación de pago.
// Ejemplo de uso 
agregarAlCarrito(1, 2); // Agregar 2 laptops 
agregarAlCarrito(2, 1); // Agregar 1 teléfono 
console.log("Carrito:", carrito); 
finalizarCompra();
// Codigo revisado Por Sebastian Urrego dare otro Arcivo que se llame e-commerce básico-Corregido.js