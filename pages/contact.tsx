// Components
import Page from "../components/UI/Library/Page/Page";
import ContactComponent from "../components/Content/Contact/Contact";
import Section from "../components/UI/Library/Section/Section"

// Styles
import styles from "../styles/pages/contact.module.scss";

const Contact = () => {
  return (
    <Page
      head={{
        title: "Contact | ProMech",
        description: "FIX THIS",
        canonical: "/",
      }}
      className={styles.contact}
    >
      <Section
        className={styles.contact}
        heading={{
          title: "Have a burning question about your next project?",
          subtitle: "Get in Touch"
        }}
        colour="grey"
      >
        <ContactComponent />
      </Section>
    </Page>
  )
}

export default Contact

