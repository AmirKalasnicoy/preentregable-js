const contenedorTarjetas=document.getElementById("peliculasContainer");

function crearTarjetasInicio(productos){
    productos.forEach(producto => {
        const nuevaPelicula=document.createElement("div");
        nuevaPelicula.classList="tarjeta-pelicula";
        nuevaPelicula.innerHTML=`
            <img src="./img/peliculas/${producto.id}.png">
            <h3>${producto.nombre} </h3>
            <p>${producto.precio} $</p>
            <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevaPelicula)
        nuevaPelicula.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto))
    });
}

crearTarjetasInicio(peliculas);



