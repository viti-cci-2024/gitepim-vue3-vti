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
        <RouterLink :to="{ name: 'Chambre' }"
          class="inline-block text-lg font-semibold py-3 px-8 rounded-full bg-[#FE8A24] text-white transition-all hover:bg-[#09012B] hover:scale-105">
          En savoir plus
        </RouterLink>
      </div>
    </div>
  </section>

  <!------------------------- GALERIE IMAGES ------------------------------>
  <section class="py-10 px-4 bg-white">
  <div class="max-w-7xl mx-auto">
    <!-- Titre de la section -->
    <h2 class="text-3xl font-bold mb-6">Découvrez nos Bungalows Mer et Jardin</h2>

    <!-- Grille pour toutes les images avec espacement uniforme -->
    <div class="grid grid-cols-1 gap-y-6">
      <!-- Première image occupant toute la largeur -->
      <div>
        <img
          src="/chambre/Bungalow-Jardin-03.png"
          alt="Bungalow Jardin"
          class="w-full h-72 md:h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- Grille responsive pour les deux images suivantes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src="/chambre/Bungalow-Mer-03.png"
            alt="Bungalow Mer"
            class="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <img
            src="/chambre/Bungalow-Jardin-01.png"
            alt="Bungalow Jardin"
            class="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <!-- Dernière image occupant toute la largeur -->
      <div>
        <img
          src="/chambre/Bungalow-Jardin-03.png"
          alt="Bungalow Jardin"
          class="w-full h-72 md:h-96 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>




  <!------------------------- LES 2 CARDS ------------------------------>




  <section class="w-full h-[60vh] bg-cover bg-center bg-white">

     <!-- Conteneur principal responsive -->
      <div class="flex flex-col md:flex-row justify-around gap-6">

        <!-- Image Left -->
        <div class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-tr-lg rounded-br-lg shadow-lg"
          style="background-image: url('/chambre/Bungalow-Mer-01.png')">

        </div>

        <!-- Card right -->
        <div class="relative w-full md:w-1/2 h-[400px] bg-cover bg-center">
          <!-- Contenu texte au-dessus de l'image -->
          <div class="absolute inset-0 flex flex-col justify-start p-4 md:p-6">
            <h2 class="text-3xl font-bold">Vivez une expérience unique face à l’océan.</h2> <br>
            <h4 class="font-bold text-lg mb-2">Ces 5 bungalows Mer vous accueillent dans un cadre apaisant, mêlant
              élégance et confort. Avec leur décoration lumineuse, leurs touches de bois naturel et leurs grandes baies
              vitrées, ils offrent une vue imprenable
              sur la mer. Chaque bungalow dispose d'une terrasse privée pour admirer
              le coucher de soleil et profiter de l'air marin.</h4>
          </div>
        </div>
      </div>
 
  </section>

    <!------------------------- BANDEAU PRE-FOOTER ------------------------------>
 
    <section
  class="w-full h-[30vh] bg-center bg-cover flex items-center justify-center"
  :style="{ backgroundImage: 'url(/chambre/Footer-01.jpg)' }"
>
  <div class="text-center">
    <h1 class="mb-3 text-white text-4xl font-bold">
      N'attendez plus pour réserver
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

<style scoped>
/* Tu peux garder ce bloc si tu veux ajouter des styles perso */
</style>
