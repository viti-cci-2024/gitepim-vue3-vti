<template>
  <!-- Section hero pleine largeur avec background et hauteur 60vh -->
  <section class="w-full h-[60vh] bg-cover bg-center" :style="{ backgroundImage: 'url(/chambre/hero-chambre.jpg)' }">
    <!-- Conteneur pour centrer verticalement le contenu avec padding -->
    <div class="max-w-7xl mx-auto flex flex-col justify-center items-start h-full p-5">
      <!-- Contenu texte en blanc aligné à gauche -->
      <div class="text-white text-left">
        <h1 class="mb-3 text-shadow text-4xl font-bold">Venez vivre une expérience inoubliable</h1>
        <h4 class="mb-3 text-shadow text-2xl">
          au Gîte Pim
        </h4>
        <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
        <RouterLink :to="{ name: 'ChambreResa' }"
          class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
          Reserver
        </RouterLink>
      </div>
    </div>
  </section>

  <!------------------------- GALERIE IMAGES ------------------------------>
  <section class="py-10 px-4 bg-white mt-10">
    <div class="max-w-7xl mx-auto">
      <!-- Titre de la section -->
      <h2 class="text-3xl font-bold mb-6">Découvrez nos Bungalows Mer et Jardin</h2>

      <!-- Grille pour toutes les images avec espacement uniforme -->
      <div class="grid grid-cols-1 gap-y-6">
        <!-- Première image occupant toute la largeur -->
        <div>
          <img src="/chambre/Bungalow-Jardin-03.png" alt="Bungalow Jardin"
            class="w-full h-72 md:h-96 object-cover rounded-lg shadow-md" />
        </div>

        <!-- Grille responsive pour les deux images suivantes -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src="/chambre/Bungalow-Mer-03.png" alt="Bungalow Mer"
              class="w-full h-80 object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <img src="/chambre/Bungalow-Jardin-01.png" alt="Bungalow Jardin"
              class="w-full h-80 object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <!-- Dernière image occupant toute la largeur -->
        <div>
          <img src="/chambre/Bungalow-Jardin-03.png" alt="Bungalow Jardin"
            class="w-full h-72 md:h-96 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  </section>


  <!------------------------- LES 2 CARDS ALTERNANTS ------------------------------>

  <!-- Conteneur global sans scroll vertical, hauteur fixe -->
  <section class="w-full bg-white mt-10 mb-10 md:mt-30 md:mb-40">
    <div class="relative h-[400px] overflow-hidden" @click="forceTransition">
      <transition name="fade" mode="out-in">
        <!-- Section Bungalow Mer -->
        <div v-if="showMer" key="mer" class="absolute inset-0 flex flex-col md:flex-row justify-around gap-6">
          <!-- Image à gauche avec coins arrondis à droite -->
          <div class="relative w-full md:w-1/2 h-full bg-cover bg-center rounded-tr-lg rounded-br-lg shadow-lg"
            style="background-image: url('/chambre/Bungalow-Mer-01.png')"></div>
          <!-- Texte à droite -->
          <div class="relative w-full md:w-1/2 h-full bg-cover bg-center">
            <div class="absolute inset-0 flex flex-col justify-center p-4 md:p-6">
              <h2 class="text-3xl font-bold">
                Vivez une expérience unique face à l’océan.
              </h2>
              <h4 class="mt-4 font-bold text-lg">
                Ces 5 bungalows Mer vous accueillent dans un cadre apaisant, mêlant élégance et confort. Leur décoration
                lumineuse, touches de bois naturel et grandes baies vitrées offrent une vue imprenable sur la mer, avec
                une terrasse privée pour admirer le coucher du soleil.
              </h4>
            </div>
          </div>
        </div>

        <!-- Section Bungalow Jardin -->
        <div v-else key="jardin" class="absolute inset-0 flex flex-col md:flex-row justify-around gap-6">
          <!-- Texte à gauche -->
          <div class="relative w-full md:w-1/2 h-full bg-cover bg-center">
            <div class="absolute inset-0 flex flex-col justify-center p-4 md:p-6">
              <h2 class="text-3xl font-bold">
                Découvrez 10 bungalows jardin exceptionnels.
              </h2>
              <h4 class="mt-4 font-bold text-lg">
                Nichés au cœur d’un jardin luxuriant, ces 10 bungalows offrent un véritable havre de paix. Alliant
                charme naturel et confort moderne, chaque bungalow bénéficie d’un design soigné, d’un accès direct à des
                espaces verts fleuris et d’installations haut de gamme pour des instants inoubliables.
              </h4>
            </div>
          </div>
          <!-- Image à droite avec coins arrondis à gauche -->
          <div class="relative w-full md:w-1/2 h-full bg-cover bg-center rounded-tl-lg rounded-bl-lg shadow-lg"
            style="background-image: url('/chambre/Bungalow-Jardin-01.png')"></div>
        </div>
      </transition>
    </div>
  </section>

  <!------------------------- BANDEAU PRE-FOOTER ------------------------------>

  <section class="w-full h-[40vh] md:h-[30vh] bg-center bg-cover flex items-center justify-center"
    :style="{ backgroundImage: 'url(/chambre/Footer-01.jpg)' }">
    <div class="text-center">
      <h1 class="mb-3 text-white text-4xl font-bold">
        N'attendez plus pour réserver !
      </h1>
      <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
      <RouterLink :to="{ name: 'ChambreResa' }"
        class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
        Je réserve !
      </RouterLink>
    </div>
  </section>




</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showMer = ref(true);
const transitionLocked = ref(false);
let intervalId = null;

/* 
  forceTransition : Permet de basculer immédiatement entre les deux sections  
  si aucun clic récent n'a été effectué, et bloque les clics pendant 1 seconde.
*/
function forceTransition() {
  if (transitionLocked.value) return;
  showMer.value = !showMer.value;
  transitionLocked.value = true;
  setTimeout(() => {
    transitionLocked.value = false;
  }, 1000);
}

/* Alternance automatique toutes les 7 secondes si pas de clic récent */
onMounted(() => {
  intervalId = setInterval(() => {
    if (!transitionLocked.value) {
      showMer.value = !showMer.value;
    }
  }, 7000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Effet de fondu simple, sans translation verticale */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>