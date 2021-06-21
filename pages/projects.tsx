import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";
import { IProject } from "../utils/types";

// Components
import Page from "../components/UI/Library/Page/Page";
import Section from "../components/UI/Library/Section/Section"
import ProjectGrid from "../components/Content/ProjectGrid/ProjectGrid"

// Styles
import styles from "../styles/pages/projects.module.scss";

const Projects = ({ projects }: { projects: IProject[] }) => {
  return (
    <Page
      head={{
        title: "Projects | ProMech",
        description: "FIX THIS",
        canonical: "/",
      }}
      className={styles.projects}
    >
      <Section
        className={styles.grid}
        heading={{
          title: "Our Recent Projects",
          subtitle: "What We’ve Done"
        }}
        colour="dark"
      >
        <ProjectGrid projects={projects} />
      </Section>
    </Page>
  )
}

export default Projects

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await await client.query({
    query: gql`
        query {
          allProject {
            title
            client
            location
            description
            home
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
          }
          }
      `,
  });

  return {
    props: {
      projects: data.allProject
    }
  }
}

