<template>
  <!-- Section hero pleine largeur avec background et hauteur 60vh -->
  <section class="w-full h-[60vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/hero-main.jpg)' }">
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Bienvenue au gîte Pim</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          Venez vous ressourcer dans un cadre idyllique.
        </h4>
        <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
        <RouterLink :to="{ name: 'Chambre' }"
          class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
          En savoir plus
        </RouterLink>
      </div>
    </div>
  </section>

  <!------------------------- LES 2 CARDS ------------------------------>




  <section class="py-10 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Titre -->
      <h3 class="text-2xl font-bold">Nos Bungalows</h3>
      <br>
      
      <!-- Conteneur principal responsive -->
      <div class="flex flex-col md:flex-row justify-around gap-6">
        
        <!-- Bungalow Jardin -->
        <div
          class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-xl shadow-lg"
          style="background-image: url('/chambre/Bungalow-Jardin-01.png')"
        >
          <!-- Contenu texte au-dessus de l'image -->
          <div class="absolute inset-0 flex flex-col justify-start p-4 md:p-6">
            <!-- Titre et description en blanc avec ombre portée -->
            <h2 class="text-2xl md:text-4xl font-bold text-white text-shadow mb-2">
              Bungalow Jardin
            </h2>
            <p class="text-white text-xl md:text-xl text-shadow mb-4">
              Spacieux et confortables dans un cadre verdoyant !
            </p>
            
            <!-- Boutons -->
            <RouterLink
              :to="{ name: 'Chambre' }"
              class="self-start inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105"
            >
              En savoir plus
            </RouterLink>
          </div>
        </div>
  
        <!-- Bungalow Vue Mer -->
        <div
          class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-xl shadow-lg"
          style="background-image: url('/chambre/Bungalow-Mer-01.png')"
        >
          <!-- Contenu texte au-dessus de l'image -->
          <div class="absolute inset-0 flex flex-col justify-start p-4 md:p-6">
            <!-- Titre et description en blanc avec ombre portée -->
            <h2 class="text-2xl md:text-4xl font-bold text-white text-shadow mb-2">
              Bungalow Vue Mer
            </h2>
            <p class="text-white text-xl md:text-xl text-shadow mb-4">
              Laissez-vous bercer par le son des vagues sur la terrasse
            </p>
            
            <!-- Bouton -->
            <RouterLink
              :to="{ name: 'Chambre' }"
              class="self-start inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105"
            >
              En savoir plus
            </RouterLink>
          </div>
        </div>
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
        <button @click="prev"
          class="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Flèche droite -->
        <button @click="next"
          class="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Slides -->
        <div class="flex transition-transform duration-500 ease-in-out"
  :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
  <div v-for="(group, index) in slideGroups" :key="index" class="flex-shrink-0 w-full flex gap-6">
    <div v-for="item in group" :key="item.title"
      class="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 transition">
      <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-t" />
      <div class="p-4">
        <h4 class="font-bold text-lg mb-2">{{ item.title }}</h4>
        <p class="text-sm mb-4">{{ item.text }}</p>
        <RouterLink :to="item.link"
          class="inline-block text-sm font-semibold py-2 px-4 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
          Réservez
        </RouterLink>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </section>


  <!------------------------- SEPARATION CTA ------------------------------>
 
  <section class="w-full h-[25vh] bg-cover bg-start mb-8" :style="{ backgroundImage: 'url(/sep-accueil.png)' }"></section>


<!------------------------- TEMOIGNAGES ------------------------------>

<section class="py-10 px-4 bg-white">
  <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">Nos clients ont adoré</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white rounded-lg shadow p-6 text-center transition hover:shadow-lg"
        >
          <!-- Avatar depuis /public/ -->
          <img
            :src="testimonial.avatar"
            :alt="`Avatar de ${testimonial.name}`"
            class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />

          <h5 class="text-xl font-semibold">{{ testimonial.name }}</h5>
          <p class="text-gray-500 mb-2">{{ testimonial.location }}</p>
          <p class="text-gray-700 mb-4">"{{ testimonial.text }}"</p>

          <!-- Étoiles avec Unicode -->
          <div class="flex justify-center text-yellow-500 text-xl">
            <template v-for="n in 5" :key="n">
              <span>
                {{ n <= Math.floor(testimonial.rating) ? '★' : '☆' }}
              </span>
            </template>
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
    text: "Confiez-nous avec sérénité vos enfants pendant vos activités sportives ou de repos.",
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

const testimonials = [
  {
    name: 'Billy Gaytes',
    location: 'USA, Chicago',
    text: "Notre séjour était fantastique ! Wonderful ! I'll be back, c'est certain !",
    avatar: '/avatar1.png',
    rating: 4.5,
  },
  {
    name: 'Elsa Gorithme',
    location: 'France, Nice',
    text: 'Le personnel du gîte était au top et la qualité de la literie est exceptionnelle !',
    avatar: '/avatar2.png',
    rating: 5,
  },
  {
    name: 'Olivia Jax',
    location: 'Vanuatu, Port-Vila',
    text: 'Incroyable site et le personnel était merveilleux. Je reviendrai !',
    avatar: '/avatar3.png',
    rating: 4,
  },
]
</script>