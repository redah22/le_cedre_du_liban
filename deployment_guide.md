# Guide de Mise en Ligne du Site (Redéploiement)

Votre site est prêt techniquement (le "Build" a fonctionné). Voici les 3 étapes pour remplacer l'ancien site par le nouveau.

## 1. Hébergement des fichiers (Gratuit)
Comme c'est un site React (moderne), il ne s'héberge pas exactement comme un vieux site. Le standard actuel est **Vercel**. C'est gratuit, très rapide, et sécurisé (HTTPS automatique).

**Ce que vous devez faire :**
1.  Allez sur [vercel.com](https://vercel.com) et créez un compte (avec votre email ou GitHub).
2.  Installez "Vercel CLI" sur votre Mac en tapant dans votre terminal (ou je peux le faire) :
    `npm i -g vercel`
3.  Une fois installé, tapez juste :
    `vercel`
4.  Répondez "Yes" à tout. Il va envoyer votre site en ligne en 30 secondes.
    => Vous aurez un lien temporaire (ex: `cedre-du-liban-redah.vercel.app`).

## 2. Connecter le Nom de Domaine (lecedreduliban.fr)
Une fois que le site est sur Vercel :
1.  Allez dans le tableau de bord Vercel > **Settings** > **Domains**.
2.  Entrez votre domaine : `www.lecedreduliban.fr`.
3.  Vercel va vous donner des instructions (des "DNS Records").

## 3. La Bascule (Chez votre fournisseur de domaine)
C'est l'étape qui dit "Internet, maintenant le site est là-bas".
1.  Connectez-vous là où vous payez votre domaine (OVH, Ionos, GoDaddy...).
2.  Cherchez la zone **DNS** ou "Gestion des Domaines".
3.  Remplacez les lignes existantes (qui pointent vers Jimdo) par celles données par Vercel (souvent un "A Record" ou "CNAME" ou les "Nameservers").
4.  Attendez 1h à 24h (délai de propagation mondial).

✅ **Résultat** :
- Votre domaine reste le même.
- Google voit le même domaine, les mêmes titres (grâce à notre travail SEO), mais un code beaucoup plus propre et rapide.
- L'ancien site Jimdo n'est plus visible (mais vous ne perdez pas les données si vous gardez le compte Jimdo actif le temps d'être sûr).

---
> **Besoin d'aide ?**
> Je peux lancer la commande `vercel` pour vous si vous voulez mettre une version test en ligne tout de suite (il faudra juste vous loguer dans le terminal).

## 🆘 Problème d'accès ? (Cas du "Random Guy")

J'ai analysé votre domaine, et il est géré par **Jimdo** (`ns13.jimdo.com`).
Cela signifie que le nom de domaine a été acheté **avec** le site.

**Le problème** : On n'a pas besoin du *code* de l'ancien site, mais on a ABSOLUMENT besoin de l'accès au compte **Jimdo** pour dire "Stop Jimdo, Go Vercel".

**La Solution :**
1.  **Suivre l'argent** : Le patron paie sûrement un abonnement annuel (env. 100-200€). Sur quelle carte bancaire ? Quelle adresse email reçoit la facture ?
2.  **Récupération** : Allez sur la page de connexion Jimdo et essayez "Mot de passe oublié" avec toutes les adresses email du patron.
3.  **Support Jimdo** : Si l'email était celui du "random guy", le patron doit contacter le support Jimdo avec une **Preuve de Paiement** (relevé bancaire). En tant que payeur, il est légalement le propriétaire.
4.  **Dernier recours** : Si impossible de récupérer le compte, il faudra acheter un nouveau nom de domaine (ex: `le-cedre-du-liban-beziers.fr`) et rediriger les clients via Google Maps, mais on perd un peu de référencement au début.
