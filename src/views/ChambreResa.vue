<template>
  <!------------------------- NEW HERO RESA CHAMBRE ------------------------------>
  <section class="w-full h-[30vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/chambre/hero-chambre.jpg)' }">
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Réservation de votre bungalow</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          Veuillez remplir le formulaire ci-dessous pour réserver votre bungalow.
        </h4>
      </div>
    </div>
  </section>

  <!------------------------- FORMULAIRE RESA CHAMBRE ------------------------------>

  <section class="py-10 px-4 bg-white mt-10">
    <div class="max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Réservation de Chambre</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Formulaire de réservation pour les chambres -->
      <div class="flex-1">
        <ReservationForm reservationType="Chambre" />
      </div>
      <!-- Widget météo affichant les infos pour la ville de Poum -->
      <div class="flex-1">
        <WeatherWidget />
      </div>
    </div>
  </div>
  </section>

  <!------------------------- BANDEAU PRE-FOOTER ------------------------------>

  <section class="w-full h-[30vh] bg-center bg-cover flex items-center justify-center"
    :style="{ backgroundImage: 'url(/chambre/Footer-01.jpg)' }">
    <div class="text-center">
      <h1 class="mb-3 text-white text-4xl font-bold">
        N'attendez plus pour réserver
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
import ReservationForm from '../components/ReservationForm.vue';
import WeatherWidget from '../components/WeatherWidget.vue';
</script>


<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
