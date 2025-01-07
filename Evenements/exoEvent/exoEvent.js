//alert("JS est activé");

let divRectangle = document.querySelector(".rectangle");
console.log(divRectangle);

let buttonToggle = document.querySelector("#toggle-rectangle");

console.log(buttonToggle);

buttonToggle.addEventListener("click", () => {
  divRectangle.classList.toggle("hide");
});

// Correction de l'excercice
