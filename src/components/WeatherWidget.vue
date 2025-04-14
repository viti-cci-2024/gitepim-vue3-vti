<template>
  <div class="weather-widget p-4 border rounded shadow-md">
    <p v-if="loading">Chargement de la météo...</p>
    <div v-else>
      <h3 class="text-lg font-bold">
        Météo à {{ city }} le {{ currentDate }}
      </h3>
      <p class="text-md capitalize">{{ weatherDescription }}</p>
      <p class="text-2xl">{{ temperature }}°C</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const city = 'Poum';
const apiKey = '69ec84f6c4da6ab8ba6745bca7421a99';

const loading = ref(true);
const temperature = ref(null);
const weatherDescription = ref('');

// Calcul de la date actuelle formatée pour la France
const currentDate = computed(() => {
  return new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
});

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
