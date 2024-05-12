
# Documentation

Bienvenue dans la documentation de l'API Rest **Yet Another Aeon's End Randomizer**. Ce document vous guidera à travers les différentes fonctionnalités et étapes nécessaires pour utiliser et comprendre mon application.

**Yet Another Aeon's End Randomizer** est une petite API que j'ai réalisé sur mon temps libre pour deux raisons :
- Je voulais m 'exercer au dévelopement d'une API Rest avec un besoin de base assez simple.
- Je joue de temps en temps à la série de jeux Aeon's End et je voulais une application pour me faciliter la vie.

Pour être honnête, j'ai trouvé pas mal d'applications répondant au besoin, mais je voulais tout de même tenter de développer ce projet par moi-même.

## Installation
Pour installer le projet en local, suivez les étapes ci-dessous :
1. Clonez le dépôt.
2. Installez les dépendances avec `npm install`.
3. Lancez l'application avec `npm start`.

## Fonctionnalités
- **Récupération d'une liste d'ordre du tour** en envoyant en paramètre le nombre de joueurs, la version de jeu jouée (une des versions propose des jokers, l'autre non) et quelques autres points de règles
- **Génération d'une réserve** en prenant en paramètre trois listes de cartes (gemmes, reliques, sorts)

## Possibilités d'évolutions
- Ajout d'un endpoint fournissant un deck de némesis (a étudier)

## Documentation technique

Le projet fonctionne avec un fichier .env totalement inutile puisqu'en l'absence de base de données, il ne sert qu'à définir un port pour le serveur. 

L'architecture est probablement overkill pour un projet aussi simple mais il s'agit d'un moyen pour moi de m'exercer aux bonnes pratiques, y compris pour un projet plus ambitieux.

###  Description de l'architecture
```
node_modules/ : Dossier contenant les dépendances Node.js.
src/ : Dossier principal pour le code source de l'application.
    config/ : Contient les fichiers de configuration (par exemple, les configurations de base de données).
        config.js : Configuration de l'application (e.g., paramètres de base de données, configurations d'environnement).
    controllers/ : Contient les contrôleurs qui gèrent les requêtes et les réponses.
        userController.js : Contrôleur pour les opérations liées aux utilisateurs.
    middlewares/ : Contient les middlewares Express (e.g., authentification, validation).
        authMiddleware.js : Middleware d'authentification.
    models/ : Contient les modèles de données (e.g., Mongoose pour MongoDB, Sequelize pour SQL).
    routes/ : Contient les définitions des routes de l'application.
    services/ : Contient la logique métier et les services de l'application.
        userService.js : Service pour les opérations liées aux utilisateurs.
    utils/ : Contient les utilitaires et les fonctions helper.
        helper.js : Fonctions utilitaires.
    app.js : Point d'entrée principal de l'application où Express est configuré.
    server.js : Script pour démarrer le serveur.
test/ : Dossier contenant les tests.
    userController.test.js : Tests pour le contrôleur des utilisateurs.
.env : Fichier pour les variables d'environnement.
.gitignore : Fichier pour ignorer les fichiers non suivis par Git.
package.json : Fichier de configuration de Node.js contenant les métadonnées du projet et les dépendances.
README.md : Documentation du projet.
```