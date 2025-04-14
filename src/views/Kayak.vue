<template>
  <!-- SECTION HERO -->
  <section
    class="w-full h-[60vh] bg-cover bg-center"
    :style="{ backgroundImage: 'url(/kayak/kayak-hero.jpeg)' }"
  >
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Vivez la mer autrement...</h1>
        <h4 class="mb-3 text-shadow text-2xl">à bord d'un kayak !</h4>
        <RouterLink
          :to="{ name: 'Chambre' }"
          class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105"
        >
          En savoir plus
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- SECTION PRÉSENTATION -->
  <section class="py-10 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <h4 class="text-2xl font-bold mb-4">Présentation de l'activité</h4>
      <ul class="list-disc list-inside text-lg mb-4 text-gray-700">
        <li>Horaire : 9h à 16h</li>
        <li>Kayak simple : 2</li>
        <li>Kayak double : 3</li>
      </ul>
      <div class="space-y-3 text-gray-700 text-base">
        <p>
          À l'origine, le kayak est inuit, confectionné avec des membrures ployées, bordées et pontées de peaux, et manœuvré à l'aide d'une pagaie simple ou double.
        </p>
        <p>
          Aujourd'hui, un kayak est réalisé en toile imperméable, matériaux synthétique ou pneumatique et manœuvré avec une pagaie double.
        </p>
        <p>
          À la différence du canoë ou canot, le kayak se pratique à la pagaie double en position assise.
        </p>
        <p>
          Certaines formes modernes comportent toujours un trou appelé hiloire servant à entrer dans le bateau.
        </p>
        <p>
          Le kayak est parfois confondu avec le canoë, un type d'embarcation distinct, la pratique sportive étant désignée par le terme général « canoë-kayak ».
        </p>
        <p>
          La construction et la pratique contemporaines distinguent notamment le kayak de rivière, le kayak de vitesse en eaux calmes et le kayak de mer.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION GALERIE (CAROUSEL INFINI) -->
  <section class="py-10 px-4 bg-white">
    <div class="max-w-7xl mx-auto relative overflow-hidden">
      <!-- Bouton Précédent -->
      <button
        @click="prev"
        :disabled="isAnimating"
        class="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <!-- Bouton Suivant -->
      <button
        @click="next"
        :disabled="isAnimating"
        class="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <!-- Conteneur du Carousel -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)`, transition: disableTransition ? 'none' : '' }"
        @transitionend="handleTransitionEnd"
      >
        <div v-for="(group, index) in extendedSlides" :key="index" class="flex-shrink-0 w-full">
          <div v-for="item in group" :key="item.image" class="w-full">
            <img
              :src="item.image"
              alt="Image de la galerie kayak"
              class="w-full h-[350px] md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION CONSIGNE DE SÉCURITÉ -->
  <section class="py-10 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <h4 class="text-2xl font-bold mb-4">Consigne de sécurité</h4>
      <img
        src="/kayak/gilet-sauvetage.jpg"
        alt="Sécurité"
        title="Gilet de sauvetage"
        class="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  </section>




    <!------------------------- BANDEAU PRE-FOOTER ------------------------------>
 
    <section
  class="w-full h-[30vh] bg-cover bg-[center_90%]  flex items-center justify-center bg-gray-500 bg-blend-multiply"
  :style="{ backgroundImage: 'url(/kayak/image-1.jpg)' }"
>
  <div class="text-center">
    <h1 class="mb-3 text-white text-4xl font-bold">
      Réservez votre sortie en kayak !
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
import { ref, computed, nextTick } from 'vue'
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
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}
</style>
