const contenedorTarjetas=document.getElementById("peliculasContainer");

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
    peliculas.forEach(producto => {
        const nuevaPelicula = document.createElement("div");
        nuevaPelicula.classList = "tarjeta-pelicula";
        nuevaPelicula.innerHTML = `
            <img src="preentregable-js/img/peliculas/${producto.id}.png">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio} $</p>
            <button>Agregar al carrito</button>
        `;
        contenedorTarjetas.appendChild(nuevaPelicula);

        nuevaPelicula.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
    });
}

crearTarjetasInicio(peliculas);



