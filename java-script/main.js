function obtenerPeliculas() {
    return [
        // Películas de Terror
        { titulo: 'El Exorcista', genero: 'Terror', precio: 10 },
        { titulo: 'Halloween', genero: 'Terror', precio: 8 },
        { titulo: 'It', genero: 'Terror', precio: 12 },

        // Películas de Comedia
        { titulo: 'Superbad', genero: 'Comedia', precio: 7 },
        { titulo: 'La Máscara', genero: 'Comedia', precio: 9 },
        { titulo: 'Loco por Mary', genero: 'Comedia', precio: 8 },

        // Películas de Ciencia Ficción
        { titulo: 'Interestelar', genero: 'ciencia ficcion', precio: 15 },
        { titulo: 'Blade Runner 2049', genero: 'ciencia ficcion', precio: 14 },
        { titulo: 'Matrix', genero: 'ciencia ficcion', precio: 10 },

        // Películas de Romance
        { titulo: 'Titanic', genero: 'Romance', precio: 10 },
        { titulo: 'El Diario de Noah', genero: 'Romance', precio: 9 },
        { titulo: 'La La Land', genero: 'Romance', precio: 12 }
    ];
}

function filtrarYComprarPelicula() {
    const peliculas = obtenerPeliculas();
    let seguirComprando = true;

    while (seguirComprando) {
        let genero = prompt('Ingrese el género que desea ver: Terror, Comedia, Ciencia Ficción, Romance').toLowerCase();
        let peliculasFiltradas = [];

        switch (genero) {
            case 'terror':
                peliculasFiltradas = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === 'terror');
                break;
            case 'comedia':
                peliculasFiltradas = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === 'comedia');
                break;
            case 'ciencia ficción':
                peliculasFiltradas = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === 'ciencia ficcion');
                break;
            case 'romance':
                peliculasFiltradas = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === 'romance');
                break;
            default:
                alert('Género no válido. Por favor, elija entre Terror, Comedia, Ciencia Ficción, o Romance.');
                continue;
        }

        if (peliculasFiltradas.length > 0) {
            let mensaje = `Películas disponibles en el género ${genero}:\n`;
            let index = 1;
            for (let pelicula of peliculasFiltradas) {
                mensaje += `${index}. ${pelicula.titulo} ($${pelicula.precio})\n`;
                index++;
            }
            
            let seleccion = parseInt(prompt(mensaje + '\nIngrese el número de la película que desea comprar:'));
            
            if (seleccion > 0 && seleccion <= peliculasFiltradas.length) {
                let peliculaSeleccionada = peliculasFiltradas[seleccion - 1];
                alert(`Has comprado "${peliculaSeleccionada.titulo}" por $${peliculaSeleccionada.precio}. ¡Gracias por tu compra!`);
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

filtrarYComprarPelicula();




