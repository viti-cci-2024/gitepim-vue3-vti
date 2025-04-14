import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import Bagne from '../views/Bagne.vue'
import Chambre from '../views/Chambre.vue'
import Cheval from '../views/Cheval.vue'
import Garderie from '../views/Garderie.vue'
import Kayak from '../views/Kayak.vue'
import Repas from '../views/Repas.vue'
import NotFound from '../views/Error404View.vue' // pour 404

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/bagne', name: 'Bagne', component: Bagne },
  { path: '/chambre', name: 'Chambre', component: Chambre },
  { path: '/cheval', name: 'Cheval', component: Cheval },
  { path: '/garderie', name: 'Garderie', component: Garderie },
  { path: '/kayak', name: 'Kayak', component: Kayak },
  { path: '/repas', name: 'Repas', component: Repas },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // ← 404
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
