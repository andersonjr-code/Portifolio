document.addEventListener("DOMContentLoaded", () => {

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

            // Atualiza a Barra de progresso
            if (bar) bar.style.width = progress + "%";

            // Atualiza o Círculo SVG
            if (circle) {
                circle.style.strokeDashoffset = totalCircle - (totalCircle * progress / 100);
            }

            // Atualiza o Texto SVG
            if (text) {
                text.style.strokeDashoffset = totalText - (totalText * progress / 100);
            }

            // FINALIZAÇÃO DO LOADING
            if (progress >= 100) {
                clearInterval(interval);

                if (text) text.style.fill = "white";

                setTimeout(() => {
                    if (loading) {
                        loading.style.opacity = "0";
                        loading.style.transition = "opacity 0.8s ease";
                    }

                    // === LIBERA O SCROLL AQUI ===
                    document.body.style.overflow = "auto";

                    setTimeout(() => {
                        if (loading) loading.style.display = "none";
                        if (content) content.classList.remove("content-hidden");
                    }, 800);
                }, 400);
            }
        }, 20); // Velocidade do progresso
    });

});