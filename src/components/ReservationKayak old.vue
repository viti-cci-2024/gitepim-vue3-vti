<template>
    <div class="reservation-kayak p-4">
      <h2 class="text-2xl font-bold mb-4">Réserver un Kayak</h2>
      
      <!-- Étape 1 : Vérification du numéro de réservation de chambre -->
      <div v-if="step === 1">
        <p class="mb-2 font-medium">Entrez votre numéro de réservation de chambre :</p>
        <input
          v-model="roomReservationNumber"
          type="text"
          placeholder="Ex : CH25040013"
          class="border px-2 py-1 w-full"
        />
        <button
          @click="checkRoomReservation"
          class="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Valider
        </button>
        <p v-if="roomError" class="text-red-500 mt-2">{{ roomError }}</p>
      </div>
  
      <!-- Étape 2 : Formulaire de réservation de kayak -->
      <div v-else-if="step === 2">
        <p class="mb-2">
          Votre chambre est réservée du 
          <strong>{{ roomReservation.startDate }}</strong> au 
          <strong>{{ roomReservation.endDate }}</strong>.
        </p>
  
        <!-- Choix de la date de l'activité -->
        <div class="mb-4">
          <label class="block text-sm font-medium" for="date">
            Date de l'activité :
          </label>
          <input
            id="date"
            v-model="date"
            type="date"
            :min="roomReservation.startDate"
            :max="roomReservation.endDate"
            class="border px-2 py-1 w-full"
            required
          />
        </div>
  
        <!-- Bloc météo pour la date sélectionnée -->
        <div v-if="date" class="mb-4 p-4 border rounded shadow-md">
          <p class="font-medium">
            Prévision météo pour votre activité le {{ date }} :
          </p>
          <div v-if="dateWeatherLoading">
            Chargement de la météo...
          </div>
          <div v-else-if="dateForecast">
            <p class="capitalize">{{ dateForecast.description }}</p>
            <p class="text-2xl">{{ dateForecast.temp }}°C</p>
          </div>
          <div v-else>
            Aucune donnée météo disponible pour cette date.
          </div>
        </div>
  
        <!-- Choix du créneau horaire -->
        <div class="mb-4">
          <p class="font-medium mb-2">Sélectionnez un créneau horaire :</p>
          <select v-model="timeslot" class="border px-2 py-1 w-full">
            <option disabled value="">-- Choisissez un créneau --</option>
            <optgroup label="Matin">
              <option v-for="slot in morningSlots" :key="slot" :value="slot">
                {{ slot }}
              </option>
            </optgroup>
            <optgroup label="Après-midi">
              <option v-for="slot in afternoonSlots" :key="slot" :value="slot">
                {{ slot }}
              </option>
            </optgroup>
          </select>
        </div>
  
        <!-- Nombre de participants (max 8) -->
        <div class="mb-4">
          <p class="font-medium">Nombre de participants :</p>
          <input
            type="number"
            v-model.number="participants"
            min="1"
            :max="8"
            class="border px-2 py-1"
            required
          />
          <p class="text-sm text-gray-600">
            Groupes limités à 8 personnes.
          </p>
        </div>
  
        <!-- Choix du type de kayak -->
        <div class="mb-4">
          <p class="font-medium mb-2">Choisissez le type de kayak :</p>
          <div class="flex items-center gap-4">
            <label :class="{ 'opacity-50': availableDouble < requiredDouble }">
              <input 
                type="radio" 
                value="double" 
                v-model="kayakType" 
                :disabled="availableDouble < requiredDouble"
              />
              Kayak double (2 places, disponibles : {{ availableDouble }})
            </label>
            <label :class="{ 'opacity-50': availableSimple < requiredSimple }">
              <input 
                type="radio" 
                value="simple" 
                v-model="kayakType" 
                :disabled="availableSimple < requiredSimple"
              />
              Kayak simple (1 place, disponibles : {{ availableSimple }})
            </label>
          </div>
          <p class="text-sm text-gray-600 mt-2">
            Remarque : pour un kayak double, le nombre de kayaks requis est
            <strong>{{ requiredDouble }}</strong> (chaque kayak double compte pour 2 places).
            Pour un kayak simple, il faut autant de kayaks que de participants.
          </p>
        </div>
  
        <button
          @click="submitKayakReservation"
          class="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Réserver Kayak
        </button>
        <p v-if="submitError" class="text-red-500 mt-2">{{ submitError }}</p>
  
        <!-- Toast pour avertir le dépassement du nombre maximum sélectionnable -->
        <div v-if="toastMessage" class="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {{ toastMessage }}
        </div>
      </div>
  
      <!-- Étape 3 : Confirmation de la réservation -->
      <div
        v-else-if="step === 3"
        id="confirmation"
        ref="confirmationRef"
        class="mt-4 p-4 border rounded shadow-md"
      >
        <h3 class="text-xl font-bold mb-2">
          Votre réservation kayak a été enregistrée !
        </h3>
        <p>
          <span class="font-medium">Numéro de chambre :</span>
          {{ roomReservationNumber }}
        </p>
        <p>
          <span class="font-medium">Date :</span> {{ date }}
        </p>
        <p>
          <span class="font-medium">Créneau :</span> {{ timeslot }}
        </p>
        <p>
          <span class="font-medium">Participants :</span> {{ participants }}
        </p>
        <p>
          <span class="font-medium">Type de kayak :</span> {{ kayakType === 'double' ? 'Kayak double' : 'Kayak simple' }}
        </p>
        <p class="mt-2">
          Votre n° de réservation kayak est :
          <span class="font-bold text-green-500">{{ kayakConfirmation.numero }}</span>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, nextTick, watch } from 'vue';
  import { useReservationStore } from '../stores/reservationStore';
  import { useKayakReservationStore } from '../stores/kayakReservationStore';
  
  const reservationStore = useReservationStore();
  reservationStore.init();
  
  const kayakStore = useKayakReservationStore();
  kayakStore.init();
  
  // Gestion des étapes
  const step = ref(1);
  
  // Étape 1 : Numéro de réservation de chambre
  const roomReservationNumber = ref('');
  const roomError = ref('');
  const roomReservation = ref(null);
  
  // Étape 2 : Données de réservation kayak
  const date = ref('');
  const timeslot = ref('');
  const participants = ref(1);
  const kayakType = ref(''); // 'double' ou 'simple'
  const submitError = ref('');
  const kayakConfirmation = ref(null);
  
  // Créneaux horaires
  const morningSlots = ['8h - 9h', '9h - 10h', '10h - 11h'];
  const afternoonSlots = ['14h - 15h', '15h - 16h', '16h - 17h'];
  
  // ===== Météo pour la date de l'activité =====
  const dateWeatherLoading = ref(false);
  const dateForecast = ref(null);
  const openWeatherApiKey = '69ec84f6c4da6ab8ba6745bca7421a99';
  const city = 'Poum';
  
  watch(date, async (newDate) => {
    if (!newDate) {
      dateForecast.value = null;
      return;
    }
    dateWeatherLoading.value = true;
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${openWeatherApiKey}&units=metric&lang=fr`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Erreur de récupération météo pour l'activité");
      const data = await res.json();
      const forecastItem = data.list.find(item => item.dt_txt.startsWith(newDate));
      if (forecastItem) {
        dateForecast.value = {
          temp: forecastItem.main.temp,
          description: forecastItem.weather[0].description,
        };
      } else {
        dateForecast.value = null;
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la météo :", error);
      dateForecast.value = null;
    }
    dateWeatherLoading.value = false;
  });
  
  // ===== Toast =====
  const toastMessage = ref('');
  function showToast(message) {
    toastMessage.value = message;
    setTimeout(() => {
      toastMessage.value = '';
    }, 3000);
  }
  
  // ===== Gestion des capacités par créneau =====
  // Pour chaque créneau, il y a au maximum 3 kayaks doubles et 2 kayaks simples.
  // Pour un kayak double, le nombre d'unités requises est : ceil(participants / 2)
  // Pour un simple, c'est égal au nombre de participants.
  const reservedDouble = computed(() => {
    return kayakStore.reservations.filter(r => 
      r.date === date.value && r.timeslot === timeslot.value && r.kayakType === 'double'
    ).length;
  });
  const reservedSimple = computed(() => {
    return kayakStore.reservations.filter(r =>
      r.date === date.value && r.timeslot === timeslot.value && r.kayakType === 'simple'
    ).length;
  });
  const availableDouble = computed(() => {
    return Math.max(3 - reservedDouble.value, 0);
  });
  const availableSimple = computed(() => {
    return Math.max(2 - reservedSimple.value, 0);
  });
  
  // Calcul des unités requises en fonction du type choisi
  const requiredKayaks = computed(() => {
    if (kayakType.value === 'double') {
      return Math.ceil(participants.value / 2);
    } else if (kayakType.value === 'simple') {
      return participants.value;
    }
    return 0;
  });
  
  // ===== Mapping pour les images des kayaks (s'applique aux chevaux ici) =====
  const horseFileMap = {
    'Comète': 'Comete.jpg',
    'Éclair': 'Eclair.jpg',
    'Koné': 'Kone.jpg',
    'Inanouï': 'Iananoui.jpg',
    'Paillette': 'Paillette.jpg',
    'Nidguep': 'Nidguep.jpg',
    'Tim': 'Tim.jpg'
    // Ajoutez d'autres correspondances si nécessaire
  };
  
  function getHorseImage(horseName) {
    if (horseFileMap[horseName]) {
      return `/cheval/${horseFileMap[horseName]}`;
    }
    const normalized = horseName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return `/cheval/${normalized}.jpg`;
  }
  
  // ===== Filtrage des kayaks disponibles =====
  // Pour simplifier, on suppose ici que le choix de kayak se fait par type et que
  // le store ne gère pas le détail de chaque unité. Le filtrage consiste à vérifier
  // que la capacité disponible pour le type choisi permet d'accueillir le groupe.
  const doubleSelectable = computed(() => availableDouble.value >= requiredKayaks.value);
  const simpleSelectable = computed(() => availableSimple.value >= requiredKayaks.value);
  
  // Lors de l'affichage, on utilise les options radio et on peut les désactiver si la capacité n'est pas suffisante.
  
  // ===== Gestion du toast si changement de participants réduit le nombre de sélections =====
  watch(participants, (newVal) => {
    if (newVal < selectedHorses.value.length) {
      showToast("Le nombre de participants a été réduit. Veuillez retirer des sélections.");
    }
  });
  
  // ===== Sélection/désélection d'un kayak (ici, d'une option dans la réservation) =====
  // Pour les kayaks, la sélection se fait simplement via le choix de type (double ou simple)
  // et le nombre de participants détermine le nombre d'unités nécessaires.
  // On n'a pas de sélection multiple d'images dans ce cas.
  // Cependant, pour garder la structure similaire, on pourra imaginer que l'utilisateur
  // doit confirmer son choix de type. Ici, nous ne gérons pas la sélection d'images
  // pour les kayaks, puisque l'option se fait via un radio button.
  
  
  // Étape 1 : Vérification du numéro de réservation de chambre
  function checkRoomReservation() {
    roomError.value = '';
    const found = reservationStore.reservations.find(
      r => r.numero === roomReservationNumber.value
    );
    if (!found) {
      roomError.value = "Numéro de chambre invalide ou non trouvé.";
      return;
    }
    roomReservation.value = found;
    step.value = 2;
  }
  
  // Soumission de la réservation de kayak
  function submitKayakReservation() {
    submitError.value = '';
    if (!roomReservationNumber.value.trim()) {
      submitError.value = "Veuillez renseigner votre numéro de réservation de chambre.";
      return;
    }
    if (!roomReservation.value) {
      submitError.value = "Numéro de chambre invalide.";
      return;
    }
    if (!date.value) {
      submitError.value = "Veuillez sélectionner la date de l'activité.";
      return;
    }
    if (date.value < roomReservation.value.startDate || date.value > roomReservation.value.endDate) {
      submitError.value = "La date doit être comprise entre les dates de réservation de la chambre.";
      return;
    }
    if (!timeslot.value) {
      submitError.value = "Veuillez sélectionner un créneau horaire.";
      return;
    }
    if (participants.value < 1 || participants.value > 8) {
      submitError.value = "Le nombre de participants doit être compris entre 1 et 8.";
      return;
    }
    if (!kayakType.value) {
      submitError.value = "Veuillez sélectionner le type de kayak.";
      return;
    }
    // Vérifier la capacité selon le type choisi
    if (kayakType.value === 'double' && requiredKayaks.value > availableDouble.value) {
      submitError.value = "Il ne reste pas assez de kayaks doubles disponibles pour ce créneau.";
      return;
    }
    if (kayakType.value === 'simple' && requiredKayaks.value > availableSimple.value) {
      submitError.value = "Il ne reste pas assez de kayaks simples disponibles pour ce créneau.";
      return;
    }
  
    const resData = {
      roomReservationNumber: roomReservationNumber.value,
      date: date.value,
      timeslot: timeslot.value,
      participants: participants.value,
      kayakType: kayakType.value
    };
  
    const newRes = kayakStore.addReservation(resData);
    kayakConfirmation.value = newRes;
    step.value = 3;
  
    nextTick(() => {
      const el = document.getElementById('confirmation');
      if (el) {
        window.location.hash = '#confirmation';
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter ici vos styles complémentaires si nécessaire */
  </style>
  