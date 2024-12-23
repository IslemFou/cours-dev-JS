// de la part de kader, une fonction qui change les couleurs avec toggle

const ROUGE = document.getElementById("rouge");
const ORANGE = document.getElementById("orange");
const BLEU = document.querySelector("#bleu");
const PRIMARY = document.querySelector("#primary");
const SUCCESS = document.querySelector("#success");

let colors = ["ROUGE", "ORANGE", "BLEU", "PRIMARY", "SUCCESS"];
let colours = [ROUGE, ORANGE, BLEU, PRIMARY, SUCCESS];

function colorsEvent(myColour, myColor) {
  myColour.classList.toggle("cercle");

  if (myColour.textContent === "GOLD") {
    myColour.textContent = myColor;
  } else {
    myColour.textContent = "GOLD";
  }
}

for (let i = 0; i < colours.length; i++) {
  colours[i].addEventListener("click", () =>
    colorsEvent(colours[i], colors[i])
  );
}

//
