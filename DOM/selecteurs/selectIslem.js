//alert("I'm here !");

// récupération de l'id
//let titre = titreNiveau1; // cette manière uniquement pour récupérer les id

let titre = document.getElementById("titreNiveau1"); // en utilisant la method getElementById
console.log(titre);

//récupération du contenu de l'element
console.log(titre.textContent);

//récupération des elements, appel par classeName
let className = document.getElementsByClassName("row"); // le résultat est un tableau qui contient tous les elements qui portent la classe row.
console.log(className);

let class1 = document.getElementsByClassName("selectClass");
console.log(class1);

console.log(class1[0].innerHTML);
console.log(class1[1].textContent);

//Mini exo : modifier le contenu du h2 qui a la classe "aChanger" par "Je change le titre, Youhou !"
let changer = document.getElementsByClassName("aChanger");
changer[0].innerHTML = "Je change le titre, Youhou !"; // ici le changement se voit dans la page

// récupération par nom de balise
let parags = document.getElementsByTagName("p");
console.log(parags[1]);
//appliquer une couleur de fond sur le deuxième paragraphe
parags[1].style.backgroundColor = "green";

/*mini exo : Sélectionner le premier paragraphe et lui donner le style suivant: 
border-raduis (20px), color(#fff), padding(10px)
*/
parags[1].style.borderRaduis = "20px";
parags[1].style.color = "#fff";
parags[1].style.padding = "10px";

// sélectionner tous les paragraphes dans la page et je change le texte en majuscule

//1ere manière avec simple for
/*
for (let i = 0; i < parags.length; i++) {
  parags[i].style.textTransform = "uppercase";
}
*/

//deuxième manière avec for ... of
for (let p of parags) {
  p.style.textTransform = "uppercase";
}

//méthode queryselector()
//  récupération de la première div uniquement

let div = document.querySelector("div");
console.log(div);

div.style.border = "1px solid red";

// _______méthode querySelectorAll()

let allClasses = document.querySelectorAll(".selectClass"); // retourne un tableau qui présente tous les elements qui portent la classe "selectClass".
console.log(allClasses);
console.log(allClasses[1].innerHTML);

//_________ rajouter des elements

let newElement = document.querySelector("div.col-4 > p.selectClass");
console.log(newElement);
newElement.innerHTML = "<strong>Texte ajoutée</strong>";
newElement.textContent = "<strong>ajouté par la ppté textContent</strong>"; // textContent ne lit pas les balises

//______création d'un nouvel element HTML

//1- récupération du lieu d'injection
let section = document.querySelector("section");
console.log(section);
/*
1-Pour créer un element nous utilisons la méthode "createElement()" après nous l'intégrons dans le noeud souhaitée.
*/
let element1 = document.createElement("p");
console.log(element1); // p
element1.innerText = "paragraphe créer par append et appendChild";

section.append(element1);
section.append(element1, "texte rajoutée à append comme un label"); // ce texte rajoutée est sans balise, il se positionne comme un label pour le premier paramètre (element1)
section.appendChild(element1); // craie une balise p (element1) à la fin de la section(element parent)
//parent.appendChild(enfant)

//------- création d'un nouveau element HTML au début de la section
let element2 = document.createElement("a");
element2.innerText = "Je suis balise a";
element2.style.border = "2px solid red";
section.prepend(element2);

//________ Déplacer un element
let parent = document.querySelector("main");
let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");
//déplacement
parent.insertBefore(h4, h2);

//_________ supprimer un element
/*
Pour supprimer un element, il nous faut deux paramètre: 
1- le parent
2- l'element à supprimer
*/
let liste = document.querySelector("ul");
console.log(liste);
let li1 = document.querySelector("li"); // la première li
let li2 = document.querySelectorAll("li")[1];
console.log(li2);
//suppression
liste.removeChild(li2); // item2 supprimée

//Créer un attribut et sa valeur
let lien = document.querySelector("a");
lien.setAttribute("href", "01_introduction.html");
console.log(lien);
lien.setAttribute("class", "link-underline-danger text-warning");
lien.textContent = "Je suis le lien changé avec setAttribute";

//
let allLinks = document.querySelectorAll("a");
console.log(allLinks);

let valeurA2 = allLinks[1].getAttribute("href");
console.log(valeurA2);
/*--------------------------------------------
---------- Excercice -------------------------
----------------------------------------------
 grâce à votre script, créer une balise "a" dans la balise "h1" avec le lien vers la documentation JS, qui s'affiche sur un nouvel onglet
// Ce lien sera de couleur verte et non souligné.
*/
let h1 = document.getElementById("titreNiveau1");
h1.innerText = "";

let a = document.createElement("a");
a.textContent = "Documentation JavaScript";
// Configuration de l'URL du lien
a.setAttribute(
  "href",
  "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
);
// deuxième manière
a.href =
  "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model";
console.log(a);
a.target = "_blank";
a.style.color = "green";
a.style.textDecoration = "none";

//injection avec append
// h1.append(a);
h1.appendChild(a);
