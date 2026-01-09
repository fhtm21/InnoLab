import themes from './themes.json'
import projects from './projects.json'
import people from './people.json'
import articles from './articles.json'
import metrics from './metrics.json'

export function getThemes() {
  return themes
}

export function getThemeBySlug(slug) {
  return themes.find((t) => t.slug === slug) || null
}

export function getProjects() {
  return projects
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}

export function getPeople() {
  return people
}

export function getPersonBySlug(slug) {
  return people.find((p) => p.slug === slug) || null
}

export function getArticles() {
  return articles
}

export function getMetrics() {
  return metrics
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null
}

export function getProjectsByThemeSlug(themeSlug) {
  return projects.filter((p) => Array.isArray(p.themes) && p.themes.includes(themeSlug))
}

export function getPeopleByThemeSlug(themeSlug) {
  const theme = getThemeBySlug(themeSlug)
  if (!theme) return []
  const slugs = Array.isArray(theme.relatedPeople) ? theme.relatedPeople : []
  return people.filter((p) => slugs.includes(p.slug))
}

export function getRelatedArticlesForTheme(themeSlug) {
  return articles.filter((a) => Array.isArray(a.relatedThemes) && a.relatedThemes.includes(themeSlug))
}

export function getRelatedArticlesForProject(projectSlug) {
  return articles.filter((a) => Array.isArray(a.relatedProjects) && a.relatedProjects.includes(projectSlug))
}

export function getRelatedArticlesForPerson(personSlug) {
  return articles.filter((a) => Array.isArray(a.relatedPeople) && a.relatedPeople.includes(personSlug))
}