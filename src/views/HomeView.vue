<template>
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
          En savoir plus
        </RouterLink>
      </div>
    </div>
    </section>
    <!------------------------- LE CAROUSEL ------------------------------>
    
  <section class="py-10 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-bold">Nos activités</h3>
      </div>

      <!-- Carousel -->
      <div class="relative overflow-hidden">
        <!-- Flèche gauche -->
        <button
          @click="prev"
          class="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Flèche droite -->
        <button
          @click="next"
          class="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Slides -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(group, index) in slideGroups"
            :key="index"
            class="flex-shrink-0 w-full flex gap-6"
          >
            <div
              v-for="item in group"
              :key="item.title"
              class="w-full sm:w-1/2 lg:w-1/3 bg-white rounded shadow hover:shadow-lg transition"
            >
              <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-t" />
              <div class="p-4">
                <h4 class="font-bold text-lg mb-2">{{ item.title }}</h4>
                <p class="text-sm mb-4">{{ item.text }}</p>
                <RouterLink
                  :to="item.link"
                  class="inline-block text-sm font-semibold py-2 px-4 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105"
                >
                  Réservez
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* styles uniquement pour cette vue */

</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const items = [
  {
    title: 'Visite du bagne',
    text: "Replongez avec notre guide dans l'histoire du pays sur l'île de Pam",
    image: '/carou-bagne.jpg',
    link: { name: 'Bagne' },
  },
  {
    title: 'Randonnée équestre',
    text: "De belles balades dans la nature avec notre guide. À ne pas manquer !",
    image: '/carou-cheval.jpg',
    link: { name: 'Cheval' },
  },
  {
    title: 'Notre garderie',
    text: "Confiez-nous vos enfants pendant vos activités sportives.",
    image: '/carou-gard.jpg',
    link: { name: 'Garderie' },
  },
  {
    title: 'Club nautique',
    text: "Balades détente ou sportive en kayak sur le lagon.",
    image: '/carou-kayak.jpg',
    link: { name: 'Kayak' },
  },
  {
    title: 'Restaurant Pim',
    text: "Pour les gourmets et les gourmands, notre carte saura vous ravir !",
    image: '/carou-repas.jpg',
    link: { name: 'Repas' },
  },
  {
    title: 'Nos bungalows',
    text: "Jardin ou vue mer, choisissez votre bungalow idéal.",
    image: '/carou-bung.jpg',
    link: { name: 'Chambre' },
  },
]

const windowWidth = ref(window.innerWidth)
const updateWidth = () => (windowWidth.value = window.innerWidth)

onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))

const itemsPerSlide = computed(() => {
  if (windowWidth.value < 768) return 1
  if (windowWidth.value < 1024) return 2
  return 3
})

const slideGroups = computed(() => {
  const result = []
  for (let i = 0; i < items.length; i += itemsPerSlide.value) {
    result.push(items.slice(i, i + itemsPerSlide.value))
  }
  return result
})

const currentSlide = ref(0)
const next = () => {
  currentSlide.value = (currentSlide.value + 1) % slideGroups.value.length
}
const prev = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slideGroups.value.length) % slideGroups.value.length
}
</script>