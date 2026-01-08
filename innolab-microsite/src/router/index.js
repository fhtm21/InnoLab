import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ResearchPage from '../views/ResearchPage.vue'
import FacilitiesPage from '../views/FacilitiesPage.vue'
import PeoplePage from '../views/PeoplePage.vue'
import ArticlesPage from '../views/ArticlesPage.vue'
import CollaboratePage from '../views/CollaboratePage.vue'
import ContactPage from '../views/ContactPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/research', name: 'research', component: ResearchPage },
  { path: '/facilities', name: 'facilities', component: FacilitiesPage },
  { path: '/people', name: 'people', component: PeoplePage },
  { path: '/articles', name: 'articles', component: ArticlesPage },
  { path: '/collaborate', name: 'collaborate', component: CollaboratePage },
  { path: '/contact', name: 'contact', component: ContactPage },

  // Catch-all
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router