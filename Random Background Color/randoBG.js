/*
  Practice
  - Random Background Color
*/

// #fd34f7 FF00FF

let hexArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

window.onload = randoBG;

// hexArray[Math.floor(Math.random() * hexArray.length)]

let gb = [];
for (i = 0; i < 6; i++) {
  gb.push(
    hexArray[Math.floor(Math.random() * hexArray.length)]
  );
}

function randoBG() {
  document.body.style.backgroundColor = `#${gb.join("")}`;
}
