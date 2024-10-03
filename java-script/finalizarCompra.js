
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Ejecutar la alerta de SweetAlert
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Compra finalizada",
        showConfirmButton: false,
        timer: 1500
    });


    localStorage.removeItem("peliculas");

    
    setTimeout(() => {
        
        window.location.href = "../index.html";
    }, 1500); // Redirige después de que la alerta haya desaparecido
});

