const el = document.getElementById("typewriter");
const texts = ["Studio Prisma", "Moda Expert"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const full = texts[i];

  if (isDeleting) {
    current = full.substring(0, j--);
  } else {
    current = full.substring(0, j++);
  }

  el.textContent = current;
  el.classList.add("cursor");

  let speed = isDeleting ? 80 : 120;

  if (!isDeleting && j === full.length + 1) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();
