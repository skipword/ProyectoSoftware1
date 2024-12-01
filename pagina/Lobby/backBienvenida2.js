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

// Reloj Analógico
function actualizarReloj() {
    const ahora = new Date();
    const segundos = ahora.getSeconds();
    const minutos = ahora.getMinutes();
    const horas = ahora.getHours();

    const segundosGrados = (segundos / 60) * 360;
    const minutosGrados = (minutos / 60) * 360 + (segundos / 60) * 6;
    const horasGrados = (horas / 12) * 360 + (minutos / 60) * 30;

    document.getElementById('segundo').style.transform = `rotate(${segundosGrados}deg)`;
document.getElementById('minuto').style.transform = `rotate(${minutosGrados}deg)`;
    document.getElementById('hora').style.transform = `rotate(${horasGrados}deg)`;
}

// Hora Digital
function actualizarHoraDigital() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    
    const horaDigital = document.getElementById('horaDigital');
    horaDigital.textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualiza la hora cada segundo
setInterval(actualizarReloj, 1000);
setInterval(actualizarHoraDigital, 1000);
actualizarReloj(); // Llamar una vez al inicio
actualizarHoraDigital(); // Llamar para mostrar la hora inmediatamente

// Recargar la página al hacer clic en "Lunch UIS"
document.getElementById('lunchUIS').addEventListener('click', function() {
    location.reload();
});

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeModalButton = document.getElementById('closeModalButton');

// Función para mostrar el modal
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalOverlay.style.display = 'flex'; // Muestra el modal
}

// Función para cerrar el modal
function closeModal() {
    modalOverlay.style.display = 'none';
}

// Asociar eventos a los botones
document.getElementById('btnCerrarSesion').addEventListener('click', function() {
    showModal('Comprar Combo', 'Aquí puedes proceder con la compra del combo.');
});

document.getElementById('btnMisCompras').addEventListener('click', function() {
    showModal('Mis Compras', 'Aquí se mostrarán tus compras realizadas.');
});

// Asociar el evento de cerrar al botón de cierre del modal
closeModalButton.addEventListener('click', closeModal);

// También cerrar el modal al hacer clic fuera del contenido
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});