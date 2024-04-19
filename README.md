# portfolio_backend

## Description

Ce projet est le backend de mon portfolio personnel.

Voici le lien vers le repo git du frontend : https://github.com/Suzy-Lou/portfolio_frontend


## Installation

Pour installer ce projet, suivez ces étapes :

1. Cloner le dépôt : `git clone https://github.com/Suzy-Lou/portfolio_backend.git`
2. Installer les dépendances : `pnpm install`
3. Lancer le serveur de développement : `pnpm run dev`

## Utilisation

créer une base de donnée mongodb nommée Portfolio et y ajouter un premier dossier "projects", c'est ici que les projets seront ajoutés

récupérer le lien de la base de données et le mettre dans le .env 
DB_URL= récupérer l'URL de votre base mongoDB avec le lien vers le projet (exemple : DB_URL=mongodb://localhost:27017/Portfolio)


ajouter un utilisateur dans la base de donnée et utiliser ces informations pour vous connecter à la partie admin du frontend. 
Pour cela, vous pouvez exécuter la premiere requete de testRest.http

###

modifier la requete avec le numéro du port que vous utilisez
POST http://localhost:3000/nouvelUtilisateur
Content-Type: application/json

{
    "nom":"utilisateur",
    "email": "user@example.com",
    "password": "password"
}


###

modifier la requete avec le numéro du port que vous utilisez

POST http://localhost:3000/login
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password"
}



lors de la connexion (accessible via l'icone utilisateur du frontend) vous aurez accès à une partie administrative permettant d'ajouter des projets ainsi que de les modifier ou les supprimer de la base de données



## env

pour les variables env nécessaire : 

PORT = 3000
DB_URL= récupérer l'URL de votre base mongoDB avec le lien vers le projet (exemple : DB_URL=mongodb://localhost:27017/Portfolio)
ACCESS_TOKEN_SECRET=(composé de 12 chiffres et lettres majuscules)
REFRESH_TOKEN_SECRET=(composé de 12 chiffres et lettres majuscules)

