function TodasLasPeliculas() {
    const peliculas = [
        // Ciencia Ficción
        {Titulo:'Matrix',Precio:20,genero:'ciencia ficcion'},
        {Titulo:'Volver al futuro',Precio:20,genero:'ciencia ficcion'},
        {Titulo:'Blade runner',Precio:20,genero:'ciencia ficcion'},
        // Terror
        {Titulo:'El conjuro',Precio:20,genero:'terror'},
        {Titulo:'Siniestro',Precio:20,genero:'terror'},
        {Titulo:'Tarot',Precio:20,genero:'terror'},
        // Comedia
        {Titulo:'¿Que paso ayer?',Precio:20,genero:'comedia'},
        {Titulo:'Scary movie',Precio:20,genero:'comedia'},
        {Titulo:'Loco por Mary',Precio:20,genero:'comedia'},
        // Romance
        {Titulo:'La La Land',Precio:20,genero:'romance'},
        {Titulo:'Orgullo y prejuicio',Precio:20,genero:'romance'},
        {Titulo:'Votos de amor',Precio:20,genero:'romance'}
    ];
    return peliculas;
}

function filtrarPorGenero(peliculas, genero) {
    let peliculasFiltradas = [];
    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genero.toLowerCase() === genero.toLowerCase()) {
            peliculasFiltradas.push(peliculas[i]);
        }
    }
    return peliculasFiltradas;
}

function mostrarMensajePeliculas(peliculas) {
    let mensajePeliculas = "";
    let index = 1;
    for (let pelicula of peliculas) {
        mensajePeliculas += `${index}. ${pelicula.Titulo} ($${pelicula.Precio})\n`;
        index++;
    }
    return mensajePeliculas;
}

function comprarPelicula(pelicula) {
    alert(`Has comprado "${pelicula.Titulo}" por $${pelicula.Precio}. ¡Gracias por tu compra!`);
}

function ObtenerPeliculas(){
    const catalogoPeliculas = TodasLasPeliculas();
    let seguirComprando = true;

    while (seguirComprando) {
        let mensaje = prompt('Elija el género de película que desee: ciencia ficcion, terror, comedia, romance').toLowerCase();
        let peliculaFiltrada = [];

        switch (mensaje) {
            case 'ciencia ficcion':
                peliculaFiltrada = filtrarPorGenero(catalogoPeliculas, 'ciencia ficcion');
                break;
            case 'terror':
                peliculaFiltrada = filtrarPorGenero(catalogoPeliculas, 'terror');
                break;
            case 'comedia':
                peliculaFiltrada = filtrarPorGenero(catalogoPeliculas, 'comedia');
                break;
            case 'romance':
                peliculaFiltrada = filtrarPorGenero(catalogoPeliculas, 'romance');
                break;
            default:
                alert('El género ingresado no se encuentra, vuelva a intentarlo.');
                continue;
        }

        if (peliculaFiltrada.length > 0) {
            let mensajePeliculas = mostrarMensajePeliculas(peliculaFiltrada);

            let seleccion = parseInt(prompt(mensajePeliculas + 'Ingrese el número de la película que desea comprar:'));

            if (seleccion > 0 && seleccion <= peliculaFiltrada.length) {
                let peliculaSeleccionada = peliculaFiltrada[seleccion - 1];
                comprarPelicula(peliculaSeleccionada);
            } else {
                alert('Selección no válida.');
            }
        } else {
            alert('No hay películas disponibles en ese género.');
        }

        seguirComprando = confirm('¿Desea comprar otra película?');
    }

    alert('Gracias por su compra. ¡Hasta la próxima!');
}

ObtenerPeliculas();





