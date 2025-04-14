import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import NotFound from '../views/Error404View.vue' // pour 404

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // ← 404
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
