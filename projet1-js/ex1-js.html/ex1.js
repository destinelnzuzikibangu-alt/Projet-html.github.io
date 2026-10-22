function direBonjour() {
    document.getElementById("message").textContent = "Bonjour ! Bienvenue sur ma page.";
}
  
function afficherDate() {
    var maintenant = new Date();
    var texte = "Nous sommes le " + maintenant.toLocaleDateString("fr-FR") +
                " et il est " + maintenant.toLocaleTimeString("fr-FR") + ".";
    document.getElementById("message").textContent = texte;
}

    function changerCouleur() {
    var couleurs = ["#ffeaa7", "#fab1a0", "#81ecec", "#a29bfe", "#b2f2bb"];
    var indice = Math.floor(Math.random() * couleurs.length);
    document.body.style.backgroundColor = couleurs[indice];
    document.getElementById("message").textContent = "Nouvelle couleur de fond : " + couleurs[indice];
}
function nombreAleatoire() {
    var nombre = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "Votre nombre aléatoire est : " + nombre;
}
function effacer(){
document.getElementById("message").textContent = "";

}
function verif_age(){ 
    let n1 = prompt("donnez votre âge :")
    if (n1 < 18) {
       document.getElementById("message")
       document.write("Vous êtes mineur")
    document.body.style.backgroundColor = "red"
    }

    else{
        document.write("Vous êtes majeur")
    	document.body.style.backgroundColor = "green"
	}
}
function calcule_somme() {
    let n1 = prompt("Donnez un nombre : ")
    let n2 = prompt("Donnez un 2ème nombre : ")
    let n3 = prompt("Donnez un 3 ème nombre : ")
    let Somme = Number(n1) + Number(n2) + Number(n3);
    let moyenne = Somme/3;
document.getElementById("message").textContent = "La somme est  : " + Somme + " " + "La somme est  : " + moyenne.toFixed(2);

}


 

