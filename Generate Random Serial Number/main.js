/*
[1] Set Characters To Create The Serial
[2] Set Serial Characters Count
[3] Create Empty Variable To Store The Serial
[4] Create Random Number + Access Sequence
[5] Store The Random-Element in The Empty Variable
[6] Loop x Count
[7] Change Serial Element Content With The Serial Variable
*/

let serialSeq = document.querySelector(".serial");
let generateBtn = document.querySelector(".generate");

generateBtn.onclick = () => {
  let chars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let serial = "";
  let serialCount = 12;

  for (let i = 0; i < serialCount; i++) {
    serial +=
      chars[Math.trunc(Math.random() * chars.length)];
  }

  serialSeq.textContent = serial;
};

console.log(Math.random().toString(36).slice(2));
console.log(Math.floor(Math.random() * 100));
