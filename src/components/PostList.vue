<template>
    <div>
      <h2>📄 Liste des articles</h2>
  
      <ul>
        <li v-for="post in posts" :key="post.id">
          <strong>{{ post.title }}</strong><br />
          <small>{{ post.body }}</small>
        </li>
      </ul>
  
      <hr class="my-4" />
  
      <h3>➕ Ajouter un article</h3>
      <form @submit.prevent="ajouterArticle">
        <input v-model="titre" placeholder="Titre" required />
        <textarea v-model="contenu" placeholder="Contenu" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const posts = ref([])
  const titre = ref('')
  const contenu = ref('')
  
  // --- Requête GET
  const chargerArticles = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const data = await res.json()
    posts.value = data
  }
  
  // --- Requête POST
  const ajouterArticle = async () => {
    const nouvelArticle = {
      title: titre.value,
      body: contenu.value,
      userId: 1
    }
  
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nouvelArticle)
    })
  
    const data = await res.json()
    posts.value.unshift(data)
    titre.value = ''
    contenu.value = ''
  }
  
  onMounted(() => {
    chargerArticles()
  })
  </script>
  
  <style scoped>
  input,
  textarea {
    display: block;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    width: 100%;
  }
  button {
    padding: 0.5rem 1rem;
  }
  li {
    margin-bottom: 1rem;
  }
  </style>
  