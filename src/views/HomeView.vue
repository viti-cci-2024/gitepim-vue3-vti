<template>
  <!-- Section hero avec background image, hauteur 70vh -->
 <!-- Section hero pleine largeur avec background et hauteur 60vh -->
 <section
    class="w-full h-[60vh] bg-cover bg-center"
    :style="{ backgroundImage: 'url(/hero-main.jpg)' }"
  >
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Bienvenue au gîte Pim</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          Venez vous ressourcer dans un cadre idyllique.
        </h4>
        <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
        <RouterLink
          :to="{ name: 'Chambre' }"
          class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105"
        >
          Réservez
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* styles uniquement pour cette vue */

</style>
<style>
/* Si la classe text-shadow définie dans style.css ne s'applique pas,
   on peut forcer son application ici en déclarant la règle globalement */
:global(.text-shadow) {
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
}
</style>
