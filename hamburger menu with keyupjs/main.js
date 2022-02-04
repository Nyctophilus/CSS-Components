let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = menuOpen;
close.onclick = menuClose;
document.onkeyup = esc;

function menuOpen() {
  nav.classList.add("open");
}

function menuClose() {
  nav.classList.remove("open");
}

function esc(e) {
  if (e.key === "Escape") nav.classList.remove("open");
}
