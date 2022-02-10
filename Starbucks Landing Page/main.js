let imgs = document.querySelectorAll(".thumb li img");

[...imgs].forEach((img) => {
  img.onclick = () => {
    imgSlider(img.dataset.src);
    changeCircleColor(img.dataset.clr);
  };
});

function imgSlider(source) {
  document.querySelector(".starbucks").src = source;
}

function changeCircleColor(clr) {
  const circle = document.querySelector(".circle");

  circle.style.background = clr;
}
