/*
Un evenement correspond à une action spécifique, comme par exemple le click sur un bouton ou la frappe d'un clavier. 

Ainsi la programmation évenementiel consiste à réagir à ces évenements et exécuter du code au moment où ces évenements se produisent.
Les évenements vont nous permettrent de déclancher une fonction càd une série d'instructions suite à une action de l'utilisateur.

Pour implémenter cela, nous devons d'abord dire à javaScript de les écouter grâce à un "eventListener" = un écouteur d'évènement.
Après, nous devons lier l'évènement à un bloc de code. 

-------- Ecouter un évenement avec un addEventListener:
addEventListener est une méthode fournie par javaScript qui peut être appelée directement depuis des éléments HTML.

Cette méthode prend deux paramètres :
-> le nom de l'évenement, comme click par exemple
-> Une fonction

la fonction peut s'écrire de deux manières différentes :
-> les fonctions classiques avec les mots-clés "function".
-> les fonctions fléchées.

Syntaxe:

selecteur.addEventListener("evenement", fonction);

étape 1: sélectionner les éléments
étape 2: création de fonctions qui seront exécutée par l'évennement.
étape 3: poser l'écouteur d'évenements pour l'interaction
*/
//1- div qui porte l'id rouge
let divRouge = document.querySelector("#rouge"); // je selectionne ma div par son id
console.log(divRouge);

//avec une fonction anonyme

//on rajoute l'écouteur d'évènement
/*
1ere méthode
divRouge.addEventListener("click", function () {
  divRouge.style.backgroundColor = "gold";
  divRouge.style.borderRadius = "50%";
  divRouge.textContent = "GOLD";
});

2eme méthode
*/
divRouge.addEventListener("click", fDivRouge);

function fDivRouge() {
  divRouge.style.backgroundColor = "gold";
  divRouge.style.borderRadius = "50%";
  divRouge.textContent = "GOLD";
}
// l'action ici est : click
// le nom de la fonction ici : fDivRouge

//2- #p1
/* on place la fonction js qu'on veut exécuter à l'intérieur de la balise ouvrante <p>
 */

function fp1() {
  alert("l'element est cliquée ! ");
}

//________ l'evenement double click

//3- div #orange avec la fonction anonyme
let divOrange = document.querySelector("#orange");

divOrange.addEventListener("dblclick", function () {
  divOrange.style.backgroundColor = "gold";
  divOrange.style.borderRadius = "50%";
  divOrange.textContent = "GOLD";
});

//_________ l'évenement mouseover
let divInfo = document.querySelector("#info");

divInfo.addEventListener("mouseover", function () {
  divInfo.style.backgroundColor = "gold";
  divInfo.style.borderRadius = "50%";
  divInfo.textContent = "GOLD";
});

//________ l'evenement quitter avec hover
//mouseout
//mouseleave
let divPrimary = document.querySelector("#primary");

divPrimary.addEventListener("mouseleave", function () {
  divPrimary.style.backgroundColor = "gold";
  divPrimary.style.borderRadius = "50%";
  divPrimary.textContent = "GOLD";
  //comme je peux interagir avec un autre element grâce à la même fonction
  document.querySelector("h1").style.color = "green";
});

//________6- l'evenement
//div #success : click et reclick
//passage de la classe vert vers la classe gold
let divChangeCouleur = document.querySelector("#success");
divChangeCouleur.addEventListener("click", function () {
  //je vérifie si la div contient la classe 'vert' dans la liste de classe
  // if (true)
  if (divChangeCouleur.classList.contains("vert")) {
    divChangeCouleur.classList.remove("vert"); // je supprime la classe 'vert'
    divChangeCouleur.classList.add("gold"); // je rajoute la classe 'gold'
    divChangeCouleur.textContent = "GOLD";
  } else {
    //sinon, si (false), cad la div ne contient pas la classe 'vert' => elle contient la classe 'gold'
    divChangeCouleur.classList.add("vert"); // je rajoute la classe 'vert'
    divChangeCouleur.classList.remove("gold"); // je supprimr la classe 'gold'
    divChangeCouleur.textContent = "VERT";
  }
});

// section toggle chat
let imageChat = document.querySelector("img");
imageChat.style.width = "300px";

let lesP = document.querySelectorAll(" .toggle p");
console.log(lesP);
/*
lesP[0].style.textDecoration = "underline";
lesP[1].style.textDecoration = "underline";
lesP[2].style.textDecoration = "underline";
*/
//création de boucle
for (let paragraph of lesP) {
  paragraph.style.textDecoration = "underline";
  paragraph.style.color = "pink";
  paragraph.style.fontWeight = "bold";
}

//Pour cacher l'image
lesP[0].addEventListener("click", () => {
  imageChat.classList.add("hide");
});
// faire revenir l'image
lesP[1].addEventListener("click", () => {
  imageChat.classList.remove("hide");
});
// toggle qui clique et reviens
lesP[2].addEventListener("click", () => {
  imageChat.classList.toggle("hide");
});

// bloquage d'aller sur un lien avec la méthode preventDefault()
/*
// l'objet event (e) est un objet javascript, contient des informations sur l'action qui vient de se produire, avec de nombreuses propriétés et méthodes

// Définir le event en tant que paramétre de votre fonction est facultatif mais , parfois, il est utile que la fonction de gestionnaire connaisse l'évenement qui s'est produit

//  Il est possible d'annuler ce comportement par défaut en appelant la méthode "preventDefault()" sur l'objet "event".
*/
document.querySelector("#interdit").addEventListener("click", (event) => {
  event.preventDefault(); //cette méthode est particulièrement utile pour éviter que la soumi ssion d'un formulaire recharge la page
  alert("interdire d'aller sur ce lien");
});
// empeche le comportement par défaut

