export function generateLetters() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < 120; i++) {
    const div = document.createElement("div");
    const random = Math.random();
    console.log();
    div.textContent = alphabet[Math.floor(random * 26)];
    let size = 11 + i;
    div.style.fontSize = `${size}px`;
    if (i < 40) {
        div.style.fontWeight = "300";
    } else if (i < 80) {
        div.style.fontWeight = `400`;
    } else {
        div.style.fontWeight = `600`;
    }
    document.body.append(div);
  }
}
