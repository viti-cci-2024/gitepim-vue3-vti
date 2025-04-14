<template>
    <div class="weather-widget p-4 border rounded shadow-md">
      <p v-if="loading">Chargement de la météo...</p>
      <div v-else>
        <h3 class="text-lg font-bold">Météo à {{ city }}</h3>
        <p class="text-md capitalize">{{ weatherDescription }}</p>
        <p class="text-2xl">{{ temperature }}°C</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Définition fixe de la ville et de la clé API OpenWeatherMap
  const city = 'Poum';
  const apiKey = '69ec84f6c4da6ab8ba6745bca7421a99';
  
  const loading = ref(true);
  const temperature = ref(null);
  const weatherDescription = ref('');
  
  const fetchWeather = async () => {
    loading.value = true;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Erreur lors de la récupération de la météo");
      }
      const data = await res.json();
      temperature.value = data.main.temp;
      weatherDescription.value = data.weather[0].description;
    } catch (error) {
      console.error("Erreur de récupération météo :", error);
    }
    loading.value = false;
  };
  
  onMounted(() => {
    fetchWeather();
  });
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter ici des styles personnalisés complémentaires si nécessaire */
  </style>
  