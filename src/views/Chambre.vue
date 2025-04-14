<template>
  <!-- Section hero pleine largeur avec background et hauteur 60vh -->
 <section
    class="w-full h-[60vh] bg-cover bg-center"
    :style="{ backgroundImage: 'url(/chambre/hero-chambre.jpg)' }"
  >
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Venez vivre une expérience inoubliable</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          au Gîte Pim
        </h4>
        <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
        <RouterLink
          :to="{ name: 'Chambre' }"
          class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105"
        >
          En savoir plus
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
