//alert("js est activé");

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//--------- abonnement
const checkArrow = document.querySelector(".bi-check-lg");
console.log(checkArrow);
const bouton = document.querySelector(".btn-warning");
console.log(bouton);

bouton.addEventListener("click", abonnement);
// bouton.addEventListener("click", addArraw);

function abonnement() {
  // checkArrow.classList.remove("d-none");
  bouton.innerHTML = "Abonné";
  console.log(bouton);
  checkArrow.classList.remove("d-none");
  console.log(checkArrow); // ne marche pas ensemble
}
// function addArraw() {
// }

//bouton.addEventListener("click", abonnement);

//--------- switch mode

let corpsP = document.querySelector("body");
let nav = document.querySelector("#nav");
let buttonMode = document.getElementById("flexSwitchCheckChecked");
let progressContainer = document.querySelector("#progressContainer");
let links = document.querySelectorAll("#link");

let moon = document.querySelector(".bi-moon-stars-fill");
let sun = document.querySelector(".bi-brightness-high-fill");
let divCarrousel = document.querySelector("#divCarrousel");
let svg = document.querySelector(".svgClass");
let paragFooter = document.querySelector("#copyright");

buttonMode.addEventListener("click", () => {
  moon.classList.toggle("d-none");
  sun.classList.toggle("d-none");
  corpsP.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
  for (let link of links) {
    link.classList.toggle("link-sombre");
  }
  progressContainer.classList.toggle("progress-container-dark-mode");
  divCarrousel.classList.toggle("fondClair");
  divCarrousel.classList.toggle("fondFonce");
  svg.classList.toggle("warning");
  console.log(paragFooter);
  paragFooter.classList.toggle("text-body-secondary");
  paragFooter.classList.toggle("warning");
});

//
let back = document.querySelector("#back");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let next = document.querySelector("#next");

let carousel = document.querySelector("#carouselAuto");

// création d'une instance de la classe Carousel de bootstrap
const carouselParam = new bootstrap.Carousel(carousel, {
  interval: 1000,
  touch: false,
});

//création de fonctions
function autoPlayCarr() {
  pause.classList.remove("d-none");
  play.classList.add("d-none");
  carouselParam.cycle();
}

function pauseCarr() {
  play.classList.remove("d-none");
  pause.classList.add("d-none");
  carouselParam.pause();
}

function precCarr() {
  carouselParam.prev();
}

function nextCarr() {
  carouselParam.next();
}

//
play.addEventListener("click", autoPlayCarr);
pause.addEventListener("click", pauseCarr);
back.addEventListener("click", precCarr);
next.addEventListener("click", nextCarr);
