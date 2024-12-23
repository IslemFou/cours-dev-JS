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
//Mini exo : modifier le contenu du h2 qui a la classe "aChanger" par "Je change le titre, Youhou !"
/* La première chose on craie une variable
 */
let aChanger = document.getElementsByClassName("aChanger"); //cette variable affiche tous element qui porte la classe "aChanger" et l'affiche sous forme de tableau d'elements

console.log(aChanger); // HTML collection[h2.aChanger], Dans ce cas, il y a un seul tableau donc, il affiche 0:h2.aChanger
aChanger[0].innerHTML = "Je change le titre, youhou ! ";

//-------------------- Sélectionner les éléments par le nom de balise
/*
Je veux récuperer tous les paragraphes de notre page et on les récupères dans un tableau (array) via la méthode getElementByTagName .
on craie une variable
*/
let lesP = document.getElementsByTagName("p"); //sous forme de tableau
console.log(lesP);
lesP[0].style.backgroundColor = "pink";

/*mini exo : Sélectionner le premier paragraphe et lui donner le style suivant: 
border-raduis (20px), color(#fff), padding(10px)
*/
lesP[0].style.borderRadius = "20px";
lesP[0].style.color = "#fff";
lesP[0].style.padding = "10px";

// Je veux sélectionner tous les paragraphes dans la page et je change le texte en majuscule
//1ere manière, on utilise une boucle for

/*for (let i = 0; i < lesP.length; i++) {
  lesP[i].style.textTransform = "uppercase";
}
  */
//2ème manière, avec boucle for...of

for (let p of lesP) {
  p.style.textTransform = "uppercase";
}

//_______méthode querySelector()
/*
Récupérer les div
*/
let div = document.querySelector("div"); // récupère le premier element
console.log(div);
div.style.border = "1px solid red"; //uniquement que pour le premier
/*
La méthode querySelector() retourne le 1er element trouvé spécifié en paramètre.
L'avantage de querySelector() est qu'il utilise la même synthaxe de selection en CSS.
document.querySelector("#monId"), document.querySelector(".maClasse"), document.querySelector("l'element comme déclarée en css")
*/

// _______méthode querySelectorAll()
/*
selectionne tous les balises (dans cet exemple) div et retourne un tableau d'elements. 
*/
let queryPara = document.querySelectorAll(".selectClass");
// on a deux paragraphes qui portent la classe
console.log(queryPara); // affiche un tableau qui contient tous les parag qui portent la classe "selectClass"
console.log(queryPara[1].innerHTML); // affiche le contenu du deuxième element

//rajouter des elements

let rajout = document.querySelector("div.col-4 > p.selectClass");
rajout.innerHTML = "<span>Je sui là</span>";
/*avec la ppté "innerHTML" on peut inclure des balises HTML.
- Elle Permet d'insérer du HTML dynamique, mais peut poser des risques de sécurité si des données non sécurisée sont insérée (risque d'attaque XSS : Une attaque par XSS est une injection de code malveillant dans une plateforme en ligne apparemment sûre. Les hackers injectent du code malveillant à partir des paramètres d'accès côté client pour exploiter les vulnérabilités dans les applications Web.)

*/
rajout.textContent = "<span>Je sui là</span>";
/*
textContent permet de lire ou modifier uniquement le contenu texte d'un element HTML. Il ignore et échappe les balises HTML
*/

//______création d'un nouvel element HTML

// 1- Récupérer la section
let section = document.querySelector("section");
console.log(section);
/*
2- Pour créer un element nous utilisons la méthode "createElement()" après nous l'intégrons dans le noeud souhaitée.
*/
let nouveauParaFin = document.createElement("p");
console.log(nouveauParaFin);
nouveauParaFin.innerText =
  "CouCou, je suis ton nouveau paragraphe créer avec createElement à la fin de la section";
//3- injection avec append
section.append(nouveauParaFin); //insertion de l'element
/*
append est pour insérer du contenu à la fin de "section".
append accepte tous les élément dont balises ou string,...
append.child() : cette méthode ajoute un element HTML enfant à la fin d'un element parent.
- n'accepte que les éléments de type de balise
*/
section.append(nouveauParaFin, "Du texte supplémentaire"); //append peux prendre plusieurs paramètres
section.appendChild(nouveauParaFin);

//création d'un nouveau element HTML au début de la section

let nouveauParaDebut = document.createElement("p");
nouveauParaDebut.innerText =
  "Ceci est un paragraphe insérée au début de la section à travers de la méthode prepend";
section.prepend(nouveauParaDebut); // injecte l'element et son contenu au debut de "section"

//________ Déplacer un element
/*
Pour déplacer un element ils nous faut 3 paramètres
- Le premier, c'est le parent
- le deuxième, l'element c'est l'element qui viens après
- Le troisième paramètre, l'element à déplacer
*/
// Le parent
let parent = document.querySelector("main"); // le main est notre parent
// l'element qui vien après
let sousTitre = document.querySelector("h2");
// l'element à déplacer, dans notre cas le h4
let toMove = document.querySelector("h4");
// déplacement
parent.insertBefore(toMove, sousTitre);

//__________ Supprimer un element
/*
Pour supprimer un element, il nous faut deux paramètre: 
1- le parent
2- l'element à supprimer
*/
//Récupération du parent
let liste = document.querySelector("ul");
console.log(liste);

//element à supprimer
let li = document.querySelectorAll("li")[1];
console.log(li);
// suppression de item2
liste.removeChild(li);
// ou liste.removeChild(li[1]);
/*
pour supprimer on utilise la méthode removeChild
*/

//Créer un attribut et sa valeur
/*
LA méthode setAttribute() pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un element.  
*/
let lien1 = document.querySelector("a");
lien1.setAttribute("href", "01_introduction.html"); //changer la valeur de l'attribut
console.log(lien1);
lien1.setAttribute("class", "link-underline-danger text-warning"); //rajoute un attribut et sa valeur

//--------------- getAttribute()
let lesA = document.querySelectorAll("a");
console.log(lesA);
/*
ici on récupère l'attribut du troisième "a" dans la liste ul, il faut indiquer l'index 1 car li[1] a été supprimé du DOM
*/
let valeurA2 = lesA[1].getAttribute("href");
console.log(valeurA2);

/*--------------------------------------------
---------- Excercice -------------------------
----------------------------------------------
 grâce à votre script, créer une balise "a" dans la balise "h1" avec le lien vers la documentation JS, qui s'affiche sur un nouvel onglet
// Ce lien sera de couleur verte et non souligné.
*/
// Sélection de la balise h1
let h1 = document.getElementById("titreNiveau1");
// Création de l'élément <a>
let lien = document.createElement("a");
//h1.innerText = ""; => vider le contenu du h1
// Configuration du texte du lien
lien.textContent = "Documentation JavaScript";
// Configuration de l'URL du lien (1ère façon)
// lien.setAttribute("href", "https://developer.mozilla.org/fr/");
// Configuration de l'URL du lien (2ème façon)
lien.href = "https://developer.mozilla.org/fr/";
// Configuration pour ouvrir le lien dans un nouvel onglet (1ère façon)
// lien.setAttribute("target", "_blank");
// Configuration pour ouvrir le lien dans un nouvel onglet (2ème façon)
lien.target = "_blank";
// Application des styles pour que le lien soit vert et non souligné
lien.style.color = "green";
lien.style.textDecoration = "none";

// Ajout du lien à l'intérieur de la balise h1
h1.appendChild(lien);
