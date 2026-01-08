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

import ThemeDetailPage from '../views/ThemeDetailPage.vue'
import ProjectDetailPage from '../views/ProjectDetailPage.vue'
import PersonProfilePage from '../views/PersonProfilePage.vue'
import ArticleDetailPage from '../views/ArticleDetailPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },

  // NOTE: For now, keep the existing Research page as the Activities landing page.
  // We will update the UI labels/copy to “Activities” while reusing the component.
  { path: '/activities', name: 'activities', component: ResearchPage },
  { path: '/activities/themes/:slug', name: 'activities-theme', component: ThemeDetailPage },
  { path: '/activities/projects/:slug', name: 'activities-project', component: ProjectDetailPage },

  { path: '/facilities', name: 'facilities', component: FacilitiesPage },

  { path: '/people', name: 'people', component: PeoplePage },
  { path: '/people/:slug', name: 'person', component: PersonProfilePage },

  { path: '/articles', name: 'articles', component: ArticlesPage },
  { path: '/articles/:slug', name: 'article', component: ArticleDetailPage },

  { path: '/collaborate', name: 'collaborate', component: CollaboratePage },
  { path: '/contact', name: 'contact', component: ContactPage },

  // Backward-compatible redirects (old IA)
  { path: '/research', redirect: '/activities' },
  { path: '/research/themes/:slug', redirect: (to) => `/activities/themes/${to.params.slug}` },
  { path: '/research/projects/:slug', redirect: (to) => `/activities/projects/${to.params.slug}` },

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