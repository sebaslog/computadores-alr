document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.querySelector('.boton-menu');
    const menu = document.querySelector('.menu');

    botonMenu.addEventListener('click', function() {
        menu.classList.toggle('active');

        // Rotar las líneas del botón
        document.querySelectorAll('.linea-menu').forEach(function(linea) {
            linea.classList.toggle('abierto-' + (linea.classList.contains('abierto-1') ? '1' : linea.classList.contains('abierto-2') ? '2' : '3'));
        });

        // Devolver false para indicar que la respuesta es síncrona
        return false;
    });
});

// Obtener el contenedor del slider
const sliderWrapper = document.getElementById('sliderWrapper');

// Función para cambiar las imágenes automáticamente
function changeImage() {
    // Calcular el ancho total del slider
    const sliderWidth = sliderWrapper.scrollWidth;

    // Animar el desplazamiento del slider hacia la derecha
    sliderWrapper.scrollTo({
        left: sliderWidth,
        behavior: 'smooth'
    });

    // Establecer un temporizador para regresar al inicio y repetir el movimiento después de 3 segundos
    setTimeout(() => {
        // Animar el desplazamiento del slider hacia el inicio
        sliderWrapper.scrollTo({
            left: 0,
            behavior: 'smooth'
        });

        // Establecer un temporizador para llamar a esta función nuevamente después de 3 segundos
        setTimeout(changeImage, 3000);
    }, 5000);
}

// Iniciar el cambio automático de imágenes
changeImage();




