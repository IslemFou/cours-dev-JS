//alert("JS est là !");

//______ Sélection de l'elements par son id

/*Je veux récupérer le h1 
---- Première méthode :via son id
- on craie une variable select1
*/
let select1 = titreNiveau1; // cette méthode est uniquement pour les id
console.log(select1); //h1#titreNiveau1.display-5.fw-bold

//Deuxième méthode: la récupération avec "getElementbyId"(est une méthode) via son id, toujours commencer par l'objet: document

let select2 = document.getElementById("titreNiveau1");
console.log(select2); // h1#titreNiveau1.display-5.fw-bold

//on veux récupérer le contenu de l'element du DOM
console.log(select2.textContent); //textContent est une ppté qui affiche le contenu du "titreNiveau1" --> >Les sélecteurs

//_______ Selection des elements par leurs classe

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass); //affiche tous les elements [] qui portent cette classe

// je veux récuperer le premier element avec son contenu
console.log(selectClass[0].innerHTML); // [0] => le contenu du premier paragraphe qui représente un tableau
console.log(selectClass[1].textContent);
/*innerHTML et textContent affichent le contenu de l'element
innerHTML permet de définir le contenu de la balise ou l'element HTML et le selectionner dans le but de l'identifier...

// Lorsqu'on sélectionne plusieurs éléments en même temps avec "getElementByClassName", on crée un array qui affichera dans la console avec l'intitulé "HTMLCollection".

// Et comme un tableau, le premier élément aura l'index 0, et grâce à cet index, je pourrai viser un seul de ces éléments.

// On va aller plus loin avec les propriétés "innerHTML" ou "textContent", en ciblant ce qui se trouve dans l'élément (le contenu de l'élément)
*/
