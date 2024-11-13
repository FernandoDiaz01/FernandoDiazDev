// Inicializa EmailJS
(function() {
    emailjs.init("veQ9uWwAyGXypzx-e");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const statusMessage = document.getElementById("status-message");
    statusMessage.innerText = "Enviando...";

    // Evita que la página vuelva arriba
    statusMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Envía el formulario usando EmailJS
    emailjs.sendForm("service_uc5tpsm", "template_vagi53p", this)
        .then(() => {
            statusMessage.innerText = "¡Mensaje enviado!";
            this.reset(); // Limpia el formulario después de enviar
        }, (error) => {
            statusMessage.innerText = "Hubo un error, inténtalo nuevamente.";
            console.error("Error:", error);
        });
});

