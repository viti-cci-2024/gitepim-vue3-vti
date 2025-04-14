<template>
    <div style="text-align:center; padding: 2rem;">
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <router-link :to="{ name: 'Home' }">Retour à l’accueil</router-link>
    </div>
  </template>
  