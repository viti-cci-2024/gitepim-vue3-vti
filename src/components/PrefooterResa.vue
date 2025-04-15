<template>
    <!-- BANDEAU PRE-FOOTER avec le slider -->
  <section class="w-full h-[40vh] md:h-[30vh] bg-top bg-cover flex items-center justify-center bg-gray-500 bg-blend-multiply"
    :style="{ backgroundImage: 'url(/bandoprestas.webp)' }">
    <div class="text-center">
      <h1 class="mb-3 text-white text-4xl font-bold">
        Découvrez nos activités
      </h1>
      <!-- Conteneur du slider : position relative et overflow-hidden -->
      <div class="relative h-16">
        <transition name="slide" mode="out-in">
          <p :key="currentIndex"
            class="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white whitespace-normal md:whitespace-nowrap">
            {{ currentPhrase }}
          </p>
        </transition>
      </div>
      <RouterLink :to="{ name: 'Home' }"
        class="mt-4 inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
        Retour accueil
      </RouterLink>
    </div>
  </section>

</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'


///////////// LE SLIDER /////////////////
// Déclaration des phrases du slider
const phrases = [
  "Seul ou avec des amis, profitez d'une belle balade en Kayak",
  "Visitez le bagne, une expérience unique",
  "Découvrez la région à cheval et ses paysages inoubliables",
  "Notre restaurant vous propose de délicieux plats locaux",
  "La garderie pour vos enfants est ouverte tous les jours"
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