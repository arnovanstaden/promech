// Components
import Page from "../components/UI/Library/Page/Page";
import Section from "../components/UI/Library/Section/Section";
import Container from "../components/UI/Library/Container/Container";
import ClientBanner from "../components/Content/ClientBanner/ClientBanner";
import StatsBanner from "../components/Content/StatsBanner/StatsBanner";

// Styles
import styles from "../styles/pages/about.module.scss";

const About = () => {
  return (
    <Page
      head={{
        title: "About | ProMech",
        description: "FIX THIS",
        canonical: "/",
      }}
      className={styles.about}
    >
      <Section
        className={styles.overview}
        heading={{
          title: "Company Overview",
          subtitle: "About Us"
        }}
      >
        <div className={styles.content}>
          <p>
            Established in 2015, Promech Engineering is a dynamic and experienced consulting engineering firm with the capacity to provide comprehensive and value-driven design and project management services.
          </p>
          <p>
            As providers of engineering solutions to clients in the property, commercial and industrial markets, our dedicated and professional team of engineering specialists have built a reputation for providing viable, durable and cost-effective solutions to meet challenging project requirements throughout Africa.
          </p>
        </div>
      </Section>

      <ClientBanner />

      <Section
        className={styles.values}
        heading={{
          title: "Our Values",
          subtitle: "About Us"
        }}
        colour="dark"
        id="values"
      >
        <div className={styles.grid} >
          <div className={styles.value}>
            <h4>Commitment</h4>
            <hr />
            <p>
              We commit to deliver work of the highest quality that would build trust with our clients
            </p>
          </div>
          <div className={styles.value}>
            <h4>Inspiration</h4>
            <hr />
            <p>
              We endeavour to demostrate our passion for continuous improvement and work excellence
            </p>
          </div>
          <div className={styles.value}>
            <h4>Loyalty</h4>
            <hr />
            <p>
              We seek to build a brighter future and to assist in improving the lives of all South Africa.
            </p>
          </div>
          <div className={styles.value}>
            <h4>Innovation</h4>
            <hr />
            <p>
              We strive to remain and be at the forefront of technical innovation through training, skills development &amp; implementation of technical knowledge &amp; software for effective modern design in the infrastructure
            </p>
          </div>
        </div>

      </Section>

      <StatsBanner />

      <Section
        className={styles.memberships}
        heading={{
          title: "Professional Memberships",
          subtitle: "About Us"
        }}
        id="memberships"
      >
        <div className={styles.grid} >
          <img src="/images/pages/about/ECSA-Logo.png" alt="ECSA-Logo" />
          <img src="/images/pages/about/GBCSA-Logo.png" alt="GBCSA-Logo" />
          <img src="/images/pages/about/SAIMECHE-Logo.png" alt="SAIMECHE-Logo" />
        </div>

      </Section>


    </Page>
  )
}

export default About

