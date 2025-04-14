<template>
  <!-- Section hero pleine largeur avec background et hauteur 60vh -->
  <section class="w-full h-[60vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/garderie/garderie-hero.jpg)' }">
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Besoin une excursion entre entre amoureux ou d’un moment de
          calme ?</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          Notre équipe sera heureuse de prendre en charge vos petits bouts !
        </h4>

      </div>
    </div>
  </section>


<!------------------------- FORMULAIRE RESA GARDERIE ------------------------------>
<section class="py-10 px-4 bg-white mt-10">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Réservation à la Garderie</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Formulaire de réservation pour les repas -->
      <div class="flex-1">
        <ReservationGarderie />
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
    class="w-full h-[30vh] bg-cover bg-[center_90%]  flex items-center justify-center bg-gray-400 bg-blend-multiply mt-10"
    :style="{ backgroundImage: 'url(/garderie/kidz-webp.webp)' }">
    <div class="text-center">
      <h1 class="mb-3 text-white text-4xl font-bold">
        Confiez-nous vos enfants !
      </h1>
      <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
      <RouterLink :to="{ name: 'Chambre' }"
        class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
        Je réserve !
      </RouterLink>
    </div>
  </section>






</template>
<script setup>
import { RouterLink } from 'vue-router'
import WeatherWidget from '../components/WeatherWidget.vue';
import ReservationGarderie from '../components/ReservationGarderie.vue';
</script>

<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
