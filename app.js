//Transformer les elements sous forme de tableau, car dans les noteslistes, on a pas toutes les methodes associées aux tableaux ;
const touches = [...document.querySelectorAll(".button")];
// Recuperer les valeur key de data-key sur chaque élément du tableau
//On accède au data key grace a dataset
const listeKeycode = touches.map((element) => element.dataset.key);

const ecran = document.querySelector(".ecran");

//Créer un évenement de type keydown et récuperer la valeur du data-key et la stocker dans la variable valeur sous forme de chaine de caractère
document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});
//target permet de récupere l'élément html sur lequel on vient de cliquer
document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key; //Récuperer le data-key
    calculer(valeur);
});

//Créer une fonction calcul
const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        //vérifier si la valeur entrée est contenue dans notre tableau de keycode
        switch (valeur) {
            // Cas spécial
            // si le keycode = 8, on nettoie l'ecran
            // Si le keycode = 13, on evalue tout le contenu sur l'écran et on affiche le résultat

            case "8":
                ecran.textContent = "";
                break;
            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                //la methode indexOf permet de chercher un element grace à son index.
                // Récuperer l'index du keycode dans le tableau
                const indexKeycode = listeKeycode.indexOf(valeur); //Rechercher un keycode dans la liste de keycode dans la liste de nos keycode
                const touche = touches[indexKeycode]; // Retrouver une touche grace a son index
                ecran.textContent += touche.innerHTML;
        }
    }
};

// Afficher une boite d'alerte lorsqu'il y a une erreur

addEventListener("error", (e) => {
    alert(`Une erreur s'est produite : ${e.message}`);
});
