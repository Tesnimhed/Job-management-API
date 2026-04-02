# Job Management API

API REST développée avec Node.js, Express et MongoDB pour la gestion des offres d’emploi.

## Description

Cette API permet aux utilisateurs de s’inscrire, se connecter et gérer leurs offres d’emploi de manière sécurisée.  
Elle implémente un système complet avec authentification et opérations CRUD sur les jobs.

## Fonctionnalités

- Authentification utilisateur (register, login, logout)
- Gestion des utilisateurs
- CRUD des jobs (créer, lire, modifier, supprimer)
- Protection des routes avec JWT
- Validation des données

## Technologies utilisées

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs

## Structure du projet

- controllers : logique métier  
- routes : endpoints de l’API  
- models : schémas de données  
- middleware : authentification et gestion des erreurs
- errors : pour les custom errors
- utils

## Installation
npm install
npm run dev
