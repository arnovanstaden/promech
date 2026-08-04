import { groq } from 'next-sanity'

const projectFields = groq`
  title,
  client,
  location,
  description,
  home,
  year,
  slug,
  "thumbnail": thumbnail{asset->{url}},
  "images": coalesce(images[]{asset->{url}}, []),
  "services": coalesce(services[]->{category}, [])
`

export const projectsQuery = groq`*[_type == "project"] | order(year desc){${projectFields}}`

export const featuredProjectsQuery = groq`*[_type == "project" && home == true] | order(year desc){${projectFields}}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{${projectFields}}`

export const projectSlugsQuery = groq`*[_type == "project"]{"slug": slug.current}`

export const servicesQuery = groq`
  *[_type == "service"]{
    category,
    services,
    "image": image{asset->{url}}
  }
`
