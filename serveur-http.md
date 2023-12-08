// ---- GESTION DES REQUÊTES HTTP AVEC NODE.JS ---- //

- Le module `http` de Node.js est spécifiquement dédié à l'utilisation du protocole HTTP. Son intégration commence par l'importation en tête de fichier, suivi de la création d'un serveur à l'aide de la méthode `http.createServer()`. Cette approche sert de fondation pour la mise en place de fonctionnalités de serveur web dans un projet Node.js, permettant ainsi la gestion des requêtes HTTP.

- La méthode `listen()` est utilisée pour démarrer le serveur en spécifiant le numéro de port, généralement avec des paramètres vides, et en incluant un console log pour signaler la mise en service.

- En parallèle, la méthode `on()` est employée pour écouter un événement spécifique lié à la gestion des requêtes HTTP. Elle prend une fonction de rappel avec deux paramètres, `request` et `response`, permettant de manipuler les données associées à la requête et à la réponse HTTP.

- La `request` est un objet exhaustif comprenant diverses informations, comme les en-têtes et les paramètres. La réponse, souvent appelée `response`, renvoie les données du serveur, comprenant les en-têtes, le statut HTTP, et le corps de la réponse. Ces deux entités, requête et réponse, sont essentielles pour la communication entre le client et le serveur dans une interaction HTTP.

- Le `DNS`, ou Domain Name System, est un système qui traduit les noms de domaine en adresses IP, facilitant ainsi l'identification des serveurs sur Internet. Il permet aux utilisateurs d'accéder aux sites web en utilisant des noms conviviaux plutôt que des adresses IP numériques.

Lien vers les erreurs serveurs qu'on peut avoir : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP

- La méthode `end()` est utilisée pour finaliser une transaction de communication, que ce soit du côté de l'envoi d'une requête, indiquant que toutes les données ont été spécifiées, ou du côté de la gestion d'une réponse, signalant que toutes les données ont été envoyées au client.

- La méthode `writeHead()` est employée pour définir les en-têtes de la réponse HTTP, permettant de spécifier des détails tels que le code de statut et le type de contenu de manière précise.

- La méthode `parse()` convertit une chaîne de caractères représentant des données structurées en un objet dans le contexte de la programmation. Elle est fréquemment utilisée pour traiter des données externes, telles que des fichiers ou des requêtes HTTP, en objets manipulables dans le langage de programmation utilisé.

- Pour un routage efficace, il suffit d'ajouter le nom de la variable associée à l'URL, suivi du mot clé `pathname`. Cette pratique simplifie l'identification et l'association des chemins spécifiques aux différentes routes, améliorant ainsi la gestion des requêtes et la clarté du code.

- `__dirname` en Node.js renvoie le chemin absolu du répertoire du fichier en cours d'exécution.

- La méthode `replace()` en Node.js est utilisée pour remplacer des occurrences spécifiques d'une sous-chaîne dans une chaîne de caractères par une autre sous-chaîne fournie.

- La méthode `join()` en Node.js crée une chaîne en combinant les éléments d'un tableau avec un séparateur spécifié.

- La méthode `entries()` en Node.js est utilisée pour récupérer un objet contenant les index et les valeurs associées d'un tableau.

- La méthode `split()` divise une chaîne de caractères en plusieurs éléments, stockés dans un tableau, en se basant sur un séparateur spécifié (comme la virgule).

- Le `new URLSearchParams()` permet de créer un objet pour manipuler les paramètres de recherche d'une URL de manière programmatique.

- En Node.js, la propriété `.search` est utilisée pour accéder à la partie des paramètres de recherche d'une URL, renvoyant la chaîne de caractères après le point d'interrogation (`?`).
