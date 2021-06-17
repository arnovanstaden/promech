// Components
import Page from "../components/UI/Library/Page/Page";
import Container from "../components/UI/Library/Container/Container";
import Button from "../components/UI/Library/Button/Button";
import NextImage from "../components/UI/Library/NextImage/NextImage";
import Section from "../components/UI/Library/Section/Section"

// Styles
import styles from "../styles/pages/index.module.scss";

const Home = () => {
  return (
    <Page
      head={{
        title: "ProMech Mechanical Engineering",
        description: "FIX THIS",
        canonical: "/",
      }}
      className={styles.home}
    >
      <div className={styles.landing}>
        <Container>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>
                Professional Mechanical
                Engineering Services
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <div className={styles.buttons}>
                <Button link="/services">Our Services</Button>
                <Button link="/projects" hollow>Past Projects</Button>
              </div>
            </div>
            <div className={styles.image}>
              <NextImage
                src="/images/pages/home/landing.png"
                alt="Gears"
                background
              />
            </div>
          </div>
        </Container>
      </div>

      <Section
        className={styles.about}
        heading={{
          title: "We are a Dynamic and Experienced Consulting Engineering Firm.",
          subtitle: "Professional Mechanical Engineering Services"
        }}
        colour="grey"
      >

      </Section>
    </Page>
  )
}

export default Home

