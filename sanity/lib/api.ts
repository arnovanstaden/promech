import { client } from './client'
import {
  projectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  servicesQuery,
} from './queries'
import { IProject, IService } from '../../utils/types'

export function getProjects() {
  return client.fetch<IProject[]>(projectsQuery)
}

export function getFeaturedProjects() {
  return client.fetch<IProject[]>(featuredProjectsQuery)
}

export function getProjectBySlug(slug: string) {
  return client.fetch<IProject | null>(projectBySlugQuery, { slug })
}

export function getProjectSlugs() {
  return client.fetch<{ slug: string }[]>(projectSlugsQuery)
}

export function getServices() {
  return client.fetch<IService[]>(servicesQuery)
}
