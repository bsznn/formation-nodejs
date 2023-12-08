const os = require("os");

// Il permet d'accéder au fichier `.env`
require("dotenv").config();

// Chemin de l'accueil
console.log(os.homedir());

console.log(process.env.API_STRIP);

// std
console.log(
  "/* ---------------------------- exemple avec std ---------------------------- */"
);

const pizzas = [
  {
    name: "4 fromages",
    price: 10,
  },
  {
    name: "caniball",
    price: 12,
  },
];

// Pour afficher un message au lancement du programme
// Il faut mettre le code a l'exterieur de l'event `process.stdin.on`

/* 
console.log('Quelle pizza voulez-vous ?');

process.stdin.on('data', (chunk) => {
  
  // const text = chunk.toString();
  // console.log('Text entered :', text); 
  // Converti en string par default c'est un buffer
  const answer = chunk.toString().toLowerCase().trim();

  const pizzaFilter = pizzas.filter((item) => item.name.toString() === answer)
  console.log(`Price : ${pizzaFilter[0].price} €`);
}); */

// console.log("Quel age votre age ?");

// process.stdin.on("data", (chunk) => {
//   const age = chunk.toString();

//   if (Number(age) >= 18) {
//     process.stdout.write("Vous pouvez conduire \n");
//   } else {
//     process.stderr.write("Vous NE pouvez PAS conduire \n");
//   }
// });

/*

// ------------ Ma version de l'exercice ------------ //

console.log("Devinez mon nombre secret ? : ");
let tentativesRestantes = 10;
const nombreAleatoire = Math.floor(Math.random() * 100) + 1;

process.stdin.on("data", (chunk) => {
  const nombreDevine = chunk.toString();

  if (nombreDevine > nombreAleatoire) {
    process.stderr.write("Le nombre choisi est trop grand.");
  } else if (nombreDevine < nombreAleatoire) {
    process.stderr.write("Le nombre choisi est trop petit.");
  } else {
    process.stdout.write("Félicitations ! Vous avez trouvé le bon nombre !");
  }
  tentativesRestantes--;
  console.log(`Il vous reste ${tentativesRestantes} tentatives.`);

  if (tentativesRestantes === 0) {
    process.stderr.write(
      `Désolé, vous n'avez pas trouvé le bon nombre. Le nombre était ${nombreAleatoire}.`
    );
  }
});

*/

// / * CORRECTION DU PROF */

console.log("Devine mon nombre secret ? saissir un nombre entre 1 et 100 🔐");

const secretNumber = Math.floor(Math.random() * 101);
console.log(secretNumber);
// TENTATIVE
let attempts = 10;

process.stdin.on("data", (chunk) => {
  const guessNumber = Number(chunk.toString());

  if (attempts === 0) {
    process.stdout.write(
      `GAME OVER 🚨🚨🚨, le nombre secret était ${secretNumber}\n`
    );

    /* 
    `process.exit` permet d'arrêter le programme (serveur node)
    */
    process.exit();
  } else if (guessNumber > 100) {
    attempts--;
    process.stdout.write(
      `Le nombre sassie est supérieur a 100. Merci de saissir un nombre entre 1 et 100, vie restant ${attempts} 💥\n`
    );
  } else if (guessNumber > secretNumber) {
    attempts--;
    process.stdout.write(
      `Le nombre secret est le plus petit, vie restant ${attempts} 💥\n`
    );
  } else if (guessNumber < secretNumber) {
    attempts--;
    process.stdout.write(
      `Le nombre secret est le plus grand, vie restant ${attempts} 💥\n`
    );
  } else {
    process.stdout.write("Félicitation vous avez trouvé le nombre secret 🎉");
    process.exit();
  }
});

// process.stdin.on("data", (chunk) => {
//   // récupère le flux et le converti en chaine de caractères, puis transforme le texte en majuscule
//   const text = chunk.toString().toUpperCase();
//   console.log(text);
// });

// process.stdout.write("data");

// // process.stdout.write('Bonjour \n');
// // process.stderr.write('Error \n');
