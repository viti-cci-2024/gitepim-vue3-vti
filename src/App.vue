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
