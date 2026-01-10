document.addEventListener("DOMContentLoaded", () => {
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
});
