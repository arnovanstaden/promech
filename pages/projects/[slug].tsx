import { client } from "../../utils/apollo-client";
import { gql } from "@apollo/client";
import { GetStaticProps, GetStaticPaths } from 'next'
import { IProject } from "../../utils/types";

// Components
import Page from "../../components/UI/Library/Page/Page";
import Section from "../../components/UI/Library/Section/Section"

// Styles
import styles from "../../styles/pages/projects/[slug].module.scss";
import Image from 'next/image';

const Project = ({ project }: { project: IProject }) => {

  const services = project.services.map(service => service.category).join(", ")

  return (
    <Page
      head={{
        title: `${project.title} | Promech`,
        description: `${project.description}`,
        canonical: `/project/${project.slug}`,
      }}
      className={styles.project}
    >
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // FIX THIS - GraphQL Vars
  const { data } = await client.query({
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

  const project = data.allProject.filter(project => project.slug.current === params.slug)[0]

  return {
    props: {
      project,
    },
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
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

  const paths = data.allProject.map((project) => ({
    params: {
      slug: project.slug.current
    },
  }))

  return {
    paths,
    fallback: false
  }

}