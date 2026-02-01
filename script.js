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
            progress += 2;
            if (bar) bar.style.width = progress + "%";
            if (circle) circle.style.strokeDashoffset = totalCircle - (totalCircle * progress / 100);
            if (text) text.style.strokeDashoffset = totalText - (totalText * progress / 100);

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loading.style.opacity = "0";
                    loading.style.transition = "opacity 0.8s ease";
                    document.body.style.overflow = "auto";
                    setTimeout(() => {
                        loading.style.display = "none";
                        content.classList.remove("content-hidden");
                    }, 800);
                }, 400);
            }
        }, 30);
    });

    /* ===== LÓGICA DO CARROSSEL 3D ===== */
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next', 'hidden');

            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    // Iniciar carrossel
    updateCarousel();

    // Clique direto no card lateral para focar
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });
});

function contatarWhats(plano) {
    const numero = "5551984692708";
    const mensagem = encodeURIComponent(`Olá! Tenho interesse no: ${plano}.`);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
} document.addEventListener("DOMContentLoaded", () => {

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
            progress += 2;
            if (bar) bar.style.width = progress + "%";
            if (circle) circle.style.strokeDashoffset = totalCircle - (totalCircle * progress / 100);
            if (text) text.style.strokeDashoffset = totalText - (totalText * progress / 100);

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loading.style.opacity = "0";
                    loading.style.transition = "opacity 0.8s ease";
                    document.body.style.overflow = "auto";
                    setTimeout(() => {
                        loading.style.display = "none";
                        content.classList.remove("content-hidden");
                    }, 800);
                }, 400);
            }
        }, 30);
    });

    /* ===== LÓGICA DO CARROSSEL 3D ===== */
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next', 'hidden');

            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    // Iniciar carrossel
    updateCarousel();

    // Clique direto no card lateral para focar
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });
});
/* LÓGICA DO CARROSSEL DE PREÇOS (MOBILE) */
const priceCards = document.querySelectorAll('.price-card');
const prevPriceBtn = document.getElementById('prevPrice');
const nextPriceBtn = document.getElementById('nextPrice');
let currentPriceIndex = 1; // Começa no segundo card (Site Profissional)

function updatePricingCarousel() {
    // Só executa a lógica visual se a tela for menor que 900px
    if (window.innerWidth <= 900) {
        priceCards.forEach((card, index) => {
            card.classList.remove('active', 'prev-card', 'next-card');

            if (index === currentPriceIndex) {
                card.classList.add('active');
            } else if (index === (currentPriceIndex - 1 + priceCards.length) % priceCards.length) {
                card.classList.add('prev-card');
            } else if (index === (currentPriceIndex + 1) % priceCards.length) {
                card.classList.add('next-card');
            }
        });
    } else {
        // Se voltar para o PC, remove as classes para a Grid funcionar
        priceCards.forEach(card => card.classList.remove('active', 'prev-card', 'next-card'));
    }
}

// Botões
nextPriceBtn.addEventListener('click', () => {
    currentPriceIndex = (currentPriceIndex + 1) % priceCards.length;
    updatePricingCarousel();
});

prevPriceBtn.addEventListener('click', () => {
    currentPriceIndex = (currentPriceIndex - 1 + priceCards.length) % priceCards.length;
    updatePricingCarousel();
});

// Atualiza ao redimensionar a tela
window.addEventListener('resize', updatePricingCarousel);

// Inicializa
updatePricingCarousel();
function contatarWhats(plano) {
    const numero = "5551984692708";
    const mensagem = encodeURIComponent(`Olá! Tenho interesse no: ${plano}.`);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}