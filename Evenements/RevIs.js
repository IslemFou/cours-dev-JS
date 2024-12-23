//alert("Js est bien lié");
/*
Syntaxe:

selecteur.addEventListener("evenement", fonction);

étape 1: sélectionner les éléments
étape 2: création de fonctions qui seront exécutée par l'évennement.
étape 3: poser l'écouteur d'évenements pour l'interaction
*/
let DivRouge = document.querySelector("#rouge");
console.log(DivRouge);

//Première méthodes : avec une fonction () anonyme

DivRouge.addEventListener("click", function () {
  DivRouge.style.backgroundColor = "gold";
  DivRouge.style.borderRadius = "50%";
  DivRouge.textContent = "Gold";
});

//deuxième méthode

DivRouge.addEventListener("click", fDivRouge);

function fDivRouge() {
  DivRouge.style.backgroundColor = "gold";
  DivRouge.style.borderRadius = "50%";
  DivRouge.textContent = "Gold";
}
// faire une alert en cliquant sur le paragraphe

let p = document.querySelector("#p1");

p.addEventListener("click", fp1);

function fp1() {
  alert("le paragraphe est active !");
}

//_______ l'evenement avec double click
//3- div #orange avec la fonction anonyme
let divOrange = document.querySelector("#orange");

divOrange.addEventListener("dblclick", function () {
  divOrange.style.backgroundColor = "gold";
  divOrange.style.borderRadius = "50%";
  divOrange.textContent = "Gold";
});

//_______ l'evenement mouseover
let divInfo = document.querySelector("#info");

divInfo.addEventListener("mouseover", fInfo);
function fInfo() {
  divInfo.style.backgroundColor = "gold";
  divInfo.style.borderRadius = "50%";
  divInfo.textContent = "Gold";
}

//________ l'evenement quitter avec hover
//mouseout
//mouseleave
let divPrimary = document.querySelector("#primary");
divPrimary.addEventListener("mouseleave", function () {
  divPrimary.style.backgroundColor = "gold";
  divPrimary.style.borderRadius = "50%";
  divPrimary.textContent = "Gold";
  document.querySelector("h1").style.color = "green";
});

//________6- l'evenement
//click et reclick avec contain,add, remove
//passage de la classe vert vers la classe gold
let divColor = document.querySelector("#success");
divColor.addEventListener("click", function () {
  //je vérifie si la div contient la classe 'vert' dans la liste de classe
  // if (true)
  if (divColor.classList.contains("vert")) {
    divColor.classList.remove("vert");
    divColor.classList.add("gold");
    divColor.textContent = "Gold";
  } else {
    //sinon, si (false), cad la div ne contient pas la classe 'vert' mais elle contient la classe 'gold'
    divColor.classList.remove("gold");
    divColor.classList.add("vert");
    divColor.textContent = "Vert";
  }
});
/*
// l'idée de kader
const ROUGE = document.getElementById("rouge");
const ORANGE = document.getElementById("orange");
const INFO = document.querySelector("#info");
const PRIMARY = document.querySelector("#primary");
const SUCCESS = document.querySelector("#success");

let colorsText = ["ROUGE", "ORANGE", "BLEU", "PRIMARY", "SUCCESS"];
let colorsId = [ROUGE, ORANGE, INFO, PRIMARY, SUCCESS];

function colorsEvent(a, b) {
  a.classList.toggle("cercle");

  if (a.textContent === "GOLD") {
    a.textContent = b;
  } else {
    a.textContent = "GOLD";
  }
}

for (let i = 0; i < colorsId.length; i++) {
  colorsId[i].addEventListener("click", () =>
    colorsEvent(colorsId[i], colorsText[i])
  );
}
*/

// toggle
let imageChat = document.querySelector("img");
imageChat.style.width = "300px";
let P = document.querySelectorAll(".toggle p");
console.log(P);

//boucle for pour styliser les paragraphes
for (let paragraph of P) {
  paragraph.style.textDecoration = "underline";
  paragraph.style.color = "pink";
  paragraph.style.fontWeight = "bold";
}

//cacher l'image uniquement : rajoute la classe hide avec le click
P[0].addEventListener("click", () => {
  imageChat.classList.add("hide");
});
// faire revenir l'image uniquement: supprime la classe hide avec le click
P[1].addEventListener("click", () => {
  imageChat.classList.remove("hide");
});

//toggler(click et reclik) la classe hide
P[2].addEventListener("click", () => {
  imageChat.classList.toggle("hide");
});
// bloquage d'aller sur un lien avec la méthode preventDefault()
document.querySelector("#interdit").addEventListener("click", (Event) => {
  Event.preventDefault();
  alert("interdit d'y aller vers ce lien");
});
