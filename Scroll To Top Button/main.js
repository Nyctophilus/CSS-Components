let span = document.querySelector(".up");

// show on certian offset
window.onscroll = () => {
  this.scrollY >= 500
    ? span.classList.add("show")
    : span.classList.remove("show");
};

// click to go up
span.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
