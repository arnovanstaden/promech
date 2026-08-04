import { notFound } from "next/navigation";
import { client } from "../../../../utils/apollo-client";
import { gql } from "@apollo/client";
import { IProject } from "../../../../utils/types";
import { buildMetadata } from "../../../../utils/metadata";

// Components
import Page from "../../../../components/UI/Library/Page/Page";
import Section from "../../../../components/UI/Library/Section/Section"

// Styles
import styles from "../../../../styles/pages/projects/[slug].module.scss";
import Image from 'next/image';

interface IProps {
  params: Promise<{ slug: string }>
}

async function getProject(slug: string) {
  // FIX THIS - GraphQL Vars
  const { data } = await client.query<any>({
    query: gql`
          query GetProjects {
            allProject {
                title
                client
                location
                description
                home
                year
                services {
                category
                }
                slug {
                current
                }
                thumbnail {
                asset {
                    url
                }
                }
                images {
                    asset {
                        url
                        }
                }
            }
            }
        `,
  });

  return data.allProject.find((project) => project.slug.current === slug) as IProject | undefined
}

export async function generateMetadata({ params }: IProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) return {}

  return buildMetadata({
    title: `${project.title} | Promech`,
    description: project.description,
    canonical: `/projects/${project.slug.current}`,
  })
}

export async function generateStaticParams() {
  const { data } = await client.query<any>({
    query: gql`
          query GetProjects {
            allProject {
                slug {
                current
                }
            }
          }
        `,
  });

  return data.allProject.map((project) => ({
    slug: project.slug.current,
  }))
}

const Project = async ({ params }: IProps) => {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) notFound()

  const services = project.services.map(service => service.category).join(", ")

  return (
    <Page className={styles.project}>
      <Section
        className={styles.overview}
        heading={{
          title: project.title,
          subtitle: project.location
        }}
      >
        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <Image
              src={project.thumbnail.asset.url}
              fill
              alt={project.title}
              priority
              className={styles.image}
              objectFit='cover'
            />
          </div>
          <div className={styles.info}>
            <div className={styles.group}>
              <h4>Description:</h4>
              <p>{project.description}</p>
            </div>
            <div className={`${styles.group} ${styles.services}`}>
              <h4>Services:</h4>
              <p>{services}</p>
            </div>
            <div className={styles.group}>
              <h4>Client:</h4>
              <p>{project.client}</p>
            </div>
            <div className={styles.group}>
              <h4>Year:</h4>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      </Section>

      {project.images.length > 0 &&
        <Section
          className={styles.gallery}
          heading={{
            title: "Project Gallery",
            subtitle: project.location
          }}
        >
          <div className={styles.grid}>
            {project.images.map((image, index) => (
              <div className={styles.item} key={index}>
                <Image
                  src={image.asset.url}
                  fill
                  alt={project.title}
                  objectFit='cover'
                />
              </div>
            ))}
          </div>
        </Section>
      }
    </Page>
  )
}

export default Project
