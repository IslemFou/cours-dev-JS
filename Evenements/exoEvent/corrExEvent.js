// correction by Hawa 24/12

// let button = document.getElementById("toggle-rectangle");
// let rectangle = document.querySelector(".rectangle");
//  pour afficher le rectangle
// button.addEventListener("click", afficherCacher);

// function afficherCacher () {
//   rectangle.classList.toggle("hidden");
// }

// // Changer la couleur en rouge quand la souris entre
// rectangle.addEventListener("mouseenter", () => {
//   rectangle.style.backgroundColor = "red";
// });

// // Revenir à la couleur originale quand la souris sort
// rectangle.addEventListener("mouseleave", () => {
//   rectangle.style.backgroundColor = "blue";
// });

// // Changer la couleur en vert sur un double-clic
// rectangle.addEventListener("dblclick", () => {
//   rectangle.style.backgroundColor = "green";
// });

let button = document.getElementById("toggle-rectangle");
let rectangle = document.querySelector(".rectangle");
// console.log(button);
// console.log(rectangle);

// --------------------------------------------------------------
//  on craie nos fonction
function afficherCacher() {
  rectangle.classList.toggle("hidden");
}
function addColorChange() {
  rectangle.classList.add("rouge");
}
function removeColorChange() {
  rectangle.classList.remove("rouge");
}
function addColorChangeGreen() {
  rectangle.classList.add("vert");
}
function removeColorChangeGreen() {
  rectangle.classList.remove("vert");
}

// -------------------------------------------------------

//  On pose nos ecouteur d'événements
button.addEventListener("click", afficherCacher);
rectangle.addEventListener("mouseenter", addColorChange);
rectangle.addEventListener("mouseout", removeColorChange);
rectangle.addEventListener("dblclick", addColorChangeGreen);
rectangle.addEventListener("mouseout", removeColorChangeGreen);
