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

Céer un fichier.env dans le dossier backend et y renseigner le token de votre choix via DB_TOKEN= 

Puis, se connecter au serveur MySql, Créer une base de données.
Renseigner son nom et son mot de passe dans le fichier config.json du backend. Puis exécuter la commande:

    nodemon server

Pour créer un administrateur, il faudra passer la valeur isAdmin à 1 dans la base de données pour l'utilisateur que l'on souhaite affecter à cette tache. Via MySql, taper la commande suivante:

    UPDATE user SET isAdmin = 1 WHERE id = ?

? => insérer le numéro du salarié concerné

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




Une fois connecté vous pouvez voir les publications des utilisateurs, réagir à celles-ci. Vous pouvez publier de nouvelles informations.
Vous pouvez supprimez vos messages, vos commentaires et votre compte.

L'administrateur peut également supprimer les messages, les commentaires et les comptes.
