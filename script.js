// Bouton retour
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Bouton effacer
document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("textArea").value = "";
});

// -------------------
// Particules fluides variées
// Même script que sur index.js
// -------------------
const container = document.getElementById("particles-container");
const particlesCount = 80;
const particles = [];

for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 5 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.background = `rgba(${200 + Math.random()*55}, ${50 + Math.random()*50}, 0, ${0.3 + Math.random()*0.7})`;

    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = Math.random() * window.innerHeight + "px";

    const speedX = (Math.random() - 0.5) * 2;
    const speedY = (Math.random() - 0.5) * 2;

    container.appendChild(particle);
    particles.push({ element: particle, speedX, speedY });
}

function moveParticles() {
    particles.forEach(p => {
        let top = parseFloat(p.element.style.top);
        let left = parseFloat(p.element.style.left);

        top += p.speedY;
        left += p.speedX;

        if (top < 0) top = window.innerHeight;
        if (top > window.innerHeight) top = 0;
        if (left < 0) left = window.innerWidth;
        if (left > window.innerWidth) left = 0;

        p.element.style.top = top + "px";
        p.element.style.left = left + "px";
    });

    requestAnimationFrame(moveParticles);
}

moveParticles();
