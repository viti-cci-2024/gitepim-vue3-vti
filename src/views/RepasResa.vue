<template>
    <!------------------------- NEW HERO RESA CHAMBRE ------------------------------>
    <section class="w-full h-[30vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/repas/resa-hero.jpg)' }">
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Réservation de votre repas</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          Veuillez remplir le formulaire ci-dessous pour réserver votre bungalow.
        </h4>
      </div>
    </div>
  </section>


<!------------------------- FORMULAIRE RESA REPAS ------------------------------>
<section class="py-10 px-4 bg-white mt-10">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Réservation de Repas</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Formulaire de réservation pour les repas -->
      <div class="flex-1">
        <ReservationRepas />
      </div>
            <!-- Widget météo affichant les infos pour la ville de Poum -->
            <div class="flex-1">
        <WeatherWidget />
      </div>
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
  import WeatherWidget from '../components/WeatherWidget.vue';
  import ReservationRepas from '../components/ReservationRepas.vue';
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
