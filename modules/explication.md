// La fonction loto prend trois paramètres : le nombre minimum (min) possible,
// le nombre maximum (max) possible, et le nombre de chiffres à tirer (nombreDeChiffres).
function loto(min, max, nombreDeChiffres) {
// Crée un tableau vide pour stocker les numéros tirés.
const numerosTires = [];

// Utilise une boucle while pour continuer à tirer des numéros
// jusqu'à ce que le tableau ait atteint la taille spécifiée (nombreDeChiffres).
while (numerosTires.length < nombreDeChiffres) {
// Génère un numéro aléatoire entre min et max inclus.
const numeroAleatoire = Math.floor(Math.random() \* (max - min + 1)) + min;

    // Vérifie si le numéro aléatoire généré n'est pas déjà dans le tableau.
    if (!numerosTires.includes(numeroAleatoire)) {
      // Si le numéro n'est pas dans le tableau, l'ajoute.
      numerosTires.push(numeroAleatoire);
    }

}

// Trie les numéros tirés par ordre croissant avant de les renvoyer.
return numerosTires.sort((a, b) => a - b);
}

function methodeGagnant(participants) {
// Générer un indice aléatoire basé sur la longueur de la liste de participants
let indiceAleatoire = Math.floor(Math.random() \* participants.length);

// Retourner le nom du participant choisi
return participants[indiceAleatoire];
}

// Exemple d'utilisation
let listeParticipants = ["Participant1", "Participant2", "Participant3", "Participant4"];
let nomGagnant = methodeGagnant(listeParticipants);

console.log("Le gagnant est : " + nomGagnant);
