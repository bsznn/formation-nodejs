const chalk = require("chalk");

// Module provenant de npm
const slugify = require("slugify");

// Module crée par le dev
// const { calc } = require('./modules/calc');

/*
Si l'export du module s'est fait avec : 
module.exports = calc
const  calc  = require('./modules/calc');
*/

//console.log(calc(2, 5));
console.log(slugify("Bienvenue a Paris", { lower: true }));
// Bienvenue a Paris
// bienvenue-a-paris

const { loto } = require("./modules/lottery");
const { gagnant } = require("./modules/lottery");

console.log(loto({ min: 20, max: 50, count: 5 }));

const players = ["Kali", "Kim", "Jules", "Timo"];
console.log(chalk.green(`Le gagnant(e) est : ${gagnant(players)}`));

// console.log("Numéros tirés (uniques et triés) :", loto(1, 50, 5));
// console.log("Le gagnant est : " + gagnant(listeParticipants));
