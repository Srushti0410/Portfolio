const reveal = document.getElementById("reveal");
const music = document.getElementById("bg-music");
const heroName = document.getElementById("heroName");

/* -------- REVEAL + MUSIC -------- */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let radius = 0;
let targetRadius = 0;

let exploded = false;
let musicStarted = false;

function animate() {
  radius += (targetRadius - radius) * 0.15;

  reveal.style.maskImage = `
    radial-gradient(circle ${radius}px at ${mouseX}px ${mouseY}px,
    transparent 0%,
    black 65%)
  `;
  reveal.style.webkitMaskImage = reveal.style.maskImage;

  requestAnimationFrame(animate);
}

animate();

function startMusic() {
  if (!musicStarted && music) {
    music.volume = 0.25;
    music.play();
    musicStarted = true;
  }
}

function explode(x, y) {
  if (exploded) return;
  exploded = true;

  mouseX = x;
  mouseY = y;

  targetRadius = Math.max(window.innerWidth, window.innerHeight) * 1.2;

  startMusic();

  setTimeout(() => {
    reveal.classList.add("hidden");
  }, 900);
}

document.addEventListener(
  "mousemove",
  (e) => explode(e.clientX, e.clientY),
  { once: true }
);

document.addEventListener(
  "click",
  (e) => explode(e.clientX, e.clientY),
  { once: true }
);

/* -------- SCROLL ZOOM + FADE (POLISHED) -------- */

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  const start = window.innerHeight * 0.15;
  const end = window.innerHeight * 1.05;

  if (y < start) {
    heroName.style.transform =
      "translate(-50%, -50%) scale(1)";
    heroName.style.opacity = "1";
    return;
  }

  const progress = Math.min((y - start) / (end - start), 1);

  // smoothstep easing (cinematic)
  const eased = progress * progress * (3 - 2 * progress);

  // controlled zoom (never ridiculous)
  const scale = 1 + eased * 0.85;

  // fade before it gets uncomfortable
  const opacity = Math.max(1 - eased * 1.2, 0);

  heroName.style.transform =
    `translate(-50%, -50%) scale(${scale})`;
  heroName.style.opacity = opacity;
});
