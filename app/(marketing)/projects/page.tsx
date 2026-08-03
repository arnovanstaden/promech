import { gql } from "@apollo/client";
import { client } from "../../../utils/apollo-client";
import { IProject } from "../../../utils/types";
import { buildMetadata } from "../../../utils/metadata";

// Components
import Page from "../../../components/UI/Library/Page/Page";
import Section from "../../../components/UI/Library/Section/Section"
import ProjectGrid from "../../../components/Content/ProjectGrid/ProjectGrid"

// Styles
import styles from "../../../styles/pages/projects.module.scss";

export const metadata = buildMetadata({
  title: "Projects | ProMech",
  description: "FIX THIS",
  canonical: "/projects",
})

async function getData() {
  const { data } = await client.query<any>({
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

  return data.allProject as IProject[]
}

const Projects = async () => {
  const projects = await getData()

  return (
    <Page className={styles.projects}>
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
