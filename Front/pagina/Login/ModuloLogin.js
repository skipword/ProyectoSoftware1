document.addEventListener("DOMContentLoaded", function () {
    const btnIniciarSesion = document.getElementById("btnIniciarSesion");
    const rectangle = document.getElementById("rectangle");
    const base = document.querySelector(".base");

    // Mostrar el formulario de ingreso y ocultar el logo y botón
    btnIniciarSesion.addEventListener("click", function () {
        rectangle.style.display = "block"; // Muestra el formulario
        btnIniciarSesion.style.display = "none"; // Oculta el botón "Inicia Sesión"
        const logo = document.querySelector(".logo");
        if (logo) {
            logo.style.display = "none"; // Oculta el logo
        }
    });

    // Cerrar el formulario al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        const isClickInsideRectangle = rectangle.contains(event.target);
        const isClickButton = btnIniciarSesion.contains(event.target);

        if (!isClickInsideRectangle && !isClickButton) {
            rectangle.style.display = "none"; // Oculta el formulario
            btnIniciarSesion.style.display = "block"; // Muestra el botón de nuevo
            const logo = document.querySelector(".logo");
            if (logo) {
                logo.style.display = "block"; // Muestra el logo de nuevo
            }
        }
    });
});
