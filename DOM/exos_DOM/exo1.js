//alert("Yes, JS is active");

/*
On veut rajouter un paragraphe avant la paragraphe qui a pour id="reference"

1- créer un nouvel élement <p>
*/
let nouveauParag = document.createElement("p");

// 2- Ajouter du texte à ce paragraphe

nouveauParag.innerText = "Je suis le nouveau paragraphe insérée.";

//3- Sélectionner le parent(conteneur) et l'element de référence
let conteneur = document.querySelector(".conteneur");
let reference = document.querySelector("#reference");

//4- insertion avant l'element qui a l'id="reference"
//première façon
conteneur.insertBefore(nouveauParag, reference);
//deuxième façon
reference.insertAdjacentElement("beforebegin", nouveauParag); // insère un noeud d'élément donné à une position donnée par rapport à l'élément sur lequel il est appelé.
/*
targetElement.insertAdjacentElement(position, element);

- Les positions
afterbegin : insère l'element à l'intérieur de la balise mais en avant
beforeend : insère l'element à l'intérieur de la balise mais à la fin
afterend: insère le parag après l'element reference

*/
