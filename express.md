// ---- Quelle est la différence entre une librairie et un framework ? ---- //

- Une **librairie** est un ensemble de fonctions réutilisables pour des tâches spécifiques.
- Un **framework** est une structure plus vaste qui dicte la conception générale de votre application et peut inclure des librairies spécifiques.

// ---- C'est quoi Node Express ? ---- //

`Express` est un framework web construit sur Node.js. C'est une boîte à outils structurée pour simplifier le développement d'applications web avec des fonctionnalités prédéfinies comme la gestion des routes et des requêtes.

// ---- Les lignes de commande pour Express ---- //

1. `npm install express-generator -g` : Installe le générateur d'applications Express globalement.

2. `express e` : Crée une nouvelle application Express nommée "e". Cette commande initialise la structure de base et installe les dépendances nécessaires.

3. `npm i` : Après avoir créé votre application, utilisez cette commande pour installer les dépendances définies dans le fichier package.json. Cela garantit que toutes les bibliothèques requises sont présentes dans votre projet.

4. `npm start` : Utilisez cette commande pour démarrer votre projet Express. Elle exécute le script défini dans le fichier package.json (généralement associé à la commande "start"), lançant ainsi votre application web.

5. Mettez les deux lignes de commande pour installer tailwindcss: npm install -D tailwindcss et npx tailwindcss init

6. Dans le fichier tailwind.config.js, configurez le chemin comme suit : `content: ["./views/*.ejs"]`.

7. Dans le fichier style.css du dossier css, insérez les trois lignes de code suivantes :
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

8. Utilisez la commande suivante pour intégrer Tailwind CSS à votre projet, en ajustant les chemins selon vos besoins : `npx tailwindcss -i ./public/stylesheets/style.css -o ./public/stylesheets/output.css --watch`

// ---- Présentation d'un projet node.js ---- //

Lien vers la documentation : https://experts-invite-4m5.craft.me/821tHa9nb1BQ0o
