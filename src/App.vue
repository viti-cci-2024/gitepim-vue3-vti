<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <!-- Main qui pousse le footer, pleine largeur -->
    <main class="flex-grow pt-24 w-full">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
<style>
/* Si la classe text-shadow définie dans style.css ne s'applique pas,
   on peut forcer son application ici en déclarant la règle globalement */
:global(.text-shadow) {
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
}
</style>