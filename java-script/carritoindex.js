const contenedorTarjetas=document.getElementById("peliculasContainer");
contenedorTarjetas.classList.add("carrito-peliculas");
const cantidadElement=document.getElementById("cantidad")
const precioElementos=document.getElementById("precio")

function crearTarjetasInicio(){
    contenedorTarjetas.innerHTML="";
    const productos=JSON.parse(localStorage.getItem("peliculas"))
    console.log(productos)
    if(productos && productos.length>0){
        productos.forEach(producto => {
            const nuevaPelicula=document.createElement("div");
            nuevaPelicula.classList="tarjeta-producto";
            nuevaPelicula.innerHTML=`
                <img src="./img/peliculas/${producto.id}.png">
                <h3>${producto.nombre} </h3>
                <p>${producto.precio} $</p>
                <div>
                    <button>-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button>+</button>
                </div>
            `
            contenedorTarjetas.appendChild(nuevaPelicula)
            nuevaPelicula.getElementsByTagName("button")[1].addEventListener("click",(e)=>{
                const cuentaE= e.target.parentElement.getElementsByTagName("span")[0];
                cuentaE.innerText=agregarAlCarrito(producto);
                actualizarTot();
            })

            nuevaPelicula.getElementsByTagName("button")[0].addEventListener("click",(e)=>{
                restarAlCarrito(producto);
                crearTarjetasInicio();
                actualizarTot()
            });

    });
}

}
crearTarjetasInicio();
actualizarTot()

function actualizarTot(){
    const productos=JSON.parse(localStorage.getItem("peliculas"))
    let cantidad=0;
    let precio=0;
    if (productos && productos.length>0){
        productos.forEach((producto)=>{
            cantidad+=producto.cantidad;
            precio+=producto.precio * producto.cantidad;
        })
        cantidadElement.innerText=cantidad;
        precioElementos.innerText=precio;
    }

}

