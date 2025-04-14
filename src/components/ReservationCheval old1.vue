<template>
  <div class="reservation-cheval p-4">
    <h2 class="text-2xl font-bold mb-4">Réserver une Randonnée à Cheval</h2>

    <!-- Étape 1 : Vérification du numéro de réservation de chambre -->
    <div v-if="step === 1">
      <p class="mb-2 font-medium">
        Entrez votre numéro de réservation de chambre :
      </p>
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

    <!-- Étape 2 : Formulaire de réservation cheval -->
    <div v-else-if="step === 2">
      <p class="mb-2">
        Votre chambre est réservée du 
        <strong>{{ roomReservation.startDate }}</strong> au 
        <strong>{{ roomReservation.endDate }}</strong>.
      </p>

      <!-- Choix de la date de randonnée -->
      <div class="mb-4">
        <label class="block text-sm font-medium" for="date">
          Date de la randonnée :
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

      <!-- Sélection des chevaux via thumbnails -->
      <div v-if="date && timeslot" class="mb-4 p-4 border rounded shadow-md">
        <p class="font-medium mb-2">
          Choisissez vos {{ participants }} cheval(x) parmi ceux disponibles :
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div
            v-for="horse in filteredHorses"
            :key="horse"
            class="relative cursor-pointer border rounded p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform"
            :class="{
              'opacity-50 cursor-not-allowed': !isHorseAvailable(horse),
              'border-blue-500': selectedHorses.includes(horse)
            }"
            @click="toggleHorseSelection(horse)"
          >
            <img
              :src="getHorseImage(horse)"
              alt=""
              class="w-24 h-24 object-cover"
            />
            <p class="mt-2 font-medium text-center">{{ horse }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-2">
          Chevaux déjà attribués aux moniteurs : {{ moniteurHorses.join(', ') }}<br />
          (Ces chevaux ne sont pas disponibles pour vous).
        </p>
      </div>

      <button
        @click="submitHorseReservation"
        class="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Réserver Randonnée
      </button>
      <p v-if="submitError" class="text-red-500 mt-2">{{ submitError }}</p>
    </div>

    <!-- Étape 3 : Confirmation de la réservation -->
    <div
      v-else-if="step === 3"
      id="confirmation"
      ref="confirmationRef"
      class="mt-4 p-4 border rounded shadow-md"
    >
      <h3 class="text-xl font-bold mb-2">
        Votre réservation de randonnée a été enregistrée !
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
        <span class="font-medium">Chevaux sélectionnés :</span>
        {{ selectedHorses.join(', ') }}
      </p>
      <p class="mt-2">
        Votre n° de réservation cheval est :
        <span class="font-bold text-green-500">{{ horseConfirmation.numero }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue';
import { useReservationStore } from '../stores/reservationStore';
import { useHorseReservationStore } from '../stores/horseReservationStore';

const reservationStore = useReservationStore();
reservationStore.init();

const horseStore = useHorseReservationStore();
horseStore.init();

// Gestion des étapes
const step = ref(1);

// Étape 1 : Vérification du numéro de réservation de chambre
const roomReservationNumber = ref('');
const roomError = ref('');
const roomReservation = ref(null);

// Étape 2 : Champs pour la réservation de randonnée
const date = ref('');
const timeslot = ref('');
const participants = ref(1);
const selectedHorses = ref([]);
const submitError = ref('');
const horseConfirmation = ref(null);

// Créneaux horaires
const morningSlots = ['8h - 9h', '9h - 10h', '10h - 11h'];
const afternoonSlots = ['14h - 15h', '15h - 16h', '16h - 17h'];

// Gestion des chevaux moniteurs (2 chevaux aléatoires)
const MONITEUR_HORSES = ref([]);
function generateMoniteurHorses() {
  const shuffled = [...horseStore.horses].sort(() => 0.5 - Math.random());
  MONITEUR_HORSES.value = shuffled.slice(0, 2);
}
generateMoniteurHorses();
const moniteurHorses = computed(() => MONITEUR_HORSES.value);

// Mapping pour les images (noms affichés avec accents → noms de fichiers sans accents)
const horseFileMap = {
  'Comète': 'Comete.jpg',
  'Éclair': 'Eclair.jpg',
  'Koné': 'Kone.jpg',
  'Inanouï': 'Inanoui.jpg'
  // Ajoutez d'autres correspondances si nécessaire
};

function getHorseImage(horseName) {
  // Si un mapping existe, utiliser le nom du fichier mappé, sinon on retire les accents manuellement
  if (horseFileMap[horseName]) {
    return `/cheval/${horseFileMap[horseName]}`;
  }
  // Remplacement basique des accents, ici on remplace par exemple "é" par "e"
  const normalized = horseName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return `/cheval/${normalized}.jpg`;
}

// Filtrage des chevaux disponibles : exclut les moniteurs et ceux déjà utilisés pour le créneau
const filteredHorses = computed(() => {
  if (!date.value || !timeslot.value) {
    return horseStore.horses.filter(h => !moniteurHorses.value.includes(h));
  }
  const used = horseStore.getHorsesForTimeslot(date.value, timeslot.value);
  return horseStore.horses.filter(
    h => !moniteurHorses.value.includes(h) && !used.includes(h)
  );
});

// Vérification de la disponibilité d'un cheval
function isHorseAvailable(horseName) {
  return filteredHorses.value.includes(horseName);
}

// Sélection / désélection d'un cheval
function toggleHorseSelection(horseName) {
  if (!isHorseAvailable(horseName)) return;
  if (!selectedHorses.value.includes(horseName)) {
    if (selectedHorses.value.length >= participants.value) return;
    selectedHorses.value.push(horseName);
  } else {
    selectedHorses.value = selectedHorses.value.filter(h => h !== horseName);
  }
}

// Étape 1 : Vérifier le numéro de réservation de chambre
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

// Étape 2 : Soumission de la réservation de randonnée
function submitHorseReservation() {
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
    submitError.value = "Veuillez sélectionner la date de la randonnée.";
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
  if (selectedHorses.value.length !== participants.value) {
    submitError.value = "Le nombre de chevaux sélectionnés doit correspondre au nombre de participants.";
    return;
  }
  const resData = {
    roomReservationNumber: roomReservationNumber.value,
    date: date.value,
    timeslot: timeslot.value,
    participants: participants.value,
    selectedHorses: [...selectedHorses.value]
  };
  const newRes = horseStore.addReservation(resData);
  horseConfirmation.value = newRes;
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
/* Les effets de hover et de grisage sont gérés via Tailwind dans le template */
</style>
