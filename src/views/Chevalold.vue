<template>
<!-- Section hero pleine largeur avec background et hauteur 60vh -->
<section
    class="w-full h-[60vh] bg-cover bg-center"
    :style="{ backgroundImage: 'url(/cheval/cheval-hero.jpg)' }"
  >
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Vivez la nature autrement...</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          à dos de cheval !
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

  <!-- Section Présentation -->
  <section class="bg-[#f8f9fa] py-20">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">
        Vivez une aventure équestre inoubliable !
      </h2>
      <div class="max-w-2xl mx-auto">
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <p class="text-base leading-relaxed text-gray-700">
            Partez à la découverte de la faune et de la flore locales lors d'une expérience exceptionnelle à dos de cheval.
            Choisissez votre cheval parmi nos 16 compagnons, chacun avec son propre caractère, et suivez un itinéraire enchanteur
            à travers des paysages verdoyants, jusqu'à un point de vue offrant un panorama à couper le souffle.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Guides -->
  <section class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-4 space-y-12">
      <!-- Guide Emma -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="w-48 flex-shrink-0">
          <img
            src="/cheval/Emma.jpg"
            alt="Emma et Nidguep"
            class="w-full h-[300px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div class="flex-1">
          <h3 class="text-2xl font-bold mb-2">Emma et Nidguep (Matin)</h3>
          <p class="text-lg text-gray-700">
            Passionnée d'équitation et certifiée en randonnée, Emma guide les groupes le matin avec son cheval Nidguepe, un compagnon calme et réactif.
            Avec son expérience, elle assure une randonnée sereine et enrichissante à travers des paysages magnifiques.
          </p>
        </div>
      </div>

      <!-- Guide Lucas -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="w-48 flex-shrink-0">
          <img
            src="/cheval/Lucas.jpg"
            alt="Lucas et Papyrus"
            class="w-full h-[300px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div class="flex-1">
          <h3 class="text-2xl font-bold mb-2">Lucas et Papyrus (Après-midi)</h3>
          <p class="text-lg text-gray-700">
            Lucas, certifié en gestion de randonnées, prend le relais l'après-midi avec son cheval Papyrus, vif et élégant.
            Ensemble, ils offrent une expérience immersive et conviviale, où chaque randonneur profite pleinement de l'aventure.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Conditions de réservation -->
  <section class="bg-[#5852de] bg-opacity-10 py-20">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Conditions de réservation</h2>
      <div class="max-w-2xl mx-auto">
        <ul class="list-disc list-inside space-y-3 text-lg text-gray-800">
          <li>Réservation obligatoire d'une chambre au gîte</li>
          <li>Activité accessible à tous, débutants comme cavaliers confirmés</li>
          <li>En cas de pluie, la randonnée sera reportée pour votre sécurité</li>
        </ul>
      </div>
    </div>
  </section>


    <!------------------------- BANDEAU PRE-FOOTER ------------------------------>
 
    <section
  class="w-full h-[30vh] bg-[center_23%] bg-cover flex items-center justify-center bg-gray-500 bg-blend-multiply"
  :style="{ backgroundImage: 'url(/cheval/herofooter2.png)' }"
>
  <div class="text-center">
    <h1 class="mb-3 text-white text-4xl font-bold">
      Réservez votre sortie équestre !
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

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
