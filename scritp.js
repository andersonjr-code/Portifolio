document.addEventListener("mousemove", (e) => {
    const blobs = document.querySelectorAll(".blob-portal, .blob-portal-2");

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        // O multiplicador (20 ou 40) define a velocidade do movimento
        const speed = (index + 1) * 30;
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;

        blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});