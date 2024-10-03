const contenedorTarjetas=document.getElementById("peliculasContainer");
contenedorTarjetas.classList.add("carrito-peliculas");
const cantidadElement=document.getElementById("cantidad")
const precioElement=document.getElementById("precio")
const carritoVacioElement=document.getElementById("carritoVacio")
const totalesElement=document.getElementById("totales")


async function obtenerProductos() {
    try {
        const response = await fetch('../json/productos.json'); 
        const peliculas = await response.json(); 
        crearTarjetasInicio(peliculas); 
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

obtenerProductos();

function crearTarjetasInicio(peliculas) {
    const productosEnCarrito = JSON.parse(localStorage.getItem("peliculas")) || [];
    contenedorTarjetas.innerHTML = "";  
    productosEnCarrito.forEach(productoEnCarrito => {
        const producto = peliculas.find(p => p.id === productoEnCarrito.id);
        if (producto) {
            const nuevaPelicula = document.createElement("div");
            nuevaPelicula.classList = "tarjeta-producto";
            nuevaPelicula.innerHTML = `
                <img src="../img/peliculas/${producto.id}.png">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio} $</p>
                <div>
                    <button>-</button>
                    <span class="cantidad">${productoEnCarrito.cantidad}</span> <!-- Muestra la cantidad -->
                    <button>+</button>
                </div>
            `;
            contenedorTarjetas.appendChild(nuevaPelicula);

            // Restar producto
            nuevaPelicula.getElementsByTagName("button")[0].addEventListener("click", () => {
                const nuevaCantidad = restarAlCarrito(producto);
                if (nuevaCantidad > 0) {
                    nuevaPelicula.querySelector(".cantidad").innerText = nuevaCantidad; 
                } else {
                    
                    nuevaPelicula.remove();
                }
                actualizarTot();
            });

            // Sumar producto
            nuevaPelicula.getElementsByTagName("button")[1].addEventListener("click", () => {
                const nuevaCantidad = agregarAlCarrito(producto);
                nuevaPelicula.querySelector(".cantidad").innerText = nuevaCantidad; 
                actualizarTot();
            });
        }
    });

    actualizarTot();
    revisarMensajeInvicible();
    actualizarNumeroCarrito();
}



function actualizarTot(){
    const productos=JSON.parse(localStorage.getItem("peliculas"))
    let cantidad=0;
    let precio=0;
    if (productos && productos.length>0){
        productos.forEach((producto)=>{
            cantidad += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        cantidadElement.innerText=cantidad;
        precioElement.innerText=precio;
        if (precio===0){
            reiniciarCarrito();
            revisarMensajeInvicible();
        }
    }

}

document.getElementById("reiniciar").addEventListener("click",()=>{
    contenedorTarjetas.innerHTML="";
    reiniciarCarrito();
    revisarMensajeInvicible();
})

function revisarMensajeInvicible (){
    const productos=JSON.parse(localStorage.getItem("peliculas"))
    carritoVacioElement.classList.toggle("invisible",productos)
    totales.classList.toggle("invisible",!productos );
}
