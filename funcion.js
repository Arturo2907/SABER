document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn_menu");
    const menu = document.querySelector(".menu-content");

    boton.addEventListener("click", (e) => {
        // Evita que el clic se propague si tienes otros eventos
        e.stopPropagation(); 
        menu.classList.toggle("show");
    });

    // Opcional: Cerrar el menú si haces clic fuera de él
    document.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});