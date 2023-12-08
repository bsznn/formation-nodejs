// ---- Initiation à Node JS ---- //

`Node.js` est un environnement d'exécution qui utilise le moteur V8 de Google pour permettre l'exécution de code JavaScript côté serveur. Cette particularité offre la possibilité de créer des sites web complets en utilisant exclusivement JavaScript, simplifiant ainsi le processus de développement.

L'avantage majeur réside dans le fait que les développeurs peuvent travailler avec le même langage tant du côté client que du côté serveur.

En résumé, Node.js élargit les horizons de JavaScript au-delà du navigateur, permettant la construction d'applications web de manière cohérente et efficace.

// ---- Démarrer un projet avec Node.js ---- //

Pour commencer un projet avec Node.js, suivez ces étapes :

1. **Créer une branche :**
   Commencez par créer une branche dans votre système de contrôle de version (par exemple, Git). Cela permet de travailler de manière organisée sur une fonctionnalité spécifique ou une partie du projet.

2. **Créer un fichier index.js :**
   Une fois sur votre branche, créez un fichier `index.js`. À l'intérieur de ce fichier, utilisez `console.log` pour afficher un message dans le terminal. Exécutez le fichier en entrant la commande suivante dans le terminal : `node nom_du_fichier`.

// ---- Comment installer un module ? ---- //

Pour installer un module dans votre projet Node.js, suivez ces étapes :

1. **Créer un dossier "module" :**
   Créez un répertoire appelé "module" pour organiser vos fichiers et modules de manière structurée.

2. **Effectuer les imports avec `require` :**
   Dans votre code, utilisez la syntaxe `require` pour importer les modules nécessaires. Par exemple, si vous avez un fichier `exemple.js` dans le dossier "module", utilisez `const exemple = require('./module/exemple');` pour importer ce module dans votre code principal.

// ---- Comment convertir une chaîne de caractères en URL ? ---- //

Le processus de slugification, appelé Slugify, permet de convertir une chaîne de caractères en une version adaptée à une URL. Pour ce faire, suivez ces étapes :

1. **Installer le module Slugify :**
   Utilisez la commande `npm init` pour initialiser votre projet Node.js, suivez les étapes nécessaires, puis exécutez `npm i slugify` pour installer le module Slugify.

2. **Utiliser le module Slugify :**
   Dans votre code, importez le module Slugify à l'aide de `const slugify = require('slugify');`. Ensuite, vous pouvez utiliser la fonction de slugification pour convertir une chaîne de texte en une version adaptée à une URL. Par exemple : `const urlSlug = slugify('Votre chaîne de texte');`. Cela vous permettra d'obtenir des URL plus propres et conviviales pour vos applications web.

// ---- Quelques révisions ---- //

- `Array.from` : Elle est utilisée pour convertir un objet en tableau.
- `new Set()` : C'est une méthode qui permet d'éviter les doublons dans une collection d'éléments (spécifique aux tableaux).
- `size` : Calcul le nombre d'éléments dans un objet (équivalent de la propriété `length` pour les tableaux).
- `Math.floor` : Utilisée pour arrondir un nombre à l'entier inférieur.
- `Math.random` : Génère un nombre décimal aléatoire entre 0 (inclus) et 1 (exclus).
- `map` : C'est une méthode qui permet d'itérer sur les éléments d'un tableau et d'appliquer une fonction à chacun d'eux.

La méthode `filter()` en JS crée un nouveau tableau en sélectionnant les éléments d'un tableau d'origine qui satisfont une condition spécifiée. À la différence de `map()`, qui transforme chaque élément, `filter()` ne modifie pas le tableau d'origine ; au lieu de cela, elle renvoie un nouveau tableau contenant exclusivement les éléments qui réussissent le test défini par une fonction de rappel. Par exemple, pour extraire les nombres pairs d'un tableau :

```js
const tableauOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tableauFiltre = tableauOriginal.filter((element) => element % 2 === 0);
console.log(tableauFiltre); // Résultat : [2, 4, 6, 8, 10]
```

Dans cet exemple, l'utilisation de `filter()` permet de créer rapidement un nouveau tableau contenant uniquement les nombres pairs du tableau d'origine.
