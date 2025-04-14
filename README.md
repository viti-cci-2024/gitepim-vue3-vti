# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).



Reprendre le projet :

cd ma-mini-app-vue 
npm install 
npm run dev

📄 Installer Vue Router 
npm install vue-router 

🔧 Installer Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p













1, Pousser projet sur GitHub 
git init 

git add . 

git commit -m "Premier commit" 

git remote add origin https://github.com/ton-compte/ton-repo.git 

git push -u origin main 
 
2. Sur Netlify : 

Clique sur "Add new site" > "Import an existing project" 

Connecte ton compte GitHub 

Sélectionne ton dépôt 

 
3. Configuration à saisir : 

Champ 			Valeur 
Build Command 		npm run build 
Publish Directory 		dist 
Base directory 			(laisse vide) 

 

---> Clique sur "Deploy Site" 🎉 

Netlify va : 

Installer tes dépendances 

Lancer npm run build 

Héberger le contenu de dist/ 

Générer une URL publique 

 

 

 

ATTENTION : 
🔥 Astuce pour les routes Vue Router 

Si tu utilises le mode createWebHistory() dans Vue Router, ajoute un fichier spécial netlify.toml à la racine de ton projet : 
 

Fichier netlify.toml 
 
# netlify.toml  
[[redirects]]  
from = "/*"  
to = "/index.html"  
status = 200 
 

Cela évite les erreurs 404 quand tu recharges une page comme /about. 

 

--------------------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- 
