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

import AboutProfilePage from '../views/about/AboutProfilePage.vue'
import AboutPurposePage from '../views/about/AboutPurposePage.vue'
import AboutCapabilitiesPage from '../views/about/AboutCapabilitiesPage.vue'
import AboutGovernancePage from '../views/about/AboutGovernancePage.vue'
import AboutMilestonesPage from '../views/about/AboutMilestonesPage.vue'
import AboutPartnersPage from '../views/about/AboutPartnersPage.vue'
import AboutFaqPage from '../views/about/AboutFaqPage.vue'

import FacilitiesComputePage from '../views/facilities/FacilitiesComputePage.vue'
import FacilitiesSpacePage from '../views/facilities/FacilitiesSpacePage.vue'
import FacilitiesToolsPage from '../views/facilities/FacilitiesToolsPage.vue'
import FacilitiesPolicyPage from '../views/facilities/FacilitiesPolicyPage.vue'

import PeopleLecturersPage from '../views/people/PeopleLecturersPage.vue'
import PeopleJoinPage from '../views/people/PeopleJoinPage.vue'
import PeopleStudentsPage from '../views/people/PeopleStudentsPage.vue'
import PeopleAlumniPage from '../views/people/PeopleAlumniPage.vue'

import ActivitiesStudentProjectsPage from '../views/activities/ActivitiesStudentProjectsPage.vue'
import ActivitiesResearchDevelopmentPage from '../views/activities/ActivitiesResearchDevelopmentPage.vue'
import ActivitiesPartnershipsPage from '../views/activities/ActivitiesPartnershipsPage.vue'
import ActivitiesOutputsPage from '../views/activities/ActivitiesOutputsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },

  { path: '/about', name: 'about', component: AboutPage },
  { path: '/about/profile', name: 'about-profile', component: AboutProfilePage },
  { path: '/about/purpose', name: 'about-purpose', component: AboutPurposePage },
  { path: '/about/capabilities', name: 'about-capabilities', component: AboutCapabilitiesPage },
  { path: '/about/governance', name: 'about-governance', component: AboutGovernancePage },
  { path: '/about/milestones', name: 'about-milestones', component: AboutMilestonesPage },
  { path: '/about/partners', name: 'about-partners', component: AboutPartnersPage },
  { path: '/about/faq', name: 'about-faq', component: AboutFaqPage },

  // NOTE: For now, keep the existing Research page as the Activities landing page.
  // We will update the UI labels/copy to “Activities” while reusing the component.
  { path: '/activities', name: 'activities', component: ResearchPage },
  { path: '/activities/student-projects', name: 'activities-student-projects', component: ActivitiesStudentProjectsPage },
  { path: '/activities/research-development', name: 'activities-research-development', component: ActivitiesResearchDevelopmentPage },
  { path: '/activities/partnerships', name: 'activities-partnerships', component: ActivitiesPartnershipsPage },
  { path: '/activities/outputs', name: 'activities-outputs', component: ActivitiesOutputsPage },
  { path: '/activities/themes/:slug', name: 'activities-theme', component: ThemeDetailPage },
  { path: '/activities/projects/:slug', name: 'activities-project', component: ProjectDetailPage },

  { path: '/facilities', name: 'facilities', component: FacilitiesPage },
  { path: '/facilities/compute', name: 'facilities-compute', component: FacilitiesComputePage },
  { path: '/facilities/space', name: 'facilities-space', component: FacilitiesSpacePage },
  { path: '/facilities/tools', name: 'facilities-tools', component: FacilitiesToolsPage },
  { path: '/facilities/policy', name: 'facilities-policy', component: FacilitiesPolicyPage },

  { path: '/people', name: 'people', component: PeoplePage },
  { path: '/people/lecturers', name: 'people-lecturers', component: PeopleLecturersPage },
  { path: '/people/join', name: 'people-join', component: PeopleJoinPage },
  { path: '/people/students', name: 'people-students', component: PeopleStudentsPage },
  { path: '/people/alumni', name: 'people-alumni', component: PeopleAlumniPage },
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