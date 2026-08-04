import { getProjects } from "../../../sanity/lib/api";
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

const Projects = async () => {
  const projects = await getProjects()

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
