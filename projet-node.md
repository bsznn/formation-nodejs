Lien de la documentation : https://nodejs.org/api/stream.html

// ---- Comment créer un projet en Node.js ? ---- //

1. Pour créer un projet en Node.js, commencez par exécuter la commande suivante dans votre terminal : `npm init`. Cela initialisera votre projet et vous guidera à travers le processus de création du fichier `package.json` en répondant à quelques questions.

2. Ensuite, pour assurer une gestion efficace des modifications pendant le développement, vous pouvez utiliser `nodemon`. Installez-le globalement en exécutant la commande : `npm install -g nodemon`. Une fois installé, vous pouvez exécuter votre script principal (par exemple, "index.js") en utilisant la commande `nodemon index.js`.

Cette approche permettra à votre application de redémarrer automatiquement à chaque fois que des modifications sont détectées dans vos fichiers source, facilitant ainsi le processus de développement.

3. Accédez au fichier `package.json` et, dans la section des scripts, supprimez toute référence au script de test existant. Ensuite, ajoutez la ligne de code suivante sous la clé "scripts" :

```json
"start": "nodemon index.js"
```

Cela configure le script de démarrage pour exécuter votre application en utilisant `nodemon`, assurant ainsi un redémarrage automatique en cas de modifications dans les fichiers sources.

4. Démarrez votre projet en utilisant la commande : `npm start`. Si le script n'est pas configuré dans le fichier `package.json`, utilisez plutôt la commande suivante : `npm run dev`.

// ---- Quelques notions à connaître ---- //

- La méthode `platform()` du module `os` de Node.js permet d'obtenir la plate-forme sur laquelle s'exécute votre programme. Elle retourne une chaîne de caractères représentant la plate-forme actuelle, telle que "win32" pour Windows, "linux" pour Linux, ou "darwin" pour macOS.

- La fonction `process.env()` est utilisée pour récupérer des éléments spécifiques de l'environnement dans lequel s'exécute votre application Node.js. Elle permet d'accéder à des variables d'environnement telles que les configurations système ou les paramètres définis par l'utilisateur.

- La méthode `homedir()` du module `os` renvoie le chemin du répertoire personnel de l'utilisateur. Cela peut être utile pour construire des chemins de fichiers spécifiques à l'utilisateur ou pour accéder à des ressources dans le répertoire personnel de l'application.

- La méthode `process.stdin.write()` est utilisée pour écrire des données dans le flux d'entrée standard (stdin) de Node.js, permettant l'interaction avec un processus en cours d'exécution en fournissant des données depuis votre programme. Elle est souvent utilisée dans des scénarios spécifiques, mais pour la gestion générale de l'entrée utilisateur, des modules tels que `readline` sont plus couramment employés.

- La méthode `process.stderr.write()` est utilisée pour écrire des messages d'erreur directement dans la console en Node.js, assurant une sortie explicite sur le flux d'erreur standard (stderr).

-`process.stdin.on()` est utilisé pour écouter les données sur le flux d'entrée standard de Node.js, permettant ainsi de réagir aux entrées utilisateur. Cette fonctionnalité est couramment employée pour créer des programmes interactifs qui capturent et traitent les données entrées par l'utilisateur.

- De son côté, `process.stdout.write()` est utilisé pour écrire des données dans le flux de sortie standard, affichant ainsi des messages ou des résultats dans la console. L'utilisation combinée de ces deux fonctions est fréquente dans les programmes en ligne de commande, offrant une interaction fluide entre l'utilisateur et l'application.

/!\ Le module `std` est principalement utilisé pour l'affichage des données en console et trouve rarement une application significative dans les projets, étant limité dans ses fonctionnalités par rapport à d'autres modules plus polyvalents.

// ---- Gestion de l'environnement avec Node.js ---- //

- Le fichier `.env` est utilisé pour stocker des informations sensibles telles que des clés d'API ou des identifiants de base de données. Pour garantir la confidentialité de ces données, il est courant de l'ajouter à la liste des fichiers ignorés par Git via le fichier `.gitignore`.

Cela évite son inclusion accidentelle dans le dépôt Git, assurant ainsi la sécurité des informations confidentielles.

- La bibliothèque Dotenv facilite l'utilisation des variables d'environnement dans votre application Node.js. Pour l'installer, assurez-vous d'être dans le répertoire approprié, puis exécutez la commande suivante : `npm install dotenv --save`.

- Une fois Dotenv installé, vous pouvez l'importer dans votre fichier `index.js` en ajoutant la ligne de code suivante : `require('dotenv').config()`. Cette ligne charge les variables d'environnement spécifiées dans le fichier `.env` à la racine de votre projet, permettant ainsi d'accéder aux configurations sensibles, telles que des clés d'API, de manière sécurisée.

// ---- LECTURE ET ÉCRITURE DE FICHIERS ---- //

En programmation, la bibliothèque `os` est utilisée pour interagir avec le système d'exploitation (environnement), tandis que la bibliothèque `fs` (File System) est dédiée à la manipulation des fichiers.

La méthode `readFileSync()` de `fs` permet de lire le contenu d'un fichier de manière synchrone, en spécifiant le chemin du fichier et l'encodage, par exemple, "utf-8".

La méthode `writeFileSync()` de `fs` écrit des données dans un fichier de manière synchrone en fournissant le chemin du fichier à créer ou à modifier, ainsi que la variable contenant le texte à enregistrer.

Il est important de noter que l'utilisation de ces méthodes synchrone bloque le programme pendant l'opération, ce qui peut être contourné en utilisant les versions asynchrones, telles que `readFile()` et `writeFile()`.

// ---- MODE SYNCHRONE ET ASYNCHRONE EN PROGRAMMATION ---- //

- Le mode ``synchrone` est caractérisé par un code bloquant, où l'exécution attend la fin de chaque instruction avant de passer à la suivante. Dans le contexte de la lecture de fichiers, cela signifie que le programme attend que le fichier soit entièrement lu avant de permettre l'exécution du code suivant. En d'autres termes, tant que l'opération de lecture n'est pas achevée, l'utilisateur ne peut pas accéder au code suivant.

- Le mode `asynchrone` est utilisé pour effectuer des opérations en arrière-plan sans bloquer l'exécution du code principal. Dans le contexte de la lecture de fichiers, cette approche permet au programme de continuer à exécuter d'autres tâches pendant que le fichier est en train d'être lu. Concrètement, une fonction de rappel (callback) est souvent utilisée pour gérer les résultats de l'opération asynchrone, ce qui permet au programme de rester réactif même pendant des opérations potentiellement longues comme la lecture de fichiers.

// ---- EXÉCUTION MONOTÂCHE (SINGLE THREAD) DANS NODE.JS ---- //

Dans le contexte de Node.js, le mode monotâche, ou `single thread`, implique que toutes les opérations sont traitées de manière séquentielle, une après l'autre, dans un unique fil d'exécution.

Concrètement, cela signifie que Node.js utilise un seul chemin d'exécution pour traiter son code, ce qui peut simplifier la gestion des opérations. Toutefois, il est important de noter que bien que les opérations soient exécutées séquentiellement, des mécanismes tels que les `callbacks` (rappels) et les `hooks`(événements) permettent de traiter des opérations non bloquantes, offrant une certaine efficacité dans la gestion des tâches.
