let activeContainer = null; // Mantiene el contenedor actualmente visible

// Función para cerrar el contenedor activo
function closeActiveContainer() {
    if (activeContainer) {
        activeContainer.style.display = 'none';
        activeContainer = null;
    }
}

// Script para el botón izquierdo
document.getElementById('toggleButton').addEventListener('click', function(event) {
    const infoContainer = document.getElementById('infoContainer');

    // Evitar que el clic en el botón cierre el contenedor
    event.stopPropagation();

    // Si hay un contenedor activo y no es el actual, lo cerramos
    if (activeContainer && activeContainer !== infoContainer) {
        closeActiveContainer();
    }

    // Alternamos entre mostrar y ocultar el contenedor actual
    if (infoContainer.style.display === 'none' || infoContainer.style.display === '') {
        infoContainer.style.display = 'block';
        activeContainer = infoContainer; // Actualizamos el contenedor activo
    } else {
        closeActiveContainer();
    }
});

// Script para el botón de notificaciones
document.getElementById('notificationButton').addEventListener('click', function(event) {
    const notificationContainer = document.getElementById('notificationContainer');

    // Evitar que el clic en el botón cierre el contenedor
    event.stopPropagation();

    // Si hay un contenedor activo y no es el actual, lo cerramos
    if (activeContainer && activeContainer !== notificationContainer) {
        closeActiveContainer();
    }

    // Alternamos entre mostrar y ocultar el contenedor actual
    if (notificationContainer.style.display === 'none' || notificationContainer.style.display === '') {
        notificationContainer.style.display = 'block';
        activeContainer = notificationContainer; // Actualizamos el contenedor activo
    } else {
        closeActiveContainer();
    }
});

// Script para el botón de perfil
document.getElementById('profileButton').addEventListener('click', function(event) {
    const profileContainer = document.getElementById('profileContainer');

    // Evitar que el clic en el botón cierre el contenedor
    event.stopPropagation();

    // Si hay un contenedor activo y no es el actual, lo cerramos
    if (activeContainer && activeContainer !== profileContainer) {
        closeActiveContainer();
    }

    // Alternamos entre mostrar y ocultar el contenedor actual
    if (profileContainer.style.display === 'none' || profileContainer.style.display === '') {
        profileContainer.style.display = 'block';
        activeContainer = profileContainer; // Actualizamos el contenedor activo
    } else {
        closeActiveContainer();
    }
});

// Detectar clics en cualquier parte de la pantalla para cerrar el contenedor activo
document.addEventListener('click', function() {
    closeActiveContainer();
});

// Prevenir que el clic dentro de un contenedor lo cierre
document.getElementById('infoContainer').addEventListener('click', function(event) {
    event.stopPropagation();
});
document.getElementById('notificationContainer').addEventListener('click', function(event) {
    event.stopPropagation();
});
document.getElementById('profileContainer').addEventListener('click', function(event) {
    event.stopPropagation();
});
