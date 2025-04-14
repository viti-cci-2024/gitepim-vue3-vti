<template>
  <header class="fixed top-0 left-0 w-full bg-gray-100 shadow z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">
        Logo
      </div>

      <!-- Navigation -->
      <nav class="flex gap-6">
        <router-link
          :to="{ name: 'Home' }"
          class="text-gray-700 font-medium hover:text-gray-900 transition"
          :class="{ 'border-b-2 border-gray-800 pb-1': $route.name === 'Home' }"
        >
          Accueil
        </router-link>
        <router-link
          :to="{ name: 'About' }"
          class="text-gray-700 font-medium hover:text-gray-900 transition"
          :class="{ 'border-b-2 border-gray-800 pb-1': $route.name === 'About' }"
        >
          À propos
        </router-link>
        <router-link
          :to="{ name: 'Contact' }"
          class="text-gray-700 font-medium hover:text-gray-900 transition"
          :class="{ 'border-b-2 border-gray-800 pb-1': $route.name === 'Contact' }"
        >
          Contact
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
// rien ici
</script>
