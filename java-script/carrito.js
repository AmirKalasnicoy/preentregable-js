
function agregarAlCarrito(producto){
    //Reviso si el producto está en el carrito.
    let memoria = JSON.parse(localStorage.getItem("peliculas"));
    let cantidadProductoFinal;
    //Si no hay localstorage lo creo
    if(!memoria || memoria.length === 0) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto)
        localStorage.setItem("peliculas",JSON.stringify([nuevoProducto]));
        actualizarNumeroCarrito();
        cantidadProductoFinal = 1;
    }else {
        //Si hay localstorage me fijo si el articulo ya esta ahi
        const indiceProducto = memoria.findIndex(pelicula => pelicula.id === producto.id)
        const nuevaMemoria =   memoria;
        //Si el producto no esta en el carrito lo agrego
        if(indiceProducto === -1){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        nuevaMemoria.push(nuevoProducto);
        cantidadProductoFinal = 1;
    } else {
        //Si el producto esta en el carrito le agrego 1 a la cantidad
        nuevaMemoria[indiceProducto].cantidad ++;
        cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("peliculas",JSON.stringify(nuevaMemoria));
    actualizarNumeroCarrito();
    return cantidadProductoFinal;
}
}
//resta al carrito
function restarAlCarrito(producto){
    let memoria = JSON.parse(localStorage.getItem("peliculas")); 
    let cantidadProductoFinal=0;
    const indiceProducto = memoria.findIndex(pelicula => pelicula.id === producto.id)
    let nuevaMemoria=memoria;
    nuevaMemoria[indiceProducto].cantidad--;
    cantidadProductoFinal=nuevaMemoria[indiceProducto].cantidad;

    if (cantidadProductoFinal===0){
        nuevaMemoria.splice(indiceProducto,1)
    };
    localStorage.setItem("peliculas",JSON.stringify(nuevaMemoria))
    actualizarNumeroCarrito();
    return cantidadProductoFinal;
}



//agarra una pelicula y le agrega cantidad 1 y lo devuelve
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto=producto;
    nuevoProducto.cantidad=1;
    return nuevoProducto;
}

//funcion para actualizar el numero del carrito
const cuentaCarritoElement=document.getElementById("cuentaCarrito")
function actualizarNumeroCarrito(){
    let cuenta=0;
    const memoria=JSON.parse(localStorage.getItem("peliculas"))
    if(memoria && memoria.length>0){
        cuenta=memoria.reduce((acum,actual)=>acum+actual.cantidad,0);
        return cuentaCarritoElement.innerText=cuenta;
    }else{
        cuentaCarritoElement.innerText=0;
    }
    
}


function reiniciarCarrito(){
    localStorage.removeItem("peliculas");
    actualizarNumeroCarrito();
}

actualizarNumeroCarrito();