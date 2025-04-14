<template>
    <div class="reservation-form p-4">
      <h2 class="text-2xl font-bold mb-4">Réserver une Chambre</h2>
  
      <!-- Étape 1 : Saisie des dates -->
      <div v-if="step === 1">
        <p class="mb-2 font-medium">Sélectionnez vos dates de séjour :</p>
        <div class="flex flex-col sm:flex-row gap-4 mb-4">
          <div class="flex-1">
            <label class="block text-sm font-medium" for="startDate">Date de début :</label>
            <input id="startDate" v-model="startDate" type="date" class="border px-2 py-1 w-full" required />
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium" for="endDate">Date de fin :</label>
            <input id="endDate" v-model="endDate" type="date" class="border px-2 py-1 w-full" required />
          </div>
        </div>
        <button @click="validateDates" class="bg-blue-500 text-white px-4 py-2 rounded">
          Valider les dates
        </button>
        <p v-if="dateError" class="text-red-500 mt-2">{{ dateError }}</p>
      </div>
  
      <!-- Étape 2 : Affichage de la météo et des disponibilités + suite du formulaire -->
      <div v-else-if="step === 2">
        <!-- Affichage de la météo pour la date de début -->
        <div class="mb-4 p-4 border rounded shadow-md">
          <p class="font-medium">Prévision météo pour le {{ startDate }} :</p>
          <div v-if="weatherLoading">
            Chargement de la météo...
          </div>
          <div v-else-if="forecast">
            <p class="capitalize">{{ forecast.description }}</p>
            <p class="text-2xl">{{ forecast.temp }}°C</p>
          </div>
          <div v-else>
            Aucune donnée météo disponible.
          </div>
        </div>
  
        <!-- Affichage des effectifs disponibles et du calendrier simplifié -->
        <div class="mb-4 p-4 border rounded shadow-md">
          <p class="font-medium mb-2">Bungalows disponibles pour les dates sélectionnées :</p>
          <p>Bungalow vue mer : <span class="font-bold">{{ availableMer }}</span> / 5</p>
          <p>Bungalow vue jardin : <span class="font-bold">{{ availableJardin }}</span> / 10</p>
          <div class="mt-4">
            <p class="mb-2 font-medium">Calendrier de disponibilité :</p>
            <table class="w-full text-sm">
              <thead>
                <tr>
                  <th class="border p-1">Date</th>
                  <th class="border p-1">Bungalow mer</th>
                  <th class="border p-1">Bungalow jardin</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="day in calendarDays" :key="day">
                  <td class="border p-1">{{ day }}</td>
                  <td class="border p-1">
                    <span :class="availabilityIndicator(availableMer)">●</span>
                  </td>
                  <td class="border p-1">
                    <span :class="availabilityIndicator(availableJardin)">●</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <!-- Suite du formulaire : nom et choix du type de bungalow -->
        <div class="mb-4">
          <label class="block text-sm font-medium" for="lastName">Nom de famille :</label>
          <input id="lastName" v-model="lastName" type="text" class="border px-2 py-1 w-full" required />
        </div>
        <div class="mb-4">
          <p class="font-medium mb-2">Choisissez votre type de chambre :</p>
          <div class="flex items-center gap-4">
            <div v-if="availableMer > 0">
              <input type="radio" id="mer" value="Bungalow mer" v-model="selectedRoomType" />
              <label for="mer">Bungalow vue mer</label>
            </div>
            <div v-if="availableJardin > 0">
              <input type="radio" id="jardin" value="Bungalow jardin" v-model="selectedRoomType" />
              <label for="jardin">Bungalow vue jardin</label>
            </div>
          </div>
          <p v-if="!availableMer && !availableJardin" class="text-red-500 mt-2">
            Aucun bungalow disponible pour les dates sélectionnées.
          </p>
        </div>
        <button
          @click="submitReservation"
          class="bg-green-500 text-white px-4 py-2 rounded"
          :disabled="!canSubmit"
        >
          Réserver
        </button>
        <p v-if="submitError" class="text-red-500 mt-2">{{ submitError }}</p>
      </div>
  
      <!-- Confirmation de réservation -->
      <div v-else-if="step === 3" class="mt-4 p-4 border rounded shadow-md">
        <h3 class="text-xl font-bold mb-2">Votre réservation a été enregistrée !</h3>
        <p>
          <span class="font-medium">Nom :</span> {{ confirmation.lastName }}
        </p>
        <p>
          <span class="font-medium">Du :</span> {{ confirmation.startDate }} 
          <span class="font-medium">au</span> {{ confirmation.endDate }}
        </p>
        <p>
          <span class="font-medium">Type de chambre :</span> {{ confirmation.roomType }}
        </p>
        <p class="mt-2">
          Votre n° de réservation est : <span class="font-mono">{{ confirmation.numero }}</span>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useReservationStore } from '../stores/reservationStore';
  
  // Initialisation du store et chargement des réservations existantes
  const reservationStore = useReservationStore();
  reservationStore.init();
  
  // Variables pour la gestion du formulaire
  const step = ref(1);
  const startDate = ref('');
  const endDate = ref('');
  const dateError = ref('');
  
  const lastName = ref('');
  const selectedRoomType = ref('');
  const submitError = ref('');
  const confirmation = ref(null);
  
  // Variables pour la météo
  const weatherLoading = ref(false);
  const forecast = ref(null);
  const openWeatherApiKey = '69ec84f6c4da6ab8ba6745bca7421a99';
  const city = 'Poum';
  
  // Variables pour la disponibilité (capacités de base)
  const capacityMer = 5;
  const capacityJardin = 10;
  const availableMer = ref(capacityMer);
  const availableJardin = ref(capacityJardin);
  
  // Pour le calendrier : générer une liste de dates entre startDate et endDate
  const calendarDays = computed(() => {
    if (!startDate.value || !endDate.value) return [];
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    const days = [];
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      // Format yyyy-mm-dd
      const formatted = dt.toISOString().split('T')[0];
      days.push(formatted);
    }
    return days;
  });
  
  // Fonction de validation des dates et passage à l'étape suivante
  const validateDates = () => {
    dateError.value = '';
    if (!startDate.value || !endDate.value) {
      dateError.value = 'Veuillez renseigner les deux dates.';
      return;
    }
    if (startDate.value > endDate.value) {
      dateError.value = 'La date de début doit être antérieure à la date de fin.';
      return;
    }
    // Une fois validées, on peut récupérer la météo et la disponibilité
    fetchForecast();
    computeAvailability();
    step.value = 2;
  };
  
  // Récupération de la prévision météo (on va récupérer la forecast et en extraire la première donnée correspondant à la date de début, si disponible)
  const fetchForecast = async () => {
    weatherLoading.value = true;
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${openWeatherApiKey}&units=metric&lang=fr`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Erreur de récupération météo');
      const data = await res.json();
      // On cherche la première prévision dont la date (YYYY-MM-DD) correspond à startDate
      const targetDate = startDate.value;
      const forecastItem = data.list.find(item => item.dt_txt.startsWith(targetDate));
      if (forecastItem) {
        forecast.value = {
          temp: forecastItem.main.temp,
          description: forecastItem.weather[0].description,
        };
      } else {
        forecast.value = null;
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la météo :", error);
      forecast.value = null;
    }
    weatherLoading.value = false;
  };
  
  // Fonction pour vérifier le chevauchement entre deux intervalles de dates
  const isOverlap = (start1, end1, start2, end2) => {
    return start1 <= end2 && start2 <= end1;
  };
  
  // Calcul de la disponibilité en fonction des réservations déjà enregistrées
  const computeAvailability = () => {
    // Initialement, la disponibilité est égale aux capacités de base
    let bookedMer = 0;
    let bookedJardin = 0;
  
    // Pour chaque réservation existante de chambre, vérifier si elle chevauche la période demandée
    reservationStore.reservations.forEach(res => {
      if (
        res.type === 'Chambre' &&
        res.startDate && res.endDate &&
        isOverlap(startDate.value, endDate.value, res.startDate, res.endDate)
      ) {
        if (res.roomType === 'Bungalow mer') bookedMer++;
        if (res.roomType === 'Bungalow jardin') bookedJardin++;
      }
    });
  
    availableMer.value = capacityMer - bookedMer;
    availableJardin.value = capacityJardin - bookedJardin;
  };
  
  // Indicateur de disponibilité : retourne une classe Tailwind en fonction de la disponibilité
  const availabilityIndicator = (avail) => {
    return avail > 0 ? 'text-green-500 text-xl' : 'text-red-500 text-xl';
  };
  
  // Vérifier que le reste du formulaire est rempli pour activer la soumission
  const canSubmit = computed(() => {
    return lastName.value && selectedRoomType.value;
  });
  
  // Soumission finale du formulaire
  const submitReservation = () => {
    submitError.value = '';
    if (!canSubmit.value) {
      submitError.value = 'Veuillez renseigner votre nom et choisir un type de chambre.';
      return;
    }
    // Préparer les données à enregistrer
    const reservationData = {
      type: 'Chambre',
      startDate: startDate.value,
      endDate: endDate.value,
      lastName: lastName.value,
      roomType: selectedRoomType.value,
    };
    // Ajout de la réservation via le store (génère également le numéro de réservation)
    const newReservation = reservationStore.addReservation(reservationData);
    confirmation.value = {
      lastName: lastName.value,
      startDate: startDate.value,
      endDate: endDate.value,
      roomType: selectedRoomType.value,
      numero: newReservation.numero,
    };
    step.value = 3;
  };
  </script>
  
  <style scoped>
  /* Vous pouvez affiner le style du calendrier et des autres éléments ici */
  </style>
  