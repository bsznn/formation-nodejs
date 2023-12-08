const fs = require("fs"); // File System
const http = require("http");

/* -------------------------------------------------------------------------- */
/*                                  SYNCHRONE                                 */
/* -------------------------------------------------------------------------- */
// `readFileSync` permet de lire un fichier tous extensions
const textIn = fs.readFileSync("./text.txt", "utf-8");
console.log("Synchrone", textIn);

// Ecrire un fichier
const textOut = "Node is amazing à";

/* 
`writeFileSync` permet de créer un fichier en ajoutant les données
qu'on veut dedans

par exemple: on veux un fichier nommé `textOut.txt` contenant une phrase
"Node is amazing"

fs.writeFileSync(chemin_du_fichier_a_créer, data, encodage)
*/
fs.writeFileSync("./textOut.txt", textOut, "utf-8");

/* -------------------------------------------------------------------------- */
/*                                 ASYNCHRONE                                 */
/* -------------------------------------------------------------------------- */

/* `readFile` est la méthode asynchrone pour lire un fichier il prend une fonction en call back
Cette fonction prend 2 params 
`err` => pour quand il y a une erreur
`data` => retourner le contenu du fichier lu.
*/
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log("Asynchrone", data);
});

console.log("Preparing file...");

/* -------------------------------------------------------------------------- */
/*                               Create a server                              */
/* -------------------------------------------------------------------------- */
const server = http.createServer();
// Creer un server au port 3000 => localhost:3000
server.listen(3000, () => console.log("App running on port 3000"));

// Attend une requete
server.on("request", (request, response) => {
  response.writeHead(200, "ok");
  response.end("Hello word");
});
