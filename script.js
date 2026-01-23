document.addEventListener("DOMContentLoaded", () => {

    /* ===== BLOBS (REMVIDO - AGORA É 100% CSS) ===== */
    // A animação foi movida para o CSS para melhor performance (GPU)

    /* ===== LOADING SINCRONIZADO ===== */
    window.addEventListener("load", () => {
        const loading = document.getElementById("loading");
        const content = document.getElementById("content");

        const bar = document.querySelector(".loading-bar span");
        const circle = document.getElementById("logo-circle");
        const text = document.getElementById("logo-text");

        let progress = 0;

        const totalCircle = 380;
        const totalText = 200;

        const interval = setInterval(() => {
            progress += 1;

            // Barra
            if (bar) bar.style.width = progress + "%";

            // Círculo SVG
            if (circle) {
                circle.style.strokeDashoffset = totalCircle - (totalCircle * progress / 100);
            }

            // Texto SVG
            if (text) {
                text.style.strokeDashoffset = totalText - (totalText * progress / 100);
            }

            if (progress >= 100) {
                if (text) text.style.fill = "white";
                clearInterval(interval);

                setTimeout(() => {
                    if (loading) {
                        loading.style.opacity = "0";
                        loading.style.transition = "opacity 0.8s ease";

                        setTimeout(() => {
                            loading.style.display = "none";
                            if (content) content.classList.remove("content-hidden");
                        }, 800);
                    }
                }, 400);
            }
        }, 20); // velocidade do progresso
    });

});