// Array para almacenar los productos
let productos = [];

// Referencias a elementos del DOM
const formAgregarProducto = document.getElementById('form-agregar-producto');
const tablaProductos = document.querySelector('#lista-productos tbody');
const busquedaInput = document.getElementById('busqueda');
const filtroPrecioInput = document.getElementById('filtro-precio');
const filtroCantidadInput = document.getElementById('filtro-cantidad');
const aplicarFiltrosBtn = document.getElementById('aplicar-filtros');

// Función para agregar un producto
function agregarProducto(event) {
    event.preventDefault(); //Previene el evento de elemento referido

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    const nuevoProducto = { nombre, descripcion, precio, cantidad };
    productos.push(nuevoProducto);

    formAgregarProducto.reset();
    console.log("Entro en agregar productos: ", productos);
    mostrarProductos();
    // use el console.log para verificar posibles errores en consola
}

// Función para mostrar los productos en la tabla
function mostrarProductos(lista = productos) {   //renombrar el arreglo
    tablaProductos.innerHTML = ''; // editar el DOM 
    
    console.log("Verificar Arreglo1: ", lista);
    lista.forEach((producto, index) => {
        const fila = document.createElement('tr');
        console.log("Verificar Arreglo: ", producto);
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>
                <button onclick="editarProducto(${index})">Editar</button>
                <button onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
        `;

        tablaProductos.appendChild(fila); //
    });
}

// Función para buscar productos
function buscarProductos() {
    const termino = busquedaInput.value.toLowerCase(); //Guarda los datos en minusculas
    const resultados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino)
    );
    mostrarProductos(resultados);
}

// Función para filtrar productos por precio y cantidad
function filtrarProductos() {
    const precioMax = parseFloat(filtroPrecioInput.value) || Infinity;
    const cantidadMin = parseInt(filtroCantidadInput.value) || 0;

    const resultados = productos.filter(producto => 
        producto.precio <= precioMax && producto.cantidad >= cantidadMin
    );
    mostrarProductos(resultados);
}

// Función para eliminar un producto
function eliminarProducto(index) {
    productos.splice(index, 1);
    mostrarProductos();
}

// Función para editar un producto
function editarProducto(index) {
    const producto = productos[index];

    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('cantidad').value = producto.cantidad;

    productos.splice(index, 1);
    mostrarProductos();
}

// Eventos
formAgregarProducto.addEventListener('submit', agregarProducto);
busquedaInput.addEventListener('input', buscarProductos);
aplicarFiltrosBtn.addEventListener('click', filtrarProductos);

// Mostrar productos iniciales (si hubiera datos precargados)
mostrarProductos();