//alert("JS est là ! "); --> pour tester si le js est bien liée
/*-----------Le DOM--------------------
------------Objectif du cours-------------------

1- Comprendre ce qu'est le DOM.
2- Manipuler le DOM avec JS pour créer, sélectionner,interagir, modifier et supprimer des éléments.
3- Gérer des évènements utilisateurs sur des éléments du DOM
-------------------------------------------

1- Définition du DOM
Le DOM (Document Object Model) est une interface de programmation qui représente un document HTML ou XML sous forme d'une arborescence d'objets.
Chaque elements HTML devient un noeud qu'on peut le manipuler avec le language javaScript.

- Avec le DOM on peut interagir avec les utilisateurs (afin de repérer des clicks sur un élément ou encore de réucpérer leurs nom dans un formulaire).

-------------- Structure du DOM ---------------
_____________________
exemple de page html: 
<!DOCTYPE html>
<html >
  <head>
    <title>Exemple DOM</title>
  </head>
  <body>
    <h1>Introduction au DOM</h1>
    <p></p>
    <button></button>
  </body>
</html>
_________________

=> La structure du DOM de ce document peut être représentée comme suit: 
--document (page html)
  └─ html
      ├─ head
      │  └─ title (elements)
      └─ body
         ├─ h1 (id="titre")
         ├─ p (class="texte")
         └─ button (id="btn")

___________________

- Il faut voir le DOM comme un arbre où chaque element peut avoir zéro ou plusieurs enfants qui peuvent avoir eux-mêmes zéro ou plusieurs enfants.

- Dans le DOM, on commence toujours par un élement racine qui est le point dépard du document: la balise <html>

En résumée:
Aujourd'hui les sites web sont de plus en plus interactifs et annimés. En effet, leurs contenu change et évolue en continu sans avoir besoin de recharger la page. Cela nous permet d'avoir une navigation fluide et agréable.
C'est grâce au DOM qui nous permet de faire cela.
_______________________

- L'objet "Document" est le point d'entrée dans le contenu HTML.
En effet, chaque page chargée dans mon navigateur a un objet "document".
Exemple: document.write(""); --> nous permet d'afficher du contenu en JS dans ma page HTML.

- L'objet "window" est un objet qui correspond à la fenêtre dans laquelle s'affiche une page web. 
-Window est le parent de chaque objet qui compose la page web il contient donc:
-> L'objet "document": la page
-> L'objet "location": le lieu de stockage de la page
-> l'objet "history": les pages visitée prcédemment

*/

console.log(window);
// On retrouve plein de méthodes disponible sur l'objet window
// L'ojbet 'window' possède des méthodes relatives à l'ouverture et à la fermeture des fenêtres.
// --> les méthodes comme : alert(), confirm() et prompt(), ...

console.log(window.document.title); //Cours DOM JS
// l'évenement "window.onload" permet de lancer la fonction seulement une fois que toute la page est chargée, ce qui fait que cette fonction, peu n'importe ou elle est placée dans la page, sera lue seulement lorsque toute la page est chargée.
