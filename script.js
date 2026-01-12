document.addEventListener("DOMContentLoaded", () => {

    /* ===== BLOBS (SEU CÓDIGO) ===== */
    const blobs = document.querySelectorAll(".blob-portal, .blob-portal-2");

    blobs.forEach((blob, index) => {
        let angle = Math.random() * Math.PI * 2;
        const radius = 40 + index * 30;
        const speed = 0.002 + index * 0.001;

        function animate() {
            angle += speed;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            blob.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    });

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
            bar.style.width = progress + "%";

            // Círculo SVG
            circle.style.strokeDashoffset =
                totalCircle - (totalCircle * progress / 100);

            // Texto SVG
            text.style.strokeDashoffset =
                totalText - (totalText * progress / 100);

            if (progress >= 100) {
                text.style.fill = "white";
                clearInterval(interval);

                setTimeout(() => {
                    loading.style.opacity = "0";
                    loading.style.transition = "opacity 0.8s ease";

                    setTimeout(() => {
                        loading.style.display = "none";
                        content.classList.remove("content-hidden");
                    }, 800);
                }, 400);
            }
        }, 20); // velocidade do progresso
    });

});
