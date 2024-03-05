document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.querySelector('.boton-menu');
    const menu = document.querySelector('.menu');

    botonMenu.addEventListener('click', function() {
        menu.classList.toggle('active');

        // Rotar las líneas del botón
        document.querySelectorAll('.linea-menu').forEach(function(linea) {
            linea.classList.toggle('abierto-' + (linea.classList.contains('abierto-1') ? '1' : linea.classList.contains('abierto-2') ? '2' : '3'));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.getElementById('sliderWrapper');

    setInterval(() => {
        sliderWrapper.scrollLeft += sliderWrapper.offsetWidth;
    }, 4000); // Ajusta el intervalo de tiempo a 4 segundos (4000 milisegundos)
});
