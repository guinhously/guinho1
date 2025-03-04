const bgCanvas = document.getElementById("backgroundCanvas");
const bgCtx = bgCanvas.getContext("2d");

bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * bgCanvas.width;
        this.y = Math.random() * bgCanvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.alpha = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > bgCanvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > bgCanvas.height) this.speedY *= -1;
    }

    draw() {
        bgCtx.fillStyle = `rgba(0, 255, 255, ${this.alpha})`;
        bgCtx.beginPath();
        bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        bgCtx.fill();
    }
}

function createParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateBackground() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateBackground);
}

createParticles();
animateBackground();

const trailCanvas = document.getElementById("mouseTrail");
const trailCtx = trailCanvas.getContext("2d");

trailCanvas.width = window.innerWidth;
trailCanvas.height = window.innerHeight;

const trailParticles = [];

window.addEventListener("mousemove", (event) => {
    for (let i = 0; i < 5; i++) {
        trailParticles.push(new ParticleTrail(event.x, event.y));
    }
});

class ParticleTrail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02;
    }

    draw() {
        trailCtx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`;
        trailCtx.beginPath();
        trailCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        trailCtx.fill();
    }
}

function animateMouseTrail() {
    trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
    for (let i = trailParticles.length - 1; i >= 0; i--) {
        trailParticles[i].update();
        trailParticles[i].draw();
        if (trailParticles[i].opacity <= 0) {
            trailParticles.splice(i, 1);
        }
    }
    requestAnimationFrame(animateMouseTrail);
}

animateMouseTrail();