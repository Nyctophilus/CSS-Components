let section = document.querySelector(".three");
let spans = document.querySelectorAll(".skills span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    console.log(`Skills here`);
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
