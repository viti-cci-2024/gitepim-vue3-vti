<template>
  <!-- Section hero pleine largeur avec background et hauteur 60vh -->
  <section class="w-full h-[60vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/repas/resa-hero.jpg)' }">
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Réservation</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          de votre déjeuner ou de votre dîner.
        </h4>
      </div>
    </div>
  </section>



  


    <!------------------------- BANDEAU PRE-FOOTER ------------------------------>
 
    <section
  class="w-full h-[30vh] bg-bottom bg-cover flex items-center justify-center bg-gray-500 bg-blend-multiply"
  :style="{ backgroundImage: 'url(/repas/dinner.jpg)' }"
>
  <div class="text-center">
    <h1 class="mb-3 text-white text-4xl font-bold">
      Réservez votre table !
    </h1>
    <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
    <RouterLink
      :to="{ name: 'Chambre' }"
      class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105"
    >
      Je réserve !
    </RouterLink>
  </div>
</section>


</template>

  <!------------------------- SCRIPTS ------------------------------>
  <script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
  import { RouterLink } from 'vue-router'

  const testimonials = [
  { name: 'Billy Gaytes', location: 'USA, Chicago', text: "Une très bonne sélection de grands vins pour accompagner une viande savoureuse !", avatar: '/avatar1.png', rating: 4.5 },
  { name: 'Elsa Gorithme', location: 'France, Nice', text: 'Le personnel était au top et la qualité des produits de la mer est exceptionnelle !', avatar: '/avatar2.png', rating: 5 },
  { name: 'Olivia Jax', location: 'Vanuatu, Port-Vila', text: 'Incroyable site et le restaurant était merveilleux. Quels plats délicieux !', avatar: '/avatar3.png', rating: 4 },
]
</script>



  <!------------------------- STYLES ------------------------------>

<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
