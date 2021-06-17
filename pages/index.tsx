import Link from "next/link"

// Components
import Page from "../components/UI/Library/Page/Page";
import Container from "../components/UI/Library/Container/Container";
import Button from "../components/UI/Library/Button/Button";
import NextImage from "../components/UI/Library/NextImage/NextImage";
import Section from "../components/UI/Library/Section/Section"
import ProjectGrid from "../components/Content/ProjectGrid/ProjectGrid"
import Contact from "../components/Content/Contact/Contact"

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
                <Button link="/services">
                  Our Services
                </Button>
                <Button link="/projects"
                  hollow>
                  Past Projects
                </Button>
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
        <div className={styles.grid}>
          <Link href="/about">
            <a>
              <div className={styles.item}>
                <img src="" alt="" />
                <h4>Who We Are</h4>
                <hr />
                <p>Learn more about who we are, our company &amp; values and our professional memberships.</p>
                <button>
                  Read More
                  <i className="icon-arrow_right"></i>
                </button>
              </div>
            </a>
          </Link>
          <Link href="/services">
            <a>
              <div className={styles.item}>
                <img src="" alt="" />
                <h4>What We Do</h4>
                <hr />
                <p>Learn more about comprehensive and value-driven design and project management services.</p>
                <button>
                  Read More
                  <i className="icon-arrow_right"></i>
                </button>
              </div>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <div className={styles.item}>
                <img src="" alt="" />
                <h4>What We’ve Done</h4>
                <hr />
                <p>Take a look at the successful projects we've contributed our unique value to in the past.</p>
                <button>
                  Read More
                  <i className="icon-arrow_right"></i>
                </button>
              </div>
            </a>
          </Link>
        </div>
      </Section>

      <Section
        className={styles.services}
        heading={{
          title: "What We Do",
          subtitle: "Comprehensive & Value-Driven"
        }}
      >

      </Section>
      <Section
        className={styles.projects}
        heading={{
          title: "Our Recent Projects",
          subtitle: "What We’ve Done"
        }}
        colour="dark"
      >
        <ProjectGrid />
        <div className={styles.button}>
          <Button link="/projects"
            hollow>
            View Past Projects
          </Button>
        </div>
      </Section>
      <Section
        className={styles.contact}
        heading={{
          title: "Have a burning question about your next project?",
          subtitle: "Get in Touch"
        }}
        colour="grey"
      >
        <Contact />
      </Section>
    </Page>
  )
}

export default Home

