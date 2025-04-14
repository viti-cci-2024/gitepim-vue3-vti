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
        <!-- Bouton Réservez via RouterLink vers la page "Chambre" -->
        <RouterLink :to="{ name: 'Chambre' }"
          class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
          Réserver
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- GARDERIE EQUIPES PHOTO + TEXTE 1 et 2 -->

 
  <section class="py-10 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
        <!-- Titre de la section -->
  <h2 class="text-3xl font-bold mb-2">Notre équipe de passionnés saura encadrer vos enfants</h2>

   <!-- 001 -->
      <div class="flex flex-col md:flex-row justify-around gap-6">
        <div class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center">
          <div class="absolute inset-0 flex flex-col justify-center  md:p-6">
            <h2 class="text-3xl font-bold">Julie</h2>
            <br />
            <h4 class="font-bold text-lg mb-2">
              Bonjour, je travaille aujourd'hui dans la garderie de ce gîte. Ancienne puéricultrice, j'ai passé
              plusieurs années à accompagner les tout-petits dans leurs premiers pas. J'adore organiser des activités
              ludiques en plein air dans notre magnifique gite. Au plaisir de vous rencontrer et de partager ces moments
              uniques avec vos petits trésors.
            </h4>
          </div>
        </div>
        <div class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-xl shadow-lg"
          style="background-image: url('/garderie/garderie01.jpg')"></div>
      </div>
    </div>
  </section>

  <!-- 002 -->
  <section class="py-10 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-around gap-6">
        <div class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-xl shadow-lg"
          style="background-image: url('/garderie/garderie02.jpg')"></div>
        <div class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center">
          <div class="absolute inset-0 flex flex-col justify-center p-4 md:p-6">
            <h2 class="text-3xl font-bold">Emilie</h2>
            <br />
            <h4 class="font-bold text-lg mb-2 pb-2">
              Ancienne professeure de collège, j'ai passé plusieurs années à transmettre des connaissances et soutenir
              les enfants pendant leurs apprentissages. Je propose des activités ludiques et éducatives pour rendre
              l’apprentissage et amusant. Au plaisir de vous accueillir et de partager ces instants précieux avec vos
              jeunes explorateurs !
            </h4>
           
          </div>
        </div>
      </div>
    </div>
  </section>

  <!------------------------- BANDEAU PRE-FOOTER ------------------------------>

  <section
    class="w-full h-[30vh] bg-cover bg-[center_90%]  flex items-center justify-center bg-gray-400 bg-blend-multiply"
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

<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
