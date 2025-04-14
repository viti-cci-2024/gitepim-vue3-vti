<template>
  <!-- SECTION HERO -->
  <section class="w-full h-[60vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/kayak/kayak-hero.jpeg)' }">
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Vivez la mer autrement...</h1>
        <h4 class="mb-3 text-shadow text-2xl">à bord d'un kayak !</h4>

      </div>
    </div>
  </section>


<!------------------------- FORMULAIRE RESA KAYAK ------------------------------>
<section class="py-10 px-4 bg-white mt-10">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Réservation de votre sortie en Kayak</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Formulaire de réservation pour les repas -->
      <div class="flex-1">
        <ReservationKayak />
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
    class="w-full h-[30vh] bg-cover bg-[center_90%]  flex items-center justify-center bg-gray-500 bg-blend-multiply"
    :style="{ backgroundImage: 'url(/kayak/image-1.jpg)' }">
    <div class="text-center">
      <h1 class="mb-3 text-white text-4xl font-bold">
        Réservez votre sortie en kayak !
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
import { ref, computed, nextTick } from 'vue'
import WeatherWidget from '../components/WeatherWidget.vue';
import ReservationKayak from '../components/ReservationKayak.vue';
import { RouterLink } from 'vue-router'

// Tableau d'images de la galerie (chacun encapsulé dans un objet pour être compatible avec la logique du carousel)
const galleryImages = [
  '/kayak/image-1.jpg',
  '/kayak/image-2.jpeg',
  '/kayak/image-3.jpg',
  '/kayak/image-4.jpg',
  '/kayak/image-5.jpg',
  '/kayak/image-6.jpg',
  '/kayak/image-7.webp',
  '/kayak/image-8.jpg',
  '/kayak/image-9.jpg'
]

// Pour simplifier, chaque item devient un objet { image }
const galleryItems = galleryImages.map((img) => ({ image: img }))

// Pour ce carousel, on souhaite afficher 1 image par slide.
const itemsPerSlide = 1

// Création des groupes de slides
const slideGroups = computed(() => {
  const result = []
  for (let i = 0; i < galleryItems.length; i += itemsPerSlide) {
    result.push(galleryItems.slice(i, i + itemsPerSlide))
  }
  return result
})

// Création du tableau étendu pour simuler l'infini (clone du dernier groupe au début et du premier à la fin)
const extendedSlides = computed(() => {
  const groups = slideGroups.value
  if (groups.length > 0) {
    const firstClone = groups[0]
    const lastClone = groups[groups.length - 1]
    return [lastClone, ...groups, firstClone]
  }
  return []
})

// Le carousel démarre sur le premier groupe réel (index 1)
const currentSlide = ref(1)
const disableTransition = ref(false)
const isAnimating = ref(false)

// Passage à l'image suivante
const next = () => {
  if (isAnimating.value || extendedSlides.value.length === 0) return
  isAnimating.value = true
  currentSlide.value++
}

// Passage à l'image précédente
const prev = () => {
  if (isAnimating.value || extendedSlides.value.length === 0) return
  isAnimating.value = true
  currentSlide.value--
}

// Gestion de la fin de transition pour l'effet infini
const handleTransitionEnd = () => {
  if (currentSlide.value === extendedSlides.value.length - 1) {
    disableTransition.value = true
    currentSlide.value = 1
  } else if (currentSlide.value === 0) {
    disableTransition.value = true
    currentSlide.value = extendedSlides.value.length - 2
  }
  nextTick(() => {
    setTimeout(() => {
      disableTransition.value = false
      isAnimating.value = false
    }, 50)
  })
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
