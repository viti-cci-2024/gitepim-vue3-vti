<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Décale le contenu sous la navbar -->
    <main class="pt-24 px-4 max-w-4xl mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
