<template>
  <!-- Section hero pleine largeur avec background et hauteur 60vh -->
  <section class="w-full h-[60vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/bagne/bagne-hero.png)' }">
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">
          Découvrez les secrets du passé
        </h1>
        <h4 class="mb-3 text-shadow text-2xl">
          là où l'histoire ne dort jamais.
        </h4>

      </div>
    </div>
  </section>


<!------------------------- FORMULAIRE RESA BAGNE ------------------------------>
<section class="py-10 px-4 bg-white mt-10">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Réservation de la visite du Bagne</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Formulaire de réservation pour les repas -->
      <div class="flex-1">
        <ReservationBagne />
      </div>
            <!-- Widget météo affichant les infos pour la ville de Poum -->
            <div class="flex-1">
        <WeatherWidget />
      </div>
    </div>
  </div>
</section>



  <!-- BANDEAU PRE-FOOTER avec le slider -->
  <section class="w-full h-[30vh] bg-center bg-cover flex items-center justify-center bg-gray-500 bg-blend-multiply"
    :style="{ backgroundImage: 'url(/bagne/bagne-3.jpg)' }">
    <div class="text-center">
      <h1 class="mb-3 text-white text-4xl font-bold">
        Réservez votre visite !
      </h1>
      <!-- Conteneur du slider : position relative et overflow-hidden -->
      <div class="relative h-16">
        <transition name="slide" mode="out-in">
          <p :key="currentIndex"
            class="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white whitespace-nowrap">
            {{ currentPhrase }}
          </p>
        </transition>
      </div>
      <RouterLink :to="{ name: 'Chambre' }"
        class="mt-4 inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
        Je réserve !
      </RouterLink>
    </div>
  </section>

</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ReservationBagne from '../components/ReservationBagne.vue';
import WeatherWidget from '../components/WeatherWidget.vue';

// Déclaration des phrases du slider
const phrases = [
  "Découvrez une histoire émouvante au cœur du bagne.",
  "Une expérience unique qui restera gravée dans votre mémoire.",
  "Plongez dans les récits poignants des anciens détenus.",
  "Un guide expérimenté pour vous accompagner dans ce voyage dans le passé."
]

// currentIndex et intervalId avec ref
const currentIndex = ref(0)
let intervalId = null

// Calcul de la phrase courante
const currentPhrase = computed(() => phrases[currentIndex.value])

function startSlider() {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % phrases.length
  }, 3300)
}

onMounted(() => {
  startSlider()
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
/* Animation de slide pour l'entrée et la sortie avec Vue 3 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Pour l'entrée : initialement en dehors à droite */
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

/* Puis transition vers le centre */
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* Pour la sortie : à partir du centre */
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* Et sortir vers la gauche */
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>