// ************Gestion du formulaire
/*
let prenom = document.querySelector("#prenom");
console.log(prenom);
let submit = document.querySelector("#submit");

// Je récupére la valeur de l'élément input prenom
/* en Js pour accéder à la valeur d'une zone de texte dans un formulaire on utilise la ppté "value "
 */
submit.addEventListener("click", (event) => {
  event.preventDefault();
  // création de variable pour récupérer la valeur de l'input
  let prenomValue = prenom.value;
  console.log(prenomValue);
});

//l'envoie du formulaire
//deuxième façon de le faire
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  //l'evenement ici est sur le formulaire
  e.preventDefault();
  console.log(e);
  let prenomValue = prenom.value;
  console.log(prenomValue);
});

//focus et blur pour les formulaires

//Focus
prenom.addEventListener("focus", () => {
  //lorsque l'utilisateur clique à l'intérieur du champ (input prenom)
  prenom.style.width = "350px"; // l'input s'élargit en cliquant à l'intérieur
  console.log(prenom.style.width);
});

//blur
prenom.addEventListener("blur", () => {
  //lorsque l'utilisateur sorts du champ (input prenom)
  prenom.style.width = "500px";
});

// Evenement "change"
//L'evenement change est déclanché lorsqu'un changement de la valeur d'un élement html est relaisé par l'utilisateur

const HTML = document.querySelector("#html");
const LABEL_HTML = document.querySelector("#labelHtml");
HTML.addEventListener("change", (event) => {
  console.log(HTML.cheched);
  if (event.target.checked) {
    // ou (HTML.checked)
    //document.querySelector("#labelHtml").style.color = "red";
    //ou
    //LABEL_HTML.style.color = "green"; // autre manière d'écrire
    //ou
    //labelHtml.style.color = "grey"; // directement le nom de l'id
    //ou
    //event.target.style.backgroundColor = "pink"; //ici on change le backgroundColor de l'element input
    //ou
    //event.target.nextElementSibling.style.color = "aquamarine"; // ici je change la couleur de l'element label à partir de l'element input
  } else {
    document.querySelector("#labelHtml").style.color = "blue";
    // event.target.style.backgroundColor = "white";
  }
});

//on refait la meme chose pour les autres cases à cocher CSS et JS

// appliquer le changement sur l'input CSS

const MONCSS = document.querySelector("#CSS");
const LABEL_CSS = document.querySelector("#labelCSS");
MONCSS.addEventListener("change", (event) => {
  console.log(MONCSS.cheched);
  if (event.target.checked) {
    // ou (MONCSS.checked)
    //document.querySelector("#labelCSS").style.color = "red";
    //ou
    //LABEL_CSS.style.color = "green"; // autre manière d'écrire
    //ou
    //labelCSS.style.color = "grey"; // directement le nom de l'id
    //ou
    //event.target.style.backgroundColor = "pink"; //ici on change le backgroundColor de l'element input
    //ou
    //event.target.nextElementSibling.style.color = "aquamarine"; // ici je change la couleur de l'element label à partir de l'element input
  } else {
    document.querySelector("#labelCSS").style.color = "blue";
    //event.target.style.backgroundColor = "white";
  }
});

// application sur l'input JS
const MONJS = document.querySelector("#JS");
const LABEL_JS = document.querySelector("#labelJS");
MONJS.addEventListener("change", (event) => {
  //console.log(MONJS.cheched);
  if (event.target.checked) {
    // ou (MONJS.checked)
    //document.querySelector("#labelJS").style.color = "red";
    //ou
    //LABEL_JS.style.color = "green"; // autre manière d'écrire
    //ou
    //labelJS.style.color = "grey"; // directement le nom de l'id
    //ou
    // event.target.style.backgroundColor = "pink"; //ici on change le backgroundColor de l'element input
    //ou
    //event.target.nextElementSibling.style.color = "aquamarine"; // ici je change la couleur de l'element label à partir de l'element input
  } else {
    document.querySelector("#labelJS").style.color = "blue";
    // event.target.style.backgroundColor = "white";
  }
});

//--------------------------------------------------------
//------------------ Deuxième méthode ----------------
//--------------------------------------------------------
// l'utilisation d'une boucle
let checks = document.getElementsByName("Langages");
// ou .getElementByAttribute() ou .getElementByName() .querySelectorAll("input[name='langages']")
console.log(checks);

for (let button of checks) {
  button.addEventListener("change", (event) => {
    //Je vérifie la valeur du checked de l'element dans mon objet event => true si la case est cochée
    console.log(event.target.labels[0]);

    if (event.target.checked) {
      event.target.labels[0].style.color = "red";
    } else {
      event.target.labels[0].style.color = "blue";
    }
  });
}

// on fait la meme chose avec les radios

let radio = document.getElementsByName("radio");
// ou .getElementByAttribute() ou .getElementByName() .querySelectorAll("input[name='langages']")
console.log(radio);

for (let button of radio) {
  button.addEventListener("change", (event) => {
    //Je vérifie la valeur du checked de l'element dans mon objet event => true si la case est cochée
    console.log(event.target.labels[0]);

    if (event.target.checked) {
      event.target.labels[0].style.color = "green";
    } else {
      event.target.labels[0].style.color = "blue";
    }
  });
}
