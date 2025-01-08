// alert("formulaire est activé");
// *************** formulaire ***************
/*
Récupération de la valeur de l'input prenom
*/
let prenom = document.querySelector("#prenom");
console.log(prenom);
let submit = document.querySelector("#submit");


//première méthode d'envoie du formulaire
submit.addEventListener("click", (event)=> 
{
  event.preventDefault();
  //on craie une variable afin de récupérer la valeur de l'input
  let prenomValue = prenom.value;
  console.log(prenomValue);
});

// L'envoie du formulaire (deuxième méthode)
let form = document.querySelector("form");
form.addEventListener("submit", (e)=>
{
  //l'evenement s'applique ici sur le formulaire
  e.preventDefault();
  console.log(e);
  let prenomValue = prenom.value;
  console.log(prenomValue);
})
// lorsqu'on remplie l'input prenom --> le résultat est fournie dans la console


//focus pour les input des formulaires
prenom.addEventListener("focus", ()=>
{
    prenom.style.backgroundColor = "green";
    console.log(prenom.style.backgroundColor); //green
    
});

//blur
prenom.addEventListener("blur", ()=>
{
    prenom.style.backgroundColor = "yellow";
    // le champs devient jaune quand l'utilisateur quitte le champ
});

// ************** Evenement change ********************
const HTML = document.querySelector("#html");
const LABEL_HTML = document.querySelector("#labelHtml");
const MONCSS = document.querySelector("#CSS");
const LABEL_CSS = document.querySelector("#labelCSS");
const MONJS = document.querySelector("#JS");
const LABEL_JS = document.querySelector("#labelJS");


// HTML
HTML.addEventListener("change", (event)=>
{
    console.log(HTML.checked); //true -> checked
    if (event.target.checked)
    {
        document.querySelector("#labelHtml").style.color = "orange";
        /*
        ou 
        LABEL_HTML.style.color ="red";
        ou
        labelHtml.style.color = "red";
        ou
        event.target.color = "red";
        ou
        event.target.nextElementSibling.style.color = "red";
        */
    } else
    {
        LABEL_HTML.style.color ="grey"; //after checking
    }
    
});



// pour CSS
MONCSS.addEventListener("change", (event)=>
{
    console.log(MONCSS.checked); //true -> checked

    if (event.target.checked)
    {
        document.querySelector("#labelCSS").style.color = "blue";
        //event.target.style.color = "blue";
        /* ou
        LABEL_CSS.style.color = "blue"
        ou
        labelCSS.style.color = "blue"
        ou
        event.target.nextElementSibling.style.color = "blue";
        */
    } else
    {
         LABEL_CSS.style.color = "grey";
    }
});

//pour le JS
MONJS.addEventListener("change", (event)=>
{
    console.log(MONJS.checked);
    if (MONJS.checked)
    {
        LABEL_JS.style.color = "orange";
    } else
    {
        LABEL_JS.style.color = "grey";
    }
});


/* ----------------------------------------
---------- Autre méthode avec l'utilisation d'une boucle 
- ici nous avons en commun l'attribut name = "Language"
- dans ce cas, on utilise une boucle for (... of ...)
*/

let checks = document.getElementsByName("Langages");

console.log(checks); // renvoie un tableau qui contient les 3 inputs de type checkbox

for (let button of checks)
{
    button.addEventListener("change", (event) =>
    {
        console.log(event.target.labels[0]);
       if (event.target.checked)
        {
           event.target.labels[0].style.color = "red"; 
        } else
        {
            event.target.labels[0].style.color ="green";
        }
    });
}

// radio
//les radio
let radio = document.getElementsByName("niveau");
console.log(radio);


//création d'une fonction pour réinitialiser les couleurs des labels
function resetLabelColor()
{
    for (let btn of radio)
    {
        btn.labels[0].style.color = "";
    }
}

//
for (let button of radio)
{
    button.addEventListener("change", (event)=>
    {
        resetLabelColor();
        switch (event.target.value)
        {
            case "acquis":
                event.target.labels[0].style.color ="green";
            break;
            case "enCours":
                event.target.labels[0].style.color ="orange";
            break;
            case "nonAcquis":
                event.target.labels[0].style.color = "red";
            break;
        }
    });
}