document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li a");
    
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            alert("¡Bienvenido a Sistemas Asyr!");
        });
    });
});
