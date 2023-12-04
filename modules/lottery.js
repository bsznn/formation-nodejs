/* function loto(min, max, nombreDeChiffres) {
  const numerosTires = [];

  while (numerosTires.length < nombreDeChiffres) {
    const numeroAleatoire = Math.floor(Math.random() (max - min + 1)) + min;

    if (!numerosTires.includes(numeroAleatoire)) {
      numerosTires.push(numeroAleatoire);
    }
  }

  return numerosTires.sort((a, b) => a - b);
};

function gagnant(participants) {
  if (participants.length === 0) {
    return "Aucun participant";
  }

  let gagnant = participants[Math.floor(Math.random() * participants.length)];

  return gagnant;
}

let listeParticipants = ["Radji", "Mattias", "Amélie", "aurélien", "Béatrice"];
let gagnantChoisi = gagnant.choisirGagnant(listeParticipants); */

const loto = function ({ min, max, count }) {
  const draw = new Set();

  // `size` permet de récuperer le nombre d'element dans un Set
  while (draw.size < count) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    // max : 50
    // min : 20
    // 50 - 20 = 31 +20 = 51
    draw.add(random);
  }

  return Array.from(draw);
};

const gagnant = function (players) {
  const randomIndex = Math.floor(Math.random() * players.length);

  return players[randomIndex];
};

module.exports = { loto, gagnant };
