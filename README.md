## Projet 7 - Groupomania

Formation développeur web d'Openclassrooms.
Créer un réseau social d'entreprise.

Outils utilisés pour ce projet:

- VueJs
- NodeJs + express + sequelize
- Mysql


## Backend

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

Puis, se connecter au serveur MySql de votre choix.
Créer une base de données. Renseigner son nom et son mot de passe dans le fichier config.json. Puis exécuter la commande:

    nodemon server


 ## Frontend

Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    npm start

si le navigateur ne s'ouvre pas automatiquement allez à :

- http://localhost:8080/


## Utilisation

Pour s'inscrire sur le social network de Groupomania, il vous faut renseigner :

- Un nom et un prénom
- Une adresse mail valide
- Un mot de passe (Minimum 8 caractères dont 1 Majuscule, 1 minuscule et un chiffre)

Votre compte peut être supprimé par vous-même ainsi que par l'administrateur.

Pour créer un administrateur, il faudra passer la valeur isAdmin à 1 dans la base de données pour l'utilisateur que l'on souhaite affecter à cette tache.

Une fois connecté vous pouvez voir les publications des utilisateurs, réagir à celles-ci. Vous pouvez publier de nouvelles informations.
Vous pouvez supprimez vos messages, vos commentaires et votre compte.

L'administrateur peut également supprimer les messages, les commentaires et les comptes.
