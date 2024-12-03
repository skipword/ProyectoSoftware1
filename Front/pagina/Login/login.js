let activeContainer = null; // Mantiene el contenedor actualmente visible

// Función para cerrar el contenedor activo
function closeActiveContainer() {
    if (activeContainer) {
        activeContainer.style.display = 'none';
        activeContainer = null;
    }
}

// Detectar clics en cualquier parte de la pantalla para cerrar el contenedor activo
document.addEventListener('click', function() {
    closeActiveContainer();
});

// Prevenir que el clic dentro de un contenedor lo cierre
document.getElementById('btnIniciarSesion').addEventListener('click', function(event) {
    event.stopPropagation();
});


// Asegurar que el script funcione al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias al botón y al rectángulo
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    const rectangle = document.getElementById('rectangle');

    // Evento para mostrar el rectángulo al hacer clic en el botón
    btnIniciarSesion.addEventListener('click', () => {
        rectangle.style.display = 'block'; // Mostrar el rectángulo
    });
});

