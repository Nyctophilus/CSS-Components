let taps = [...document.getElementsByTagName("li")];
let conts = [
  ...document.querySelectorAll(".content > div"),
];

let dataCont = "";
// on click foreach to remove all active then add "active" to current target
taps.forEach((t) => {
  t.addEventListener("click", (e) => {
    taps.forEach((tap) => {
      tap.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    // get content class of current tap
    dataCont = e.currentTarget.getAttribute("data-cont"); //.dataset.cont afsh5 bdl getAttr

    // display none all contents
    conts.forEach((cont) => (cont.style.display = "none"));

    document.querySelector(
      `${dataCont}`
    ).style.display = `block`;
  });
});
