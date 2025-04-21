# 🏡 Gîte Pim – Site Vitrine & Réservation Dynamique (Vue 3 + Vite + Tailwind)

Ce projet est un site vitrine **et** une application de réservation pour le **Gîte Pim** (île de Pam, près de Poum), entièrement refait avec **Vue 3**, **Vite**, **Tailwind CSS** et **Vue Router**. Il propose une expérience **SPA** (Single‑Page Application) moderne, responsive et accessible pour présenter les prestations du gîte et gérer les réservations en temps réel via le **localStorage** (sans base de données).

## 🚀 Aperçu des fonctionnalités

- **Pages et navigation**  
  - Page d’accueil avec présentation du gîte.  
  - 6 pages “landing” pour chaque prestation :  
    - Chambres  
    - Repas  
    - Randonnée à cheval  
    - Sortie en kayak  
    - Garderie  
    - Visite du bagne  
  - Navigation fluide via **Vue Router** (mode history).

- **Réservation dynamique**  
  - 6 pages de réservation dédiées (une par prestation) sans rechargement :  
    - `ChambreResa.vue`, `RepasResa.vue`, `ChevalResa.vue`, `KayakResa.vue`, `GarderieResa.vue`, `BagneResa.vue`.  
  - Génération d’un **numéro de réservation unique** préfixé :  
    - Chambre : CHAAMM000x (ex : CH24120001)
    - Repas : REAAMM000x (ex : RE24120001)
    - Randonnée : RAAAMM000x (ex : RA24120001)
    - Kayak : KAAAMM000x (ex : KA24120001)
    - Garderie : GAAAMM000x (ex : GA24120001)
    - Bagne : BAAAMM000x (ex : BA24120001)  
  - Contraintes de capacité par activité (configurées dans `src/stores/*ReservationStore.js`) :  
  ```
  • Chambres : 5 bungalows “mer” (2 pers.), 10 bungalows “jardin” (4 pers.)  
  • Repas : max. 30 couverts par créneau  
  • Chevaux : groupes de max. 8 (18 chevaux + 2 guide)  
  • Kayaks : groupes de max. 8 (3 doubles, 2 simples)  
  • Garderie : max. 15 enfants  
  • Bagne : max. 10 visiteurs / session (90 min)  
  ```
  Toutes ces règles sont codées dans les stores Pinia‑like (`src/stores`).

**Intégration météo**  
  - Affichage des prévisions météo pour les dates sélectionnées via une API tierce (à configurer dans `src/components/WeatherWidget.vue` ou équivalent).
  ## 🌤️ Composant `WeatherWidget`
  Le composant `WeatherWidget` affiche la météo courante et les prévisions sur 5 jours pour la ville de Poum, en utilisant l’API OpenWeatherMap. Il se trouve dans `src/components/WeatherWidget.vue` et s’intègre facilement dans n’importe quelle page du projet.
### Caractéristiques
- **Chargement asynchrone**  
  Affiche un message « Chargement de la météo… » pendant la récupération des données.
- **Météo du jour**  
  - Nom de la ville et date actuelle (format `fr-FR`, affichage du jour de la semaine).  
  - Température en °C, description textuelle et emoji Unicode correspondant.  
- **Prévisions 5 jours**  
  - Ignore la journée en cours et récupère la première occurrence de chaque jour suivant.  
  - Affiche la date courte (jour court + jour du mois), un emoji et la température moyenne arrondie.
- **Mapping icônes → emoji**  
  Table de correspondance (`weatherMapping`) pour convertir les codes d’icônes OpenWeather (`01d`, `10n`, etc.) en emojis (“☀️”, “🌧”, …).  
- **Responsive & stylé**  
  - Encadré `div.weather-widget` avec padding, bordure, coins arrondis et ombre (Tailwind CSS).  
  - Grille adaptable (`grid-cols-3` sur mobile, `grid-cols-5` sur desktop).


# **Mode Kiosk**  
  - Interface simplifiée pour bornes de réservation accessible à `/kiosk` (layout dédié dans `src/kiosk`).

# **Responsive & Accessibilité**  
  - Layout optimisé pour desktop, mobile et bornes (touch UI).  
  - Code sémantique HTML5, Tailwind CSS utilitaire.

# 🛠️ Stack Technique

| Outil                      | Rôle                                  |
|----------------------------|---------------------------------------|
| Vue 3                      | Framework JavaScript (Composition API)|
| Vite                       | Bundler ultra‑rapide                  |
| Tailwind CSS               | Framework CSS utilitaire              |
| Vue Router                 | Routage SPA (mode history)            |
| JavaScript (ESM)           | Langage principal                     |
| HTML5 / CSS3 / Tailwind    | Structure & style                     |
| Stores personnalisés (JS)  | Gestion d’état (localStorage simulé)  |

## 📁 Structure du projet

```bash
gitepim-vue3-vti/
├── public/                 # Fichiers statiques (favicon, index.html)
├── src/
│   ├── assets/             # Images & styles globaux
│   ├── components/         # Composants réutilisables (WeatherWidget, etc.)
│   ├── views/              # Pages principales & réservation
│   ├── router/             # Configuration Vue Router (index.js)
│   ├── stores/             # Stores de réservation (localStorage)
│   ├── kiosk/              # Layout & vues pour borne (/kiosk)
│   ├── App.vue             # Composant racine
│   ├── main.js             # Point d’entrée  
│   └── style.css           # Styles globaux complémentaires
├── netlify.toml            # Redirect pour SPA (mode history)
├── package.json            # Dépendances & scripts npm
├── vite.config.js          # Configuration Vite
└── tailwind.config.js      # Configuration Tailwind CSS
```

## ⚙️ Installation & Démarrage

### Prérequis

- Node.js ≥ 16.x  
- npm ≥ 8.x

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/viti-cci-2024/gitepim-vue3-vti.git
cd gitepim-vue3-vti

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

> L’application sera accessible sur `http://localhost:5173`

## 🌐 Déploiement sur Netlify

1. Dans Netlify, **Add new site → Import an existing project**  
2. Choisir le dépôt GitHub  
3. Configurer :  
   - **Build command** : `npm run build`  
   - **Publish directory** : `dist`  

> Créer un fichier `netlify.toml` à la racine pour redirections SPA :  
> ```toml
> [[redirects]]
> from = "/*"
> to   = "/index.html"
> status = 200
> ```

## ✅ Bonnes Pratiques

- Architecture modulaire (`views` / `components` / `stores`)  
- Utilisation de `<script setup>` et SFC Vue 3  
- Convention de nommage cohérente et claire  
- Tailwind CSS optimisé (PurgeCSS, JIT)  
- SEO & accessibilité (méta tags, aria‑labels)  
- Gestion des données en local (simulé – préparation à une API future)

## ✍️ Auteur

**VITI Phil** – Alternant Dev Web 4 – CCI 2024‑2025

## 📄 Licence

Distribué sous licence **MIT**.